// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById('loader');
    const mainSite = document.getElementById('main-site');
  
    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
            mainSite.classList.remove('hidden');
        }, 1000); // attend que l'animation soit finie
    }, 2000); // garde le loader au moins 2s
});




let attempts = 0; // Compteur d'essais

document.getElementById('submit-code').addEventListener('click', function() {
    const inputCode = document.getElementById('code-input').value.trim();
    const correctCode = "12/06/2021"; // La vraie date à valider
    const music = document.getElementById('background-music');

    if (inputCode === correctCode) {
        // Lancer la musique directement au clic
        music.volume = 0.3;
        music.play().catch((error) => {
            console.log("Lecture audio bloquée :", error);
        });

        // Transition en fondu
        document.getElementById('code-container').classList.add('hidden');

        setTimeout(() => {
            document.getElementById('code-container').style.display = 'none';
            document.getElementById('site-content').style.display = 'flex';
            document.getElementById('site-content').classList.remove('hidden');
        }, 1000); // 1s de fondu
    } else {
        attempts++;
        if (attempts >= 3) {
            document.getElementById('error-message').textContent = "Petit indice : c'était un beau jour de juin 2021...";
        } else {
            document.getElementById('error-message').textContent = "Mauvaise réponse, essayez encore.";
        }
    }
});

// Entrée au clavier
document.getElementById('code-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('submit-code').click();
    }
});


// Gestion de la modale "Notre Histoire"
const openStoryBtn = document.getElementById('open-story');
const closeStoryBtn = document.getElementById('close-story');
const storyModal = document.getElementById('story-modal');

openStoryBtn.addEventListener('click', () => {
    storyModal.style.display = "block";
});

closeStoryBtn.addEventListener('click', () => {
    storyModal.style.display = "none";
});

// Fermer si on clique en dehors de la modale
window.addEventListener('click', (event) => {
    if (event.target == storyModal) {
        storyModal.style.display = "none";
    }
});

