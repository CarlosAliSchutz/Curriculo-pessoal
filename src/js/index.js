import { SOBRE } from "../constants/about-me.js";
import { CONTATO } from "../constants/contact.js";
import { EDUCACAO } from "../constants/education.js";
import { EXPERIENCIA } from "../constants/experience.js";
import { HABILIDADES } from "../constants/skills.js";


// Habilidades
const skillsList = document.getElementById("skills-list");

HABILIDADES.forEach(habilidade => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  const titleH2 = document.createElement("h2");
  titleH2.textContent = habilidade.name;
  titleDiv.appendChild(titleH2);

  const iconDiv = document.createElement("div");
  iconDiv.classList.add("icon");
  const percentualDiv = document.createElement("div");
  percentualDiv.classList.add(`percentual-${habilidade.nivel}`);
  iconDiv.appendChild(percentualDiv);

  itemDiv.appendChild(titleDiv);
  itemDiv.appendChild(iconDiv);

  skillsList.appendChild(itemDiv);
});

// Educação
const educationList = document.getElementById("education-list");

EDUCACAO.forEach(education => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("w-100", "title");
  const titleH2 = document.createElement("h2");
  titleH2.innerHTML = `${education.instituicao} <span>${education.curso}</span>`;
  titleDiv.appendChild(titleH2);

  const descricaoP = document.createElement("p");
  descricaoP.textContent = education.descricao;

  itemDiv.appendChild(titleDiv);
  itemDiv.appendChild(descricaoP);

  educationList.appendChild(itemDiv);
});

// Experiências
const experienceList = document.getElementById("experience-list");

EXPERIENCIA.forEach(experience => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  const workDiv = document.createElement("div");
  workDiv.classList.add("work");
  const workH2 = document.createElement("h2");
  workH2.textContent = experience.empresa;
  const periodoP = document.createElement("p");
  periodoP.textContent = experience.periodo;
  workDiv.appendChild(workH2);
  workDiv.appendChild(periodoP);

  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("description");
  const cargoH2 = document.createElement("h2");
  cargoH2.textContent = experience.cargo;
  const resumoP = document.createElement("p");
  resumoP.textContent = experience.resumo;
  descriptionDiv.appendChild(cargoH2);
  descriptionDiv.appendChild(resumoP);

  itemDiv.appendChild(workDiv);
  itemDiv.appendChild(descriptionDiv);

  experienceList.appendChild(itemDiv);
});

// Contato
const contatoList = document.getElementById("contact-list");

CONTATO.forEach(contato => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("w-100", "item");

  const formaH2 = document.createElement("h2");
  formaH2.textContent = contato.forma;

  const contatoP = document.createElement("p");
  if (contato.forma === "Linkedin" || contato.forma === "GitHub") {
    const linkA = document.createElement("a");
    linkA.href = contato.contato;
    linkA.target = "_blank";
    linkA.textContent = contato.contato;
    contatoP.appendChild(linkA);
  } else {
    contatoP.textContent = contato.contato;
  }

  itemDiv.appendChild(formaH2);
  itemDiv.appendChild(contatoP);

  contatoList.appendChild(itemDiv);
});

// Sobre mim
const aboutList = document.getElementById("about-list");

SOBRE.forEach(sobre => {
  const descricaoP = document.createElement("p");
  descricaoP.classList.add("paragraf");
  descricaoP.textContent = sobre.descricao;

  const w100Div = document.createElement("div");
  w100Div.classList.add("w-100");
  w100Div.appendChild(descricaoP);

  aboutList.appendChild(w100Div);
});
