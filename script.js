const links = document.querySelectorAll(".scroll-link");
const menuBtn = document.querySelector(".menu_mobile");
const navigation = document.querySelector(".menu");
const headerMenu = document.querySelector("header");
//Menu mobile

menuOpen2 = false;
document.querySelector(".clickable").addEventListener("click", () => {
  if (!menuOpen2) {
    menuBtn.classList.add("openbtn");
    navigation.classList.add("active");
    headerMenu.classList.add("active");
    menuOpen2 = true;
  } else {
    navigation.classList.remove("active");
    menuBtn.classList.remove("openbtn");
    headerMenu.classList.remove("active");

    menuOpen2 = false;
  }
});

const scrollLink = document.querySelector(".scroll-link");

scrollLink.addEventListener;

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Evita il comportamento predefinito del link
    navigation.classList.remove("active");
    menuBtn.classList.remove("openbtn");
    headerMenu.classList.remove("active");
    // Ottieni l'attributo "href" del link cliccato
    const targetId = this.getAttribute("href");

    // Ottieni la posizione della sezione di destinazione
    const destinazione = document.querySelector(targetId);
    const posizioneDestinazione = destinazione.offsetTop;

    // Esegui l'animazione di scorrimento
    window.scrollTo({
      top: posizioneDestinazione,
      behavior: "smooth", // Aggiungi uno scorrimento fluido
    });
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("captcha-text").style.display = "none";

  const captchaResponse = grecaptcha.getResponse();

  if (!captchaResponse.length > 0) {
    document.getElementById("captcha-text").style.display = "flex";
    throw new Error("Captcha not complete");
  }

  form.submit();
});
