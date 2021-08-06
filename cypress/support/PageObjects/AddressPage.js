class AddressPage
{

    getAddressLineTextInput()
    {
        return cy.get('#address-ui-widgets-enterAddressLine1')
    }

    getPostalCodeTextInput()
    {
        return cy.get('#address-ui-widgets-enterAddressPostalCode')
    }

    getAddressSubmitButton()
    {
        return cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input')
    }


    getAddressSubmitButtonTwo()
    {
        return cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input')
    }


}
export default AddressPage;