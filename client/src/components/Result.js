import React from 'react';

export default function Result({
  totalRegisters,
  totalValue,
  incomes,
  expenses,
}) {
  return (
    <div>
      <div className="row">
        <div className="col s3">
          <span>Lançamento: {totalRegisters}</span>
        </div>
        <div className="col s3">
          <span>Receitas: {incomes}</span>
        </div>
        <div className="col s3">
          <span>Despesas: {expenses}</span>
        </div>
        <div className="col s3">
          <span>Saldo: {totalValue}</span>
        </div>
      </div>
    </div>
  );
}
