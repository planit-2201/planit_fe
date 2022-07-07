describe ('sample test', () => {

  it('Should be able to pass a test', () => {
    cy.visit('http://localhost:3000/')
    cy.url('http://localhost:3000/')
  })
  
})
