import "../stylesheets/style.css";

console.log("hey");
document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы
  const hamMenu = document.querySelector(".hamMenu");
  const closeMenu = document.querySelector(".closeMenu");
  const menuOverlay = document.querySelector(".menu-overlay");

  // Проверяем, есть ли элементы на странице
  if (!hamMenu || !closeMenu || !menuOverlay) {
    console.log("Не все элементы меню найдены на странице");
    return;
  }

  // Открываем меню
  hamMenu.addEventListener("click", function (e) {
    e.stopPropagation(); // Останавливаем всплытие события
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Блокируем скролл страницы
  });

  // Закрываем меню
  closeMenu.addEventListener("click", function () {
    menuOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Разблокируем скролл
  });

  // Закрываем меню при клике на ссылку
  const menuLinks = document.querySelectorAll(".C_menuItems .A_H1");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Закрываем меню при клике вне его
  menuOverlay.addEventListener("click", (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
