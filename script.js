function setLang(lang) {
  document.querySelectorAll("[data-ja]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}
function setLang(lang) {
  document.querySelectorAll("[data-ja]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

/* 页面加载后，默认显示日文 */
document.addEventListener("DOMContentLoaded", () => {
  setLang("ja");
});
