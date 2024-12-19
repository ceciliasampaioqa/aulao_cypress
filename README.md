# DevFinance Automação de Testes com Cypress

Este projeto implementa testes automatizados utilizando o framework Cypress para validar funcionalidades do sistema DevFinance. O objetivo principal é garantir a qualidade de operações relacionadas ao cadastro de transações financeiras.

## Tecnologias Utilizadas

-   **Cypress**(https://www.cypress.io/)**:** Framework de testes E2E.
-   **Node.js:** Ambiente de execução para JavaScript no backend.     
-   **Visual Studio Code:** Editor de código utilizado no desenvolvimento..

## Estrutura do Projeto

- **`cypress/`**  
Diretório principal do framework Cypress, contendo os subdiretórios necessários para os testes automatizados.

-   **`e2e/`**  
    Contém os arquivos de testes end-to-end.
    
    -   **`1-getting-started/`**  
        Exemplos básicos fornecidos pelo Cypress para iniciantes.
    -   **`2-advanced-examples/`**  
        Exemplos mais avançados fornecidos pelo Cypress.
    -   **`finances.cy.js`**  
        Arquivo com os testes personalizados implementados para o sistema DevFinance.
-   **`fixtures/`**  
    Armazena arquivos com dados de teste usados para simular cenários reais. Por padrão, são arquivos JSON.
    
-   **`support/`**  
    Inclui configurações globais e comandos customizados que ajudam a reduzir a repetição de código nos testes.
 

## O que foi feito

-   **Criação de testes end-to-end:**    
    -   Cadastro de novas transações (entradas e saídas).
    -   Validação de bugs nas transações.
    -   Assegurar que os registros sejam listados corretamente na tabela.
-   **Cobertura de Casos de Teste:**
    
    -   **Falhas nos campos obrigatórios:** Validar comportamento do sistema ao tentar salvar com dados incompletos ou incorretos.
    -   **Interações básicas com a interface:** Verificar se botões, formulários e tabelas funcionam conforme esperado.
-   **Execução de Assertivas:**
       -   Verificar existência e quantidade de registros na tabela.
    -   Validar ausência de alertas de erro.

## Notas Gerais

-  **Execução dos testes:** Para executar os testes, basta rodar o comando `npx cypress open` e selecionar o arquivo `finances.cy.js`.
-   **Dependências:** Certifique-se de instalar as dependências utilizando `npm install` antes de executar os testes.
-   **Cenários ignorados:** Algumas falhas foram marcadas com `.skip` para facilitar a análise de cenários específicos.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

