
//describe - suite de teste / funcionalidade
// it      - testes

describe('Transações', () => {
    it('Criar uma nova transação de entrada', () => {
      cy.visit('https://dev-finance.netlify.app/#')

      cy.get('[onclick*=open]').click()
      cy.get('#description').type('Presente de Natal')
      cy.get('#amount').type('50')
      //essas linha de código pego no próprio cypress 
      cy.get('#date').type('2024-12-25')
      //colocar data no formato yyyy-mm-dd

      cy.contains('Salvar').click()
      // ou cy.contains('button', 'Salvar').click()

      // Um teste contém 3 partes: Preparação (acesso ao site), ação principal (cadastrar uma transação) e a verificação/asserção
      //assertions: após add uma nova transação fazer com que ela seja add na tela

      cy.get('table tbody tr').should('have.length', 1)
    });
});
