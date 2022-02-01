import React from 'react';
import axios from 'axios';
import { ChkbxFilter } from '../ChkbxFilter';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from '../table';

export const Search = () => {
  const storeRedux = useSelector((state) => state);
  const dispatch = useDispatch();

  const [items, setItems] = useState(storeRedux.data);
  const [types, setTypes] = useState(storeRedux.types);
  const [brands, setBrands] = useState(storeRedux.brands);
  const [search, setSearch] = useState('');

  const [minBound, setMinBound] = useState(0);
  const [maxBound, setMaxBound] = useState(1800000);

  const handleInputMinPrice = (event) => {
    setMinBound(Number(event.target.value));
  };
  const handleInputMaxPrice = (event) => {
    setMaxBound(Number(event.target.value));
  };
  useEffect(() => {
    if ('data' in items) {
      getData();
    }
  }, [types, brands, search, minBound, maxBound]);

  function getData() {
    axios
      .get('http://localhost:9000/api/getitems/f', {
        params: { search, types, brands, minBound, maxBound },
      })
      .then((response) => {
        setItems({ data: response.data });
      });
  }

  function searchHandel(event) {
    setSearch(event.target.value);
  }
  useEffect(() => {
    if (!('data' in items)) {
      axios.get('http://localhost:9000/api/getitems').then((response) => {
        setItems({ data: response.data });
      });
    }
  }, []);

  return (
    <div>
      <div className="mainPageWrap">
        <div className="filters">
          <div>
            <div>
              <ChkbxFilter
                value={search}
                onChange={searchHandel}
                setBrands={setBrands}
                setTypes={setTypes}
                handleInputMinPrice={handleInputMinPrice}
                handleInputMaxPrice={handleInputMaxPrice}
                maxBound={maxBound}
                minBound={minBound}
              />
            </div>
          </div>
        </div>
        <div className="contentSide">
          <div style={{ marginBottom: 10 }}>
            <input
              onChange={searchHandel}
              value={search}
              className="searchInput"
              type="text"
              placeholder="Поиск.."
            />
          </div>

          <div>
            <Table items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};
