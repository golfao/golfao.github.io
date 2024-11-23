function showContent(language) {
    const box = document.querySelector('.box');
    const profilePicture = document.querySelector('.profile-picture');

    // Aplicando fade-out ao conteúdo
    box.classList.add('fade-out');

    // Após fade-out, adicionar novo conteúdo
    setTimeout(() => {
        box.innerHTML = '';

        profilePicture.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        profilePicture.style.transform = 'translateX(-20px)';
        box.appendChild(profilePicture);

        // Adiciona novo conteúdo com base no idioma
        let nameText = '';
        if (language === 'pt') nameText = 'Golfão';
        else if (language === 'en') nameText = 'Golfo';
        else if (language === 'jp') nameText = `
            <ruby>金<rt>きん</rt></ruby>
            <ruby>帝<rt>てい</rt></ruby>
            <ruby>路<rt>ろ</rt></ruby>
            湾<rt>ゴルフ</rt>
        `;

        const content = `
            <h1>${nameText}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            <button class="back-button" onclick="resetContent()">Voltar</button>
        `;

        box.innerHTML += content;
        box.classList.remove('fade-out');
        box.classList.add('fade-in');
    }, 500); // Esperar o fade-out antes de renderizar
}

// Função para voltar ao estado inicial
function resetContent() {
    const box = document.querySelector('.box');
    const profilePicture = document.querySelector('.profile-picture');

    box.classList.add('fade-out');

    setTimeout(() => {
        box.innerHTML = `
            <img class="profile-picture" src="img/profile.png" alt="Profile Picture">
            <div class="name">
                <h1>Golfão</h1>
                <h2>
                    <ruby>金<rt>きん</rt></ruby>
                    <ruby>帝<rt>てい</rt></ruby>
                    <ruby>路<rt>ろ</rt></ruby>
                    湾<rt>ゴルフ</rt>
                </h2>
            </div>
            <div class="language-buttons">
                <button onclick="showContent('pt')">Português</button>
                <button onclick="showContent('en')">English</button>
                <button onclick="showContent('jp')">日本語</button>
            </div>
        `;
        box.classList.remove('fade-out');
        box.classList.add('fade-in');
    }, 500);
}
