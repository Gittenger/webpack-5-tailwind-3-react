import HomePageContent from './HomePageContent.component.jsx';
import PortfolioPageContent from './PortfolioPageContent.component.jsx';
import LoginPageContent from './LoginPageContent.component.jsx';
import ContactPageContent from './ContactPageContent.component.jsx';

import getPage from './PageComponent.jsx';

const pages = {
  HomePage: getPage('Home', HomePageContent),
  PortfolioPage: getPage('Portfolio', PortfolioPageContent),
  LoginPage: getPage('Login', LoginPageContent),
  ContactPage: getPage('Contact', ContactPageContent),
};

export const { HomePage, PortfolioPage, LoginPage, ContactPage } = pages;
