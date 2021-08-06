class SesionPage
{

    getEmailAdressInput()
    {
        return cy.get('#ap_email')
    }

    getContinueButton()
    {
        return cy.get('#continue')
    }

    getPasswordInput()
    {
        return cy.get('#ap_password')
    }

    getSubtmitButton()
    {
        return cy.get('#signInSubmit')
    }



}
export default SesionPage;