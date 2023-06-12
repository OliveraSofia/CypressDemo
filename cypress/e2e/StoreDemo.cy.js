describe('template spec', () => {
  it('Load Page', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.request("GET", "https://api.demoblaze.com/entries").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.Items[0].cat).to.eql("phone");
      expect(response.body.Items[0].title).to.eql("Samsung galaxy s6");
      expect(response.body.Items[0].id).to.eql(1);
      expect(response.body.Items[0].price).to.eql(360.0);
      

  })
})})