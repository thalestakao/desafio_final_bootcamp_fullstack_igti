import React from 'react';
import css from './register.module.css';
import { formatNumber } from '../../helpers/formData';

export default function Register(props) {
  const { day, category, description, value, type } = props.item;
  return (
    <div className={`${type === '+' ? css.incomeBox : css.expenseBox}`}>
      <div className={`${css.dayBox}`}>
        <div> {day.toString().padStart(2, '0')}</div>
      </div>
      <div className={css.description}>
        <div className={css.category}>{category}</div>
        <div className={css.textDescription}>{description}</div>
      </div>
      <div className={css.value}>
        <div>R$ {formatNumber(value)}</div>
      </div>
      <div className={css.icon}>
        <i className="material-icons">create</i>
        <i className="material-icons">delete</i>
      </div>
    </div>
  );
}
