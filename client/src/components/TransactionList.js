import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transacion } from "./Transacion";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transacion key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
