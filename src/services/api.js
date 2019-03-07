import http from './http'


function filter(data){
  let listInfoCoins = []
  let infoCoin = {}
  for (let key in data){
    infoCoin.code = data[key].code
    infoCoin.name = data[key].name
    infoCoin.value = data[key].low
    infoCoin.date = data[key].create_date
    listInfoCoins.push(infoCoin)
    infoCoin = {}
  }
  return listInfoCoins
}


export default () => http.get('').then(response => filter(response.data))
