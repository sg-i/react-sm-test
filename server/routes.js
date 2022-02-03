const { Add } = require('../src/components/Add');
const { Search } = require('../src/components/search');

import axios from 'axios';

module.exports = [
  {
    path: '/',
    exact: true,
    component: Search,
    fetchData: function () {
      return axios.get('http://localhost:9000/api/getitems').then((response) => {
        return { data: response.data };
      });
    },
  },
  {
    path: '/add',
    exact: true,
    component: Add,
  },
];
