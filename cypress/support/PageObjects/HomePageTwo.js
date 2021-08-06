class HomePageTwo
{
    getSearchBoxInput()
    {
        return cy.get('#twotabsearchtextbox')
    }

    getSearchIconButton()
    {
        return cy.get('#nav-search-submit-button')
    }

}

export default HomePageTwo