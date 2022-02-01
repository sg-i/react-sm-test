import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import ReactLoading from 'react-loading';
import './Add.scss';
export const Add = () => {
  const [loadingForm, setLoadingForm] = React.useState(false);

  const [nameItem, setNameItem] = React.useState('');
  const [type, setType] = React.useState('');
  const [brand, setBrand] = React.useState('');

  const [priceItem, setPriceItem] = React.useState('');

  const [descriptionItem, setDescriptionItem] = React.useState('');

  const arrOfTypes = ['Миксер', 'Смартфон', 'Телевизор', 'Пылесос'];
  const arrOfBrand = ['Apple', 'Philips', 'Samsung', 'Dyson', 'LG'];
  function DefaultStates() {
    setNameItem('');
    setType('');
    setBrand('');
    setPriceItem('');
    setDescriptionItem('');
  }

  function uploadProduct() {
    let allData =
      nameItem === '' || priceItem === '' || descriptionItem === '' || type === '' || brand === '';
    if (allData) {
      window.alert('Необходимо заполнить все поля.');
    } else {
      let addQueestion = window.confirm('Вы уверены, что хотите добавить товар?');

      if (addQueestion) {
        setLoadingForm(true);
        axios
          .post('/addProduct', {
            name: nameItem,
            type,
            brand,
            price: priceItem,
            description: descriptionItem,
          })
          .then(function (res) {
            setLoadingForm(false);
            DefaultStates();
            alert('Товар добавлен');
          })
          .catch(function (error) {
            setLoadingForm(false);
            alert(`Товар не добавлен. Ошибка:${error.response.data.message}`);
            console.log({ error: error.response.data.message });
          });
      }
    }
  }
  return (
    <div className="wrapAdd">
      {loadingForm ? (
        <div style={{ padding: '10%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <ReactLoading
              style={{ margin: '0 auto', height: '7%', width: '7%' }}
              type={'spinningBubbles'}
              color={'#000000'}
              height={'4%'}
              width={'4%'}
            />
            <h2 style={{ margin: '0 auto', marginTop: 30 }}>Загрузка</h2>
          </div>
        </div>
      ) : (
        <div className="leftSideAddControl">
          <div className="d-flex mb-10">
            <div className="labelTextAreaAdd">Название:</div>
            <textarea
              value={nameItem}
              rows="1"
              onChange={(e) => setNameItem(e.target.value)}
              className="textareaAdd"
              maxLength={200}
              type="text"
            />
          </div>
          <div className="d-flex mb-10">
            <div className="labelTextAreaAdd">Тип:</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {arrOfTypes.map((el) => (
                <div key={el.toString()}>
                  <input
                    type="radio"
                    name="type"
                    value={el}
                    onChange={(e) => setType(e.target.value)}
                  />
                  {el}
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex mb-10">
            <div className="labelTextAreaAdd">Бренд:</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {arrOfBrand.map((el) => (
                <div key={el.toString()}>
                  <input
                    type="radio"
                    name="brand"
                    value={el}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                  {el}
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex mb-20">
            <div className="labelTextAreaAdd">Цена:</div>
            <input
              value={priceItem}
              onChange={(e) => setPriceItem(e.target.value)}
              // rows="1"
              className="textareaAdd priceInput"
              min={0}
              max={999999999}
              type="number"
            />
          </div>

          <div className="d-flex mb-10">
            <div className="labelTextAreaAdd">Описание:</div>
            <textarea
              value={descriptionItem}
              onChange={(e) => setDescriptionItem(e.target.value)}
              style={{ border: '1px solid black', resize: 'vertical', borderRadius: 10 }}
              rows="8"
              placeholder="Введите данные"
              className="textareaAdd"
              maxLength={400}
              type="text"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <button
              onClick={uploadProduct}
              style={{
                margin: '0 auto',
                padding: 7,
                borderRadius: 15,
                borderColor: 'purple',
                backgroundColor: 'white',
                fontSize: '18px',
                cursor: 'pointer',
              }}>
              Сохранить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
