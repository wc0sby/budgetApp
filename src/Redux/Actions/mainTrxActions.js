export const loadMain=()=>{
  return (dispatch) =>{
    fetch(`/transaction`)
      .then(res => res.json())
      .then(
        (transactions)=>{
        dispatch(mainLoaded(transactions))
    })
  }
}

const mainLoaded=(transactions)=>{
  console.log(transactions)
  return{
    type: "TRANSACTIONS_LOADED",
    value: transactions
  }
}

//Post new transaction
export const postNewMainTrx=(main)=>{
  return (dispatch)=>{
    fetch("/transaction",{
      method: 'post',
      body: JSON.stringify(main),
      headers:{
        'content-type': 'application/json'
      } 
    })
    .then(res=>res.json())
    .then((trx)=>{
      console.log(trx)
      dispatch(loadMain(trx))
    })
  }
}

//Delete transaction
export const deleteMainTrx=(id)=>{
  return (dispatch)=>{
    fetch(`/transaction/${id}`,{
      method: 'delete',
      headers:{'content-type':'application/json'}
    })
    .then(res=>res.json())
    .then((trx)=>{
      dispatch(loadMain())
    })
  }
}