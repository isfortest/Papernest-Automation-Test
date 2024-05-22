class SummaryPage {
    getConfirmMessage(confirmMessage){
        cy.get('h1').should('contain.text', confirmMessage)
    }

    confirmSummary(date, contratOffer, oldAddress, newAddress, name, email, phoneNumber, activation) {
        cy.get('.summary__line__value').first()
            .should('contain.text', date.toLowerCase());
        cy.get('.summary__line__value').eq(1)
            .should('contain.text', contratOffer);
        cy.get('.summary__line__value').eq(2)
            .should('have.text', oldAddress);
        cy.get('.summary__line__value').eq(3)
            .should('have.text', newAddress);
        cy.get('.summary__line__value').eq(4)
            .should('contain.text', name);
        cy.get('.summary__line__value').eq(5)
            .should('have.text', email);
        cy.get('.summary__line__value').eq(6)
            .should('have.text', phoneNumber);
        cy.get('.summary__line__value').last()
            .should('contain.text', activation);
        cy.wait(1000);
        cy.get('#button_next_summary').click();
    }

}

export default SummaryPage;