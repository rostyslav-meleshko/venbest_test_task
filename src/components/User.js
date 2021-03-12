import React from 'react';
import { MALE, NAME, LASTNAME, AGE, SEX } from '../constants';

export const User = ({ user }) => {
  return (
    <>
      {`${user[NAME]} ${user[LASTNAME]}`} <br />
      {`Возраст: ${user[AGE]}`} <br />
      {`Пол: ${user[SEX] === MALE ? 'Мужской' : 'Женский'}`}
    </>
  );
};
