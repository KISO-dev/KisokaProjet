// Ensemble de données pour chaque partie du message
const intros = [
    "Hey là-bas !",
    "Salut !",
    "Bienvenue !",
    "Hello !",
    "Coucou !"
  ];
    // Fonction pour générer un message aléatoire
    function generateRandomMessage() {
      const randomIntro = intros[Math.floor(Math.random() * intros.length)];
      const randomMessage =  randomIntro;
      return randomMessage;
    }