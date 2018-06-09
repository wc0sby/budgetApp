export function loadTransactions(){
  return dispatch =>{
    fetch("http://192.168.1.105:4001/transaction")
      .then(res => res.json())
      .then(
        (transactions)=>{
        dispatch(transactionsLoaded(transactions[0]))
    })
  }
}

const transactionsLoaded=(transactions)=>{
  return{
    type: "TRANSACTIONS_LOADED",
    value: transactions
  }
}

const cashLoaded=(cash)=>{
  return{
    type: "CASH_LOADED",
    value: cash
  }
}