import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'

describe ('Dashboard', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://immense-hollows-78338.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasQuery(req, 'getUser')
      aliasMutation(req, 'createDailyRecord')
      if (hasOperationName(req, 'getUser')) {
        req.alias = 'gqlgetUserQuery'
        req.reply((res) => {
          res.body.data.getUser.weeklyAverageShowerTime = 1000
          res.body.data.getUser.weeklyAverageWaterUsage = 1000
          res.body.data.getUser.thirtydayAverageShowerTime = 2000
          res.body.data.getUser.username = 'Kevin'
          console.log("Running")
        })
      } else {
        console.log("Not Running")
      }
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should display homepage information', () => {
    cy.contains('Did You Know...')
    cy.contains('The average American uses 5,336 gallons of water on showers per year?')
    cy.contains('If the average shower was 5 minutes long, that number would drop to 3650!')
    cy.get('.main-info-pic').should('have.attr', 'src').should('include', '../assets/save-water-pic.jpeg')
    cy.contains('Your Shower Timer')
    cy.get('.timer-btn-container').children().should('have.length', 3)
    cy.get('.timer-btn-container').contains('Start')
    cy.get('.timer-btn-container').contains('Pause')
    cy.get('.timer-btn-container').contains('Reset')
    cy.contains('Today')
    cy.contains('7 Day Average')
    cy.contains('30 Day Average')
    cy.contains('0:0')
    cy.contains('16:40')
    cy.contains('33:20')
    cy.contains('Plastic Bottles')
    cy.contains('Plastic Straws')
    cy.contains('Plastic Shopping Bags')
  })

  it('Should be able to update item counters', () => {
    cy.get('.item-increment-btn').first().click().click()
    cy.get('.bottle-item-number').should('have.text', '2')
    cy.get('.item-decrement-btn').first().click().click().click()
    cy.get('.bottle-item-number').should('have.text', '0')

    cy.get('.item-increment-btn').eq(1).click().click()
    cy.get('.straw-item-number').should('have.text', '2')
    cy.get('.item-decrement-btn').eq(1).click().click().click()
    cy.get('.straw-item-number').should('have.text', '0')

    cy.get('.item-increment-btn').last().click().click()
    cy.get('.bag-item-number').should('have.text', '2')
    cy.get('.item-decrement-btn').last().click().click().click()
    cy.get('.bag-item-number').should('have.text', '0')
  })

  it('should be able to click menu button and view options', () => {
    cy.get('#basic-button').click()
    cy.get('#log-in-msg').contains('Kevin')
    cy.get('#shower-button').contains('Water Usage')
    cy.get('#bottle-button').contains('Bottle Usage')
    cy.get('#straw-button').contains('Straw Usage')
    cy.get('#bag-button').contains('Bag Usage')
  })

  it('Should be able to click on Water useage button to view its content', () => {
    cy.get('#basic-button').click()
    cy.get('#shower-button').click()
    cy.get('.description-container').contains('Hi Kevin')
    cy.get('.source-link').should('exist')
  })

  it('Should be able to click on bottle usage button to view its content', () => {
    cy.get('#basic-button').click()
    cy.get('#bottle-button').click()
    cy.get('.description-container').contains('Hi Kevin, did you know the following facts about plastic water bottle usage?')
    cy.get('.source-link').should('exist')
  })

  it('Should be able to click on straw usage button to view its content', () => {
    cy.get('#basic-button').click()
    cy.get('#straw-button').click()
    cy.get('.description-container').contains('Hi Kevin, did you know the following facts about straw usage?')
    cy.get('.source-link').should('exist')
  })

  it.only('Should be able to click on bag usage button to view its content', () => {
    cy.get('#basic-button').click()
    cy.get('#bag-button').click()
    cy.get('.description-container').contains('Hi Kevin, did you know the following facts about plastic bag usage?')
    cy.get('.source-link').should('exist')
  })
  

  // test timer if we have time
})
