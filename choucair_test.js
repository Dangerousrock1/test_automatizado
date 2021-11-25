describe('Agregar Productos', function(){
	it('Carrito de compras', function(){

		cy.visit('http://automationpractice.com/index.php')

		cy.visit('http://automationpractice.com/index.php?controller=cart&add=1&id_product=1&token=e817bb0705dd58da8db074c69f729fd8')
		//cy.visit('http://automationpractice.com/index.php?controller=cart&add=1&id_product=2&token=e817bb0705dd58da8db074c69f729fd8')

		cy.get('a[href="http://automationpractice.com/index.php?controller=order&step=1"]').click()

		cy.get('#email_create')
  			.type('pruebaemail29@correo.com').should('have.value', 'pruebaemail29@correo.com')

			  cy.get('#SubmitCreate').click()

			  cy.wait(9000)

			  cy.get('#id_gender1').click()

			  cy.get('#customer_firstname')
  			.type('Pepito').should('have.value', 'Pepito')

			  cy.get('#customer_lastname')
  			.type('Perez').should('have.value', 'Perez')						  

			  cy.get('#passwd')
  			.type('Prueba1').should('have.value', 'Prueba1')

			  cy.get('select#days').select('22').should('have.value', '22')
			  cy.get('select#months').select('April').should('have.value', '4')
			  cy.get('select#years').select('1994').should('have.value', '1994')

			  cy.get('#newsletter').click()
			  cy.get('#optin').click() 

			  cy.get('#firstname')
  			.type('Pepe')

			  cy.get('#lastname')
  			.type('Perez').should('have.value', 'PerezPerez')

			  cy.get('#company')
  			.type('Test').should('have.value', 'Test')

			  cy.get('#address1')
  			.type('calle 123').should('have.value', 'calle 123')

			  cy.get('#address2')
  			.type('Test').should('have.value', 'Test')

			  cy.get('#city')
  			.type('Cali').should('have.value', 'Cali')

			 cy.get('select#id_state').select('7').should('have.value', '7')

			  cy.get('#postcode')
  			.type('16001').should('have.value', '16001')

			  //cy.get('select#id_country').select('United States').should('have.value', '21')

			  cy.get('#other')
  			.type('Test automatizado').should('have.value', 'Test automatizado')

			  cy.get('#phone')
  			.type('1234567890').should('have.value', '1234567890')

			  cy.get('#phone_mobile')
  			.type('1234567890').should('have.value', '1234567890')

			  cy.get('#submitAccount').click() 
			  
			  cy.wait(1000)

			  cy.get('button[name="processAddress"]').click()

			  cy.get('#cgv').click() 

			  cy.get('button[name="processCarrier"]').click()

			  cy.get('a[title="Pay by bank wire"]').click()

			  cy.get('button[class="button btn btn-default button-medium"]').click()

			  cy.get('a[class="button-exclusive btn btn-default"]').click()


			  

	})

})

