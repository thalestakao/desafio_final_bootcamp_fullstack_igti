import React, { useState } from 'react';
import PeriodSelector from './components/PeriodSelector';
import Registers from './components/registers/Registers';
import Result from './components/Result';
import TransactionService from './services/TransactionService';

export default function App() {
  const [registers, setRegisters] = useState([]);
  const [totalRegisters, setTotalRegisters] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const handleChangePeriodSelector = (period) => {
    TransactionService.getByPeriods(period).then((response) => {
      const {
        totalRegisters,
        incomes,
        expenses,
        totalValue,
        registers,
      } = response.data;
      setTotalRegisters(totalRegisters);
      setIncomes(incomes);
      setExpenses(expenses);
      setTotalValue(incomes - expenses);
      setRegisters(registers);
    });
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Desafio Final do Bootcamp Full Stack</h2>
      </div>
      <div className="row">
        <h3>Controle Financeiro</h3>
      </div>
      <div className="row">
        <PeriodSelector
          onChangePeriodSelecor={handleChangePeriodSelector}
        ></PeriodSelector>
      </div>
      <div className="row">
        <Result
          totalRegisters={totalRegisters}
          incomes={incomes}
          expenses={expenses}
          totalValue={totalValue}
        ></Result>
      </div>
      <div>
        <Registers registers={registers}></Registers>
      </div>
    </div>
  );
}
