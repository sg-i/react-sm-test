import React, { useRef, useState, useEffect, memo } from 'react';
import Chkbx from './Chkbx';

export const ChkbxFilter = ({
  setBrands,
  setTypes,
  handleInputMaxPrice,
  handleInputMinPrice,
  maxBound,
  minBound,
}) => {
  const arrOfTypes = ['Миксер', 'Смартфон', 'Телевизор', 'Пылесос'];
  const arrOfBrand = ['Apple', 'Philips', 'Samsung', 'Dyson', 'LG'];
  const [arrChoiceType, setArrChoiceType] = useState([]);
  const [arrChoiceBrand, setArrChoiceBrand] = useState([]);
  useEffect(() => {
    setTypes(arrChoiceType);
  }, [arrChoiceType]);
  useEffect(() => {
    setBrands(arrChoiceBrand);
  }, [arrChoiceBrand]);

  return (
    <div className="contfilt">
      <ul className="mainListFilters">
        <li>
          <b>{'Тип товара'}</b>
          <ul className="supList">
            {arrOfTypes.map((el) => (
              <Chkbx
                key={el}
                arrChoice={arrChoiceType}
                setArrChoice={setArrChoiceType}
                title={el}
                section={'types'}
              />
            ))}
          </ul>
        </li>
        <li>
          <b>{'Бренд'}</b>
          <ul className="supList">
            {arrOfBrand.map((el) => (
              <Chkbx
                key={el}
                arrChoice={arrChoiceBrand}
                setArrChoice={setArrChoiceBrand}
                title={el}
                section={'brands'}
              />
            ))}
          </ul>
        </li>
        <li>
          <b>Цена</b>
          <div style={{ display: 'flex', alignItems: 'center ', paddingLeft: 10, paddingTop: 7 }}>
            <input
              onChange={handleInputMinPrice}
              value={minBound}
              style={{ width: '50%', padding: 8, border: '0.1rem solid #b5b5b9' }}
              type="text"
            />
            <div className="linePrice"></div>
            <input
              onChange={handleInputMaxPrice}
              value={maxBound}
              style={{ width: '50%', padding: 8, border: '0.1rem solid #b5b5b9' }}
              type="text"
            />
          </div>
          <div style={{ paddingLeft: 10, paddingTop: 10 }}></div>
        </li>
      </ul>
    </div>
  );
};
