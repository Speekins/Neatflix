function fetchData(url) {
  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else if (response.status >= 500) {
      throw new Error('the server\'s messed up! level 500 error')
    } else if (response.status >= 400 && response.status < 500) {
      throw new Error('this is a level 400 error')
    }
  })
}

export default fetchData