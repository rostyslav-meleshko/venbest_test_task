import React, { useState, useMemo } from 'react';
import { NAME, LASTNAME, AGE, SEX, MALE, FEMALE, REG_AGE_INPUT } from '../constants';

export const NewUserForm = ({ adduser }) => {
  const [inputs, setInputs] = useState({
    [NAME]: '',
    [LASTNAME]: '',
    [AGE]: '',
    [SEX]: '',
  });

  const handleChange = (event) => {
    const {name, value} = event.target;

    if(name === AGE && (!REG_AGE_INPUT.test(value) || event.key === 69)) {
        return;
      };
    
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const newUser = useMemo(() => {
    return inputs;
  }, [inputs]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid) {
      adduser(newUser);
      setInputs({
        [NAME]: '',
        [LASTNAME]: '',
        [AGE]: '',
        [SEX]: '',
      });
    };
  };

  const isFormValid = useMemo(() => {
    return Object.values(inputs).every(Boolean) && inputs[AGE] >= 18;
  }, [inputs]);

  return (
    <div className="col">
    <form onSubmit={handleSubmit}>
      <h1 className="text-center">Новый пользователь</h1>
      <div className="input-group mb-1">
        <span className="input-group-text fixWidth">
          ИМЯ
        </span>
        <input
          type="text"
          className="form-control"
          name={NAME}
          value={inputs[NAME]}
          onChange={handleChange} />
      </div>

      <div className="input-group mb-1">
        <span className="input-group-text fixWidth">ФАМИЛИЯ</span>
        <input
          type="text"
          className="form-control"
          name={LASTNAME}
          value={inputs[LASTNAME]}
          onChange={handleChange} />
      </div>

      <div className="input-group mb-1">
        <span className="input-group-text fixWidth">ВОЗРАСТ</span>
        <input
          type="number"
          min={18}
          placeholder="Должен быть больше 18"
          className="form-control"
          name={AGE}
          value={inputs[AGE]}
          onChange={handleChange}
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
              checked={inputs[SEX] === MALE}
              onChange={handleChange} />
            <span className="ml-1">Мужской</span>
          </label>
          <label className="radio-inline">
            <input
              type="radio"
              value={FEMALE}
              name={SEX}
              checked={inputs[SEX] === FEMALE}
              onChange={handleChange} />
            <span className="ml-1">Женский</span>
          </label>
        </div>
      </div>

      <div className="d-flex justify-content-center">
      {isFormValid  
        ? (<button 
            type="submit"
            className="btn btn-primary"
          >
            Добавить пользователя
          </button> 
        ) : (
          <button 
            type="submit"
            className="btn btn-danger"
            disabled
          >
            Все поля обязательны
          </button> 
        )}
      </div>
    </form>
    </div>
  );
};
