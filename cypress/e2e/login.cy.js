/// <reference types="cypress" /> 

context('funcionalidade login', () =>{ 

    beforeEach(() => { 

       cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 

    
   }) 

    afterEach(() => { 
       cy.screenshot() 

   })


    it('deve fazer login com sucesso' , () => { 

       cy.get('#username').type('aluno_ebac@teste.com') 
       cy.get('#password').type('teste@teste.com') 
       cy.get('.woocommerce-form > .button').click() 

       cy.get('.page-title').should('contain' , 'Minha conta')  
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,  'Olá, aluno_ebac20Nome de ExibiçãoNome de Exibição (não é aluno_ebac20Nome de ExibiçãoNome de Exibição? Sair)') 

   }) 

    it('deve exibir uma mensagem de erro ao inserir usuário inválido' , () => { 

       cy.get('#username').type('aluno_ebacteste.com') 
       cy.get('#password').type('teste@teste.com') 
       cy.get('.woocommerce-form > .button').click() 

       cy.get('.woocommerce-error').should('contain' , 'Erro: o usuário aluno_ebacteste.com não está cadastrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.') 

   })

    it('deve exibir uma mensagem de erro ao inserir senha inválida', () => { 

       cy.get('#username').type('aluno_ebac@teste.com') 
       cy.get('#password').type('testeteste') 
       cy.get('.woocommerce-form > .button').click() 

       cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?') 
    })
})
