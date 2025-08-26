// Liste des joueurs (faux)
let fakePlayers = [
  {name:"NoobMaster69", amount:500},
  {name:"ProPlayerXD", amount:1000},
  {name:"COOKIE154", amount:100}
];

// Afficher les joueurs sur Accueil
function loadPlayers() {
  let list = document.getElementById("playersList");
  list.innerHTML = "";
  fakePlayers.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p.name + " a reçu " + p.amount + " Robux 💰";
    list.appendChild(li);
  });
}
loadPlayers();

// Fonction pour le bouton Jouer
function playGame(gameName) {
  alert("🎮 Chargement du jeu : " + gameName + " ... ");
}

// Générateur de Robux
function generateRobux() {
  let user = document.getElementById("username").value;
  let amount = document.getElementById("amount").value;
  let result = document.getElementById("result");

  if(user === "") {
    result.innerHTML = "❌ Entrez un pseudo Roblox !";
    return;
  }

  result.innerHTML = "✅ " + amount + " Robux envoyés à " + user + " ! ";

  // Ajouter à la liste
  fakePlayers.unshift({name:user, amount:amount});
  loadPlayers();

  // Mettre à jour Profil
  document.getElementById("profileName").innerText = user;
  document.getElementById("profileRobux").innerText = amount;

  // Aller sur la page Profil automatiquement
  showPage('profile');
}

// Navigation entre les pages
function showPage(page) {
  document.querySelectorAll("section").forEach(sec=>sec.style.display="none");
  document.getElementById(page).style.display="block";
}



