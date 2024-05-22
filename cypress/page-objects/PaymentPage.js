class PaymentPage {
    proceedPayment(cardNumber, cardExpiry, cardCVC) {
        cy.fillElementsInput('cardNumber', cardNumber);
        cy.fillElementsInput('cardExpiry', cardExpiry); // MMYY
        cy.fillElementsInput('cardCvc', cardCVC);
    }

    confirmPayment(){
        cy.get('button[type="submit"]').click()
    }

}

export default PaymentPage;