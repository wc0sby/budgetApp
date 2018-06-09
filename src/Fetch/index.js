module.exports.getTransaction = (data)=>{
    const url = "http://localhost:4001/transaction/"
    const fetchObj = {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'GET'
    }
    return fetch(url, fetchObj)
      .then(res => res.json())
      .then(
        (transactions)=>{
        return transactions
    })
}
