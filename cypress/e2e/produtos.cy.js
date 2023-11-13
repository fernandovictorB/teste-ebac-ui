 

/// <reference types="cypress" /> 

 
describe('funcionalidade página de produtos', () => { 

    beforeEach(() => { 

       cy.visit('http://lojaebac.ebaconline.art.br/produtos/') 

}); 


it('Deve selecionar um produto da lista', () => { 

       cy.get('[class="product-block grid"]') 
           //.first() 
           //.last() 
           //.eq(3) 
           .contains('Bruno Compete Hoodie') 
           .click() 

}); 

it('deve adicionar um produto ao carrinho', () => { 

   var quantidade = 3

            cy.get('[class="product-block grid"') 
               .contains('Bruno Compete Hoodie').click() 
            cy.get('.button-variable-item-M').click() 
            cy.get('.button-variable-item-Black').click() 
            cy.get('.input-text').clear().type(quantidade) 
            cy.get('.single_add_to_cart_button').click() 
            cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade) 
            cy.get('.woocommerce-message').should('contain',   `${quantidade} x "Bruno Compete Hoodie" foram adicionados no seu carrinho.`) 

});

});