// Aguarda o documento carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os elementos do menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // Quando clicar no hambúrguer, abre/fecha o menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fecha o menu automaticamente quando clicar em um link (melhora a experiência no mobile)
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});
