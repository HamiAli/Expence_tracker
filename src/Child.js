import React, { useContext, useState } from "react";
import { TransactionContext } from "./transiction-conyext";

function Child() {
  let { transiction, addTsaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleADDition = (event) => {
    event.preventDefault();
    if (Number(newAmount) === 0) alert("Please Enter Correct Values ");
    return (
      false,
      addTsaction({
        amount: Number(newAmount),
        desc: newDesc,
      })
    );
  };
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transiction.length; i++) {
      if (transiction[i].amount > 0) income = income + transiction[i].amount;
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transiction.length; i++) {
      if (transiction[i].amount < 0) expense += transiction[i].amount;
    }
    return expense;
  };

  return (
    <>
      <div className="container">
        <h1 className="text-centef">
          <span className="blue">Easy </span>{" "}
          <span className="white">Transactions</span>
        </h1>
          

        <h4 className="text">
          Your <span className="blue"> Balance </span> <br />{" "}
          {getIncome() + getExpense()}
        </h4>
        <div className="expence-traker">
          <h4 className="grenn">
            Income <br /> {getIncome()}
          </h4>
          <h4 className="red">
            Expence <br /> {getExpense()}
          </h4>
        </div>
        <h4 className="text1">
          His<span className="blue">tory</span>
        </h4>
        <hr />

        <form className="Transiction-Form" onSubmit={handleADDition}>
          <label className="text">
            Enter <span className="blue">Discription</span> <br />
            <input
              className="Amount"
              type="text"
              onChange={(ev) => setDesc(ev.target.value)}
              required
            />
          </label>
          <br />

          <label className="text">
            Enter <span className="blue"> Amount </span> <br />
            <input
              className="Amount"
              type="number"
              onChange={(ev) => setAmount(ev.target.value)}
              required
            />
          </label>
          <br />
          <input className="Subm" type="Submit" value="Add Trasiction" />
          <br />
        </form>
      </div>
    </>
  );
}

export default Child;
