import Home from './pages/Home.js';
import About from './pages/About.js';
import Contacts from './pages/Contacts.js';

const routes = {
  '/': Home,
  '/about': About,
  '/contacts': Contacts,
};

const setActiveLink = (path = '/') => {
  document.querySelectorAll('.menu__link').forEach((link) => {
    link.classList.toggle('active', path === link.href);
  });
};

const Router = (container) => {
  const path = window.location.pathname;
  const component = routes[path] || Home;
  document.getElementById(container).innerHTML = component();
  setActiveLink(path);
};

export default Router;

