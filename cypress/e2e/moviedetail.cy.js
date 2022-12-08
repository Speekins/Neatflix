describe('Specific movie detail', () => {

  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      method: 'GET',
      fixture: '../fixtures/movies-sample-data.json'
    });
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      method: 'GET',
      fixture: '../fixtures/movie1-sample-data.json'
    });
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
      method: 'GET',
      fixture: '../fixtures/movie1videos-sample-data.json'
    });
    cy.visit('http://localhost:3000');
    cy.get('#694919')
      .click()
  })


  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('Should show the name of the movie', () => {
    cy.contains('Money Plane')
  })

  it('Should show rating', () => {
    cy.contains('Rating: 6.9')
  })

})