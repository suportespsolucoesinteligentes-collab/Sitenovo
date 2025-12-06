// Documentação: Função para lidar com a rolagem suave ao clicar nos links de navegação.
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Funcionalidade do Menu Mobile (Responsividade)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Ao clicar no botão, alterna a classe 'active' no menu
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // 2. Fechar o menu ao clicar em um link (útil para mobile)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe 'active', fechando o menu (se estiver aberto)
            navMenu.classList.remove('active');
        });
    });

    // 3. Implementação da Rolagem Suave (Smooth Scroll)
    // Seleciona todos os links que começam com '#' (links internos)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento de salto padrão
            
            // Pega o destino (o ID da seção, ex: #servicos)
            const targetId = this.getAttribute('href');
            
            // Usa o método 'scrollIntoView' para uma rolagem elegante
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
