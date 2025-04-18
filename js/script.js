$(document).ready(function () {
    // Favoritos
    // Adiciona o evento de clique ao coração
    $('.coracao').click(function () {
        // Verifica o estado atual do coração
        if ($(this).attr('data-state') === 'empty') {
            // Muda para cheio
            $(this).attr({
                'src': 'assets/favorito 2.svg',
                'data-state': 'filled'
            });
        } else {
            // Muda para vazio
            $(this).attr({
                'src': 'assets/favorito 1.svg',
                'data-state': 'empty'
            });
        }
    });

// Outros aqui

});