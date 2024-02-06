import Router from "./router";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./normalize.css";
import "./App.css";

const App = (root) => {
  // обозначаем id для контейнера для отрисовки страниц
  const containerId = "content";

  // отрисовываем статические компоненты и контейнер для страниц
  root.insertAdjacentHTML(
    "beforeend",
    `
    ${Header()}
    ${Menu()}
    <section id=${containerId} class="content">
    </section>
    ${Footer()}
  `
  );

  // Инициализируем роутер при первой загрузке
  Router(containerId);

  // Обработка навигации
  window.addEventListener("popstate", () => Router(containerId));

  // Перехватываем все клики по ссылкам для роутера
  root.addEventListener("click", (event) => {
    const el = event.target;
    if (el.matches("[data-menu-link]")) {
      event.preventDefault();
      history.pushState({}, "", el.href);
      Router(containerId);
    }
  });
};

export default App;
