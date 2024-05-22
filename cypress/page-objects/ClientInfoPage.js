class ClientInfoPage {
    enterClientInfo(email, phone, firstName, lastName) {
        cy.get('#user\\.email').type(email);
        cy.get('#user\\.phone_number').type(phone);
        cy.get('#user\\.civility-mister').click();
        cy.get('#user\\.first_name').type(firstName);
        cy.get('#user\\.last_name').type(lastName);
        cy.wait(1000);
        cy.get('#button_next').click();
        cy.get('#poste-subscription\\.confirmation_code_destination-post_office').click();
        cy.get('body').type('{enter}');
    }

}

export default ClientInfoPage;