/// <reference types="Cypress"/>

//Importamos Clases de PageObjetcs
import HomePage from '../../support/PageObjects/HomePage'
import SesionPage from '../../support/PageObjects/SesionPage'
import HomePageTwo from '../../support/PageObjects/HomePageTwo'
import ListOfProductsPage from '../../support/PageObjects/ListOfProductsPage'
import PageOfArticle from '../../support/PageObjects/PageOfArticle'
import AddressPage from '../../support/PageObjects/AddressPage'



describe('Primer conjunto de casos de prueba',function(){

    const homePage = new HomePage()
    const sesionPage = new SesionPage()
    const homePageTwo = new HomePageTwo()
    const listOfProductsPage = new ListOfProductsPage()
    const pageOfArticle = new PageOfArticle()
    const addressPage = new AddressPage()



before(function(){
//Cargamos los valores del archivo example.json en un objeto de dato
cy.fixture('example').then(function (datos) {
    this.datos = datos
})

  })
  

it('Creamos una compra en Amazon mexico desde cero',function(){
cy.visit(Cypress.env('url')+"/ref=nav_logo")

//HomePage

//Clickeamos sobre el menu para identificarnos
homePage.getMenuIdentifyButton().click()

//SesionPage

//Ingresamos el mail 
sesionPage.getEmailAdressInput().type(this.datos.email)
//Clickeamos en el boton de continuar
sesionPage.getContinueButton().click()
//Ingresamos nuestra password
sesionPage.getPasswordInput().type(this.datos.contraseña)
//Clickeamos en el boton de Submit
sesionPage.getSubtmitButton().click()




//HomePageTwo

//Ingresamos el articulo deseado en la barra de busqueda
homePageTwo.getSearchBoxInput().type(this.datos.articulo)
//Clickeamos en el icono de la lupa del buscador
homePageTwo.getSearchIconButton().click()

//ListOfProductPage
listOfProductsPage.getArticleImage().click()

//PageOfArticle
pageOfArticle.getBuyNowButton().click()


//AdressPage

addressPage.getAddressLineTextInput().type(this.datos.addressline)
addressPage.getPostalCodeTextInput().type(this.datos.postalcode)
addressPage.getAddressSubmitButton().click()

})    
})