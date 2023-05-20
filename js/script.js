// Array di oggetti con le informazioni dei membri del team
const teamMembers = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "./img/wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "./img/angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "./img/walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "./img/angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "./img/scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "./img/barbara-ramos-graphic-designer.jpg"
  }
];

// Funzione per stampare le informazioni del team su DOM
function stampaInformazioniTeam() {
  // Ottengo il riferimento all'elemento "team-container" in DOM
  const teamContainer = document.getElementById("team-container");

  // Iterazione attraverso gli oggetti nel teamMembers array
  teamMembers.forEach(member => {
    // Creo la stringa delle informazioni del membro del team
    const memberInfo = `
      <div class="card">
        <p>Nome: ${member.nome}</p>
        <p>Ruolo: ${member.ruolo}</p>
        <img src="${member.foto}" alt="${member.nome}">
      </div>
    `;

    // Aggiungo la stringa delle informazioni del membro al "team-container"
    teamContainer.insertAdjacentHTML("beforeend", memberInfo);
  });
}

// Chiamata alla funzione per stampare le informazioni del team quando il documento è completamente caricato
document.addEventListener("DOMContentLoaded", stampaInformazioniTeam);