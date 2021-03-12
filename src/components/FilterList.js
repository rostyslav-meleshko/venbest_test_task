import React from 'react';
import { NAME, LASTNAME, AGE, SEX, MALE, FEMALE } from '../constants.js'

export const FilterList = ({filterQuery, handleFilterQueryChange, clearfilterQuery}) => {

  return (
    <div className="col">
    <form onSubmit={(event) => event.preventDefault()}>
      <h1 className='text-center'>Фильтр списка</h1> 
      <div className="input-group mb-1">
        <span className="input-group-text fixWidth">
          ИМЯ
        </span>
        <input 
          type="text" 
          className="form-control"
          name={NAME}
          value={filterQuery[NAME]}
          onChange={handleFilterQueryChange}
        />
      </div>

      <div className="input-group mb-1">
        <span className="input-group-text fixWidth">ФАМИЛИЯ</span>
        <input 
          type="text" 
          className="form-control"
          name={LASTNAME}
          value={filterQuery[LASTNAME]}
          onChange={handleFilterQueryChange}
        />
      </div>

      <div className="input-group mb-1">
        <span className="input-group-text fixWidth">ВОЗРАСТ</span>
        <input 
          type="text" 
          className="form-control"
          name={AGE}
          value={filterQuery[AGE]}
          onChange={handleFilterQueryChange}
        />
      </div>

      <div className="input-group mb-1">
        <span className="input-group-text fixWidth">ПОЛ</span>
        <div className="form-control">
        <label className="radio-inline mr-3 ml-1">
          <input
            type="radio"
            value={MALE}
            name={SEX}
            checked={filterQuery[SEX] === MALE}
            onChange={handleFilterQueryChange}
          />
          <span className="ml-1">Мужской</span>
        </label>
        <label className="radio-inline">
          <input 
            type="radio"
            value={FEMALE}
            name={SEX}
            checked={filterQuery[SEX] === FEMALE}
            onChange={handleFilterQueryChange}
          />
          <span className="ml-1">Женский</span>
        </label>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => clearfilterQuery()}
        >
          Очистить фильтр
        </button>
      </div>
    </form>
    </div>
  );
};
