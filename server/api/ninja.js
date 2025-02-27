export default defineEventHandler(async (event) => {
  // // Use getQuery instead of useQuery
  // const { name } = getQuery(event)
  // //handle post data
  // const {age}=await readBody(event)
  //api call with private key
  const {data}=await $fetch('https://api.currencyapi.com/v3/latest?currencies=GBP&apikey=cur_live_NcKXUu6386yW7tu0y9Msjihkh5veAF4vMDu5oFIc')

  return {
    data
  }
})
