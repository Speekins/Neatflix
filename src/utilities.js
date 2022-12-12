
const formatCurrency = (dataObj) => {
  if (dataObj.budget) {
    dataObj.budget = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumSignificantDigits: 3}).format(dataObj.budget)
  }
  if(dataObj.revenue) {
    dataObj.revenue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumSignificantDigits: 3}).format(dataObj.revenue)
  }
  return dataObj
}

const formatDate = (dataObj) => {
  if (dataObj.release_date) {
    const releaseDateData = dataObj.release_date.split('-')
    const date = new Date()
    date.setMonth(+releaseDateData[1]-1)
    const month = date.toLocaleString('en-US', { month: 'long' })

    dataObj.release_date = `${month} ${+releaseDateData[2]}, ${releaseDateData[0]}`
  }
  return dataObj
}

  export { formatCurrency, formatDate }