import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'

describe ('Dashboard', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://immense-hollows-78338.herokuapp.com/graphql', (req) => {

      aliasQuery(req, 'getUser')
      aliasMutation(req, 'createDailyRecord')
    })
    .visit('http://localhost:3000/')
  })

  it('Should display homepage information', () => {
    cy.intercept('POST', 'https://immense-hollows-78338.herokuapp.com/graphql', (req) => {
      const { body } = req
      if (hasOperationName(req, 'getUser')) {
        // Declare the alias from the initial intercept in the beforeEach
        req.alias = 'gqlgetUserQuery'

        // Set req.fixture or use req.reply to modify portions of the response
        req.reply((res) => {
          // Modify the response body directly
          res.body.data.getUser.weeklyAverageShowerTime = 1000
          res.body.data.getUser.weeklyAverageWaterUsage = 1000
          res.body.data.getUser.thirtydayAverageShowerTime = 1000
        })
      }
    })
    cy.visit('http://localhost:3000/')




  })

})



  // it('Should display shower timer', () => {
  //
  // })
  //
  // it('Should display item counters', () => {
  //
  // })
  //
  // it('Should be able to submit a daily record', () => {
  //
  // })
