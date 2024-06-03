
/*
js pour menu de navigation
*/

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navLien');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});


/** js pour le bouton de positionnement */


document.addEventListener('DOMContentLoaded', () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const scrollBottomBtn = document.getElementById('scrollBottomBtn');

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollBottomBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});


/** js pour activer est desactiver lien en rouge une fois cliquer */
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navLien a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Retirer la classe "active" de tous les liens
            links.forEach(lnk => lnk.classList.remove('active'));
            // Ajouter la classe "active" au lien cliqué
            this.classList.add('active');
        });
    });
});
