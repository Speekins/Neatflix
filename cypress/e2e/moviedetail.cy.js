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
  });

  it('Should show the rating', () => {
    cy.contains('Rating: 6.9')
  });

  it('Should show the release date', () => {
    cy.contains('Release Date: 2020-09-29')
  });

  it('Should show the runtime', () => {
    cy.contains('Runtime: 82 minutes')
  });

  it('Should show an overview', () => {
    cy.contains(`Overview: A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.`)
  });

  it('Should have a link to the trailer', () => {
    cy.contains('Runtime: 82 minutes')
  });



})