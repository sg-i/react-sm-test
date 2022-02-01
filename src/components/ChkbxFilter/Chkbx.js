import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Chkbx({ title, arrChoice, setArrChoice, changeStateTypes, searchState, section }) {
  const test = useSelector((state) => state.types);
  const dispatch = useDispatch();

  const [status, setstatus] = useState(false);
  const handleChange = () => {
    if (!status) {
      if (section === 'types') {
        dispatch({
          type: 'TYPES_ADD',
          data: title,
        });
      }
      if (section === 'brands') {
        dispatch({
          type: 'BRANDS_ADD',
          data: title,
        });
      }
      setArrChoice([...arrChoice, title]);
    } else {
      if (section === 'types') {
        dispatch({
          type: 'TYPES_DEL',
          data: title,
        });
      }
      if (section === 'brands') {
        dispatch({
          type: 'BRANDS_DEL',
          data: title,
        });
      }

      setArrChoice([...arrChoice.filter((elem) => elem !== title)]);
    }
    setstatus(!status);
  };

  return (
    <li>
      <label style={{ cursor: 'pointer' }} className="unselectable">
        <input type="checkbox" onChange={handleChange} checked={status} />
        {title}
      </label>
    </li>
  );
}
export default Chkbx;
