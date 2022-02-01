import React from 'react';

export const Table = ({ items }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ width: 211 }}>id</th>
          <th style={{ width: 190 }}>Название</th>
          <th>Описание</th>
          <th style={{ width: 150 }}>Тип</th>
          <th style={{ width: 80 }}>Цена</th>
          <th style={{ width: 107 }}>Бренд</th>
        </tr>
      </thead>
      <tbody>
        {items.data?.map((el) => (
          <tr key={el._id}>
            <td>{el._id}</td>
            <td>{el.name}</td>
            <td className="tableDescr">{el.description}</td>
            <td style={{ textAlign: 'center' }}>{el.typeProduct}</td>
            <td style={{ textAlign: 'center' }}>{el.price}</td>
            <td style={{ textAlign: 'center' }}>{el.brand}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
