
import OnboardingPage from '/cypress/page-objects/OnboardingPage';
import AddressPage from '/cypress/page-objects/AddressPage';
import OfferPage from '/cypress/page-objects/OfferPage';
import ClientInfoPage from '/cypress/page-objects/ClientInfoPage';
import SummaryPage from '/cypress/page-objects/SummaryPage';
import PaymentPage from '/cypress/page-objects/PaymentPage';

describe('Papernest Magazine Flow', () => {

    const onboardingPage = new OnboardingPage();
    const addressPage = new AddressPage;
    const clientInfoPage = new ClientInfoPage();
    const offerPage = new OfferPage();
    const summaryPage = new SummaryPage();
    const paymentPage = new PaymentPage();

    beforeEach( function () {
        cy.fixture('users').then((userData) => {
            this.userData = userData;
            userData.email = `${Math.random().toString(36).substring(2, 8)}${this.userData.emailDomain}`;
            userData.confirmMessage = `${this.userData.message} ${this.userData.firstName}`;
            userData.confirmDate = `${this.userData.date.day} ${this.userData.date.month} ${this.userData.date.year}`;
            userData.name = `${this.userData.firstName} ${this.userData.lastName}`;
            userData.phoneNumber = `+33${this.userData.phone}`;
        });
    });

    it('Completes the magazine address change flow', function () {
        onboardingPage.visit();
        onboardingPage.startFlow();
        onboardingPage.enterArrivalDate(this.userData.date.day, this.userData.date.month, this.userData.date.year);
        addressPage.enterAddresses(this.userData.oldAddress, this.userData.newAddress);
        offerPage.selectOffer(this.userData.offer);
        clientInfoPage.enterClientInfo(this.userData.email, this.userData.phone, this.userData.firstName,
            this.userData.lastName);
        summaryPage.getConfirmMessage(this.userData.confirmMessage);
        summaryPage.confirmSummary(this.userData.confirmDate, this.userData.offer, this.userData.oldAddress,
            this.userData.newAddress, this.userData.name, this.userData.email, this.userData.phoneNumber, this.userData.activation);
        paymentPage.proceedPayment(this.userData.cardNumber, this.userData.cardExpiry, this.userData.cardCVC);
        paymentPage.confirmPayment();
    });
});
