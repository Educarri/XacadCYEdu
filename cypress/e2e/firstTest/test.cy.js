describe('First Test', () => {
    beforeEach('Should visit page', () => {
   
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
it ('Test Login', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('.oxd-button').click();
    cy.wait(2000);

});

});