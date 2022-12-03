function fetchData(url) {
  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else if (response.status >= 500) {
      throw new Error('The server\'s messed up!')
    } else if (response.status >= 400 && response.status < 500) {
      throw new Error('This is a level 400 error')
    }
  })
}

export default fetchData