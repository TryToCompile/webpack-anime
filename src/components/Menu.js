const Menu = () => {
  return `
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link" href="/" data-menu-link>Главная</a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="/about" data-menu-link>О проекте</a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="/contacts" data-menu-link>Контакты</a>
        </li>
      </ul>
    </nav>`;
};

export default Menu;
