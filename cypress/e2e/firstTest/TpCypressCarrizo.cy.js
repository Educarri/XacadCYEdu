describe('Verificar la información del hotel en la página', () => {
    beforeEach(() => {
      // Navegar a la página antes de cada prueba
      cy.visit('https://automationintesting.online/');
    });

    it('Debe mostrar el Nombre del hotel', () => {
        cy.get('.contact > :nth-child(3)').contains('Shady Meadows B&B').should('be.visible');
      });
  
    it('Debe mostrar la dirección del hotel', () => {
      cy.get('.contact > :nth-child(3)').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').should('be.visible');
    });
  
    it('Debe mostrar el teléfono del hotel', () => {
        cy.get('.contact > :nth-child(3)').contains('012345678901').should('be.visible');
    });
    it('Debe mostrar el email del hotel', () => {
        cy.get('.contact > :nth-child(3)').contains('fake@fakeemail.com').should('be.visible');
      });

    it('Debe haber al menos una imagen visible en la página', () => {
      cy.get('img[class="img-responsive hotel-img"]').should('be.visible');
    });

    it('Verificando la descripcion del hotel sea la esperada', () => {
      // Verifica que el texto de bienvenida esté presente y coincida exactamente
      cy.get('.col-sm-10 > p').contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.')
        .should('be.visible');
    });
})

  //Tarea opcional
  describe('Enviar mensaje opcional',{testIsolation:false},() =>{


    it('Validar envío de form vacío', () => {
        cy.visit('https://automationintesting.online/')
        cy.log('Envío de form de contacto en blanco...')
        cy.get('#submitContact').click()
        cy.get('.alert').should('be.visible')
        cy.get('p').contains('Subject must be between 5 and 100 characters.')
        cy.get('p').contains('Subject may not be blank')
        cy.get('p').contains('Name may not be blank')
        cy.get('p').contains('Message must be between 20 and 2000 characters.')
        cy.get('p').contains('Message may not be blank')
        cy.get('p').contains('Email may not be blank')
        cy.get('p').contains('Phone may not be blank')
        cy.get('p').contains('Phone must be between 11 and 21 characters.')
    })

  it('Validar envío de form con data incorrecta',()=>{
    cy.log('Set de datos incorrectos...')
    cy.get('[data-testid="ContactName"]').type('asd')
    cy.get('input[placeholder="Email"]').type('fake')
    cy.get('input[placeholder="Phone"]').type('asdasd')
    cy.get('input[placeholder="Subject"]').type('asdasd')
    cy.get('[data-testid="ContactDescription"]').type('asdasd')
    cy.get('#submitContact').click()

    cy.get('.alert').should('be.visible')
    cy.get('p').contains('Phone must be between 11 and 21 characters.')
    cy.get('p').contains('must be a well-formed email address')
    cy.get('p').contains('Message must be between 20 and 2000 characters.')
})

it('Validar envío de form con data correcta',()=>{
    cy.log('Set de datos correctos...')
    cy.get('input[placeholder="Name"]').type('Juan Pérez')
    cy.get('input[placeholder="Email"]').type('juan@gmail.com')
    cy.get('input[placeholder="Phone"]').type('35123696457')
    cy.get('input[placeholder="Subject"]').type('Reserva de habitación para fecha X')
    cy.get('[data-testid="ContactDescription"]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.') 
    cy.get('#submitContact').click()
})

});
