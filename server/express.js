const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, matchPath } = require('react-router-dom');
const { Product } = require('./db');
import { Provider as ReduxProvider } from 'react-redux';
import createStore, { initializeSession, storeData } from './store';

const app = express();
app.use(express.json());

const { App } = require('../src/components/app');

const routes = require('./routes');

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')));
app.get('/api/getitems', (req, res) => {
  Product.find({}, function (err, item) {
    res.send(item);
  });
});
app.get('/api/getitems/f', (req, res) => {
  const params = req.query;

  Product.find(
    {
      name: { $regex: new RegExp('^' + params.search.toLowerCase(), 'i') },
      price: { $gte: params.minBound, $lte: params.maxBound },
      typeProduct: 'types' in params ? { $in: params.types } : { $ne: '' },
      brand: 'brands' in params ? { $in: params.brands } : { $ne: '' },
    },
    function (err, item) {
      res.send(item);
    },
  );
});
app.post('/addProduct', function (req, res) {
  const obj = req.body;
  Product.create({
    name: obj.name,
    typeProduct: obj.type,
    description: obj.description,
    price: Number(obj.price),
    brand: obj.brand,
    __v: 0,
  })
    .then((doc) => {
      res.status(200).send({
        message: 'Товар загружен',
        doc,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message: 'Не удалось загрузить товар',
        error,
      });
    });
});

app.use('*', async (req, res) => {
  const store = createStore();
  store.dispatch(initializeSession());
  const matchRoute = routes.find((route) => matchPath(req.originalUrl, route));
  let componentData = null;
  if (typeof matchRoute.fetchData === 'function') {
    componentData = await matchRoute.fetchData();
    store.dispatch(storeData(componentData));
  }
  let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
    encoding: 'utf8',
  });
  let appHTML = ReactDOMServer.renderToString(
    <ReduxProvider store={store}>
      <StaticRouter location={req.originalUrl} context={componentData}>
        <App />
      </StaticRouter>
    </ReduxProvider>,
  );
  const reduxState = store.getState();
  indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`);
  indexHTML = indexHTML.replace(
    'window.REDUX_DATA = null;',
    `window.REDUX_DATA = ${JSON.stringify(reduxState)};`,
  );
  res.contentType('text/html');
  res.status(200);

  return res.send(indexHTML);
});

// run express server on port 9000
app.listen('9000', () => {
  console.log('Express server started at http://localhost:9000');
});
