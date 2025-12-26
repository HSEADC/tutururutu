/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

console.log("hey");
document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы
  var hamMenu = document.querySelector(".hamMenu");
  var closeMenu = document.querySelector(".closeMenu");
  var menuOverlay = document.querySelector(".menu-overlay");

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
  var menuLinks = document.querySelectorAll(".C_menuItems .A_H1");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menuOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Закрываем меню при клике вне его
  menuOverlay.addEventListener("click", function (e) {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
/******/ })()
;