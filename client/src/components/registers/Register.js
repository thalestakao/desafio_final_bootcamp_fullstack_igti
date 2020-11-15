import React from 'react';

export default function Register(props) {
  const { day, category, description, value } = props.item;
  return (
    <div className="row">
      <div className="col s1">{day}</div>
      <div className="col s7">
        <div className="row">{category}</div>
        <div className="row">{description}</div>
      </div>
      <div className="col s2">{value}</div>
      <div className="col s1">
        <i className="material-icons">create</i>
      </div>
      <div className="col s1">
        <i className="material-icons">delete</i>
      </div>
    </div>
  );
}
