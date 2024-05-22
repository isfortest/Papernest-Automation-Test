class OfferPage {
    selectOffer(offer) {
        cy.contains('h3', offer) // Sélectionner la balise h3 contenant le texte
            .should('be.visible')
            .parent()  // Aller au parent de la balise h3
            .parent()  // Aller au parent du parent pour atteindre le conteneur du bouton
            .next()  // Sélectionner l'élément suivant, qui est le conteneur du bouton
            .find('button')  // Trouver le bouton à l'intérieur de ce conteneur
            .click();
    }

}

export default OfferPage;