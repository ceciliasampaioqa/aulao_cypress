describe('Transações', () => {
    it('Criar uma nova transação de entrada', () => {
      cy.visit('https://dev-finance.netlify.app/#')

      cy.get('[onclick*=open]').click()
      cy.get('#description').type('Presente de Natal')
      cy.get('#amount').type('50')
      
      cy.get('#date').type('2024-12-25')      

      cy.contains('Salvar').click()

      cy.get('table tbody tr').should('have.length', 1)
    });
});
