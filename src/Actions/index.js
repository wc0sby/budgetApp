export const selectTRX=(transaction)=>{
  console.log(`user: ${transaction.name}`)
  //the below is actually called the action (returns something)...the whole function is called action creater
  return {
    "type": "TRANSACTION_NAME_SELECTED",
    "payload": transaction 
  }
}