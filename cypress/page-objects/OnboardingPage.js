class OnboardingPage {
    visit() {
        cy.visit('https://app.papernest.com/onboarding?anonymous&anonymousId=test&id_text=1&destination=newspaper');
    }

    startFlow() {
        cy.get('#popin-poste-classic').click();
    }

    enterArrivalDate(day, month, year) {
        cy.get('#poste-subscription\\.begin_date').click();
        cy.get('.mat-calendar-period-button').click();
            cy.get('.mat-calendar-body-cel').contains(year).click();
            cy.get('.mat-calendar-body-cell').contains(month).click();
            cy.get('.mat-calendar-body-cell').contains(day).click();
    }

}

export default OnboardingPage;