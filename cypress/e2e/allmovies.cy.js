describe('All movies container flows', () => {

  beforeEach(() => {
    cy.mainPage()
  })

  it('Should have a logo', () => {
    cy.get('header')
      .find('img').should('have.attr', 'src')
      .should('include', '2')
  })

  it('Should have a banner image', () => {
    cy.get('header')
      .should('have.css', 'background-image')
      .and('contain', 'theater1')
  })

  it('Should be able to click each poster', () => {
    cy.get('#694919').click()
    cy.get('button').click()
    cy.get('#337401').click()
    cy.get('button').click()
    cy.get('#718444').click()
  })

  it('Should re-direct URL path after clicking a poster', () => {
    const id = '694919'
    cy.get(`#${id}`).click()
    cy.url().should('include', `/${id}`)
    cy.url().should('eq', `http://localhost:3000/${id}`)
  })

  it('Should contain 3 posters with background images', () => {
    cy.get('#694919')
      .find('img')
      .should('have.attr', 'src')
      .should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
    cy.get('#337401')
      .find('img')
      .should('have.attr', 'src')
      .should('include', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
    cy.get('#718444')
      .find('img')
      .should('have.attr', 'src')
      .should('include', 'https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg')
  })

  it('Should show all movie titles', () => {
    cy.get('.content').contains('Money Plane')
    cy.get('.content').contains('Mulan')
    cy.get('.content').contains('Rogue')
  })

})

describe('Errors', () => {
  let errMsg = 'There are no movies to show!'

  it('Should inform the user if there is a problem', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { forceNetworkError: true }
    )

    cy.visit('http://localhost:3000')

    cy.contains(errMsg).should('be.visible')
  })
})