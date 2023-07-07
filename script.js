const luckMessages = [
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "O riso é a menor distância entre duas pessoas.",
  "Os defeitos são mais fortes quando o amor é fraco.",
  "Quem olha para fora sonha; quem olha para dentro acorda.",
  "Espere pelo mais sábio dos conselhos: o tempo.",
  "Deixe de lado as preocupações e seja feliz.",
  "A maior barreira para o sucesso é o medo do fracasso.",
  "A inspiração vem dos outros. A motivação vem de dentro de nós.",
  "Você sempre será a sua melhor companhia!",
  "Acredite em si mesmo e siga em frente.",
  "A sorte favorece os corajosos.",
  "Seja grato pelo que você tem e terá mais motivos para ser grato.",
  "Grandes coisas nunca vêm de zonas de conforto.",
  "Seja gentil e a vida responderá com gentileza.",
  "Aproveite cada dia como uma nova oportunidade.",
  "Pensamentos positivos atraem coisas positivas.",
  "Nunca é tarde demais para começar algo novo.",
  "Confie no processo e mantenha a fé.",
  "Cada obstáculo é uma oportunidade para crescer.",
  "O universo conspira a seu favor quando você acredita em si mesmo.",
  "A felicidade está nas pequenas coisas.",
  "Você é mais forte do que imagina.",
  "Semeie bons pensamentos e colherá boas ações.",
  "Aja com bondade e o bem voltará para você.",
];

const cookie = document.querySelector(".img-button");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const openCookie = document.querySelector(".open-cookie");
const openCookieText = document.querySelector(".text-fortune");

const toggleScreen = () => {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
};

const getRandomMessage = () => {
  return luckMessages[Math.floor(Math.random() * luckMessages.length)];
};

const handleOpenCookie = () => {
  toggleScreen();
  openCookieText.innerHTML = getRandomMessage();
};

const handleOpenNewCookie = () => {
  toggleScreen();
};

const pressEnter = (e) => {
  if (e.key == "Enter" && screen2.classList.contains("hide")) {
    handleOpenNewCookie();
  }
};

cookie.addEventListener("click", handleOpenCookie);
openCookie.addEventListener("click", handleOpenNewCookie);
document.addEventListener("keypress", pressEnter);
