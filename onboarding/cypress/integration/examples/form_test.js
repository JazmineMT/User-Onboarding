describe('navigate', ()=>{
    it('can navigate to the site', ()=>{
        cy.visit('http://localhost:3000') 
        cy.url().should('include', 'http://localhost:3000')
    }) 

})

describe('Validation errors', ()=>{
    it('First name error min string not met',()=>{
        cy.get('input[name=first_name]')
        .type('J')
        cy.get('div#errorFirstName')
        .should('have.text' , 'Name must be at least 2 characters long.')
        }) 

    it('Last name error min string not met',()=>{
            cy.get('input[name=last_name]')
            .type('M')
            cy.get('div#errorLastName')
            .should('have.text' , 'Name must be at least 2 characters long.')
        }) 

     it('Email error - not valid email',()=>{
            cy.get('input[name=email]')
            .type('j')
            cy.get('div#errorEmail')
            .should('have.text' , 'Must be a valid email address.')
        })
    it('Password error min string not met',()=>{
            cy.get('input[name=password]')
            .type('1')
            cy.get('div#errorPassword')
            .should('have.text' , 'Password must be at least 6 characters long.')
            
        })
    })


describe('Input anf submit', ()=>{
    it('submit button should be disabled', ()=>{
        cy.get('button')
        .should('be.disabled')
    })
    it('can get and type a name', ()=>{
        cy.get('input[name=first_name]')
        .type('azmine')
        .should('have.value', 'Jazmine')

        cy.get('input[name=last_name]')
        .type('cGinnis')
        .should('have.value', 'McGinnis')
    })

    it('can get and type email', ()=>{
        cy.get('input[name=email]')
        .type('azmine@jazmine.com')
        .should('have.value', 'jazmine@jazmine.com')
    })

    it('can get and type password' , ()=>{
        cy.get('input[name=password]')
        .type('234567')
        .should('have.value', '1234567')
    })

    it('can get and checkbox', ()=>{
        cy.get('input[name=terms]')
        .click()
        .should('have.value', 'true')

    })
    it('can submit form', ()=>{
        cy.get('button')
        .click()
        

    })
        
})



