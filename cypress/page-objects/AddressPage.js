class AddressPage {
    enterAddresses(oldAddress, newAddress) {
        cy.get('#old_housing\\.address').type(oldAddress);
        cy.get('li.ng-star-inserted').contains(oldAddress).click()
        cy.get('#housing\\.address').type(newAddress);
        cy.get('li.ng-star-inserted').contains(newAddress).click()
        cy.get('#button_next').click();
    }

}

export default AddressPage;