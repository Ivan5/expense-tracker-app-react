import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transacion } from "./Transacion";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

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
