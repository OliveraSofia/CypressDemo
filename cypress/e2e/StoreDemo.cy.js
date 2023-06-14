
describe('template spec', () => {
  
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/')
  
  })


  it.only('Verify carrousel', () => {
    cy.get('.carousel-item') // retrieve all elements with carousel-item class
    .should('be.visible') // check that the element is visible
     .each(($item) => { // iterate through all elements
      cy.wrap($item) // wrap the yielded element
        .find('img') // find the img
        .should('have.attr', 'alt').should('be.oneOf', ['First slide' , 'Second slide' , 'Third slide' ])   
    });
  });

  it('Veryfy entries BE', () => {
    cy.request("GET", "https://api.demoblaze.com/entries").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.Items[0].cat).to.eql("phone");
      expect(response.body.Items[0].title).to.eql("Samsung galaxy s6");
      expect(response.body.Items[0].id).to.eql(1);
      expect(response.body.Items[0].price).to.eql(360.0);
      expect(response.body.Items[8].cat).to.eql("notebook");
      expect(response.body.Items[8].title).to.eql("Sony vaio i7\n");
      expect(response.body.Items[8].id).to.eql(9);
      expect(response.body.Items[8].price).to.eql(790.0);

      expect(response.body.LastEvaluatedKey.id).to.eql("9")
    })
  })


  
});