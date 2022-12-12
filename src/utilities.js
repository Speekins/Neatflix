
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

  export default formatCurrency