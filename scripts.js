function showContent(language) {
    const box = document.querySelector('.box');

    // Aplicando fade-out ao conteúdo
    box.classList.add('fade-out');

    // Após fade-out, adicionar novo conteúdo
    setTimeout(() => {
        let content = '';

        // Adiciona novo conteúdo com base no idioma
        if (language === 'pt') {
            content = `
                <h1>Golfão</h1>
                <p>Bem-vindo ao site oficial do Golfão!</p>
            `;
        } else if (language === 'en') {
            content = `
                <h1>Golfo</h1>
                <p>Welcome to Golfão's official website!</p>
            `;
        } else if (language === 'jp') {
            content = `
                <h1>
                    <ruby>金帝路<rt>きんていろ</rt></ruby> 
                    <ruby>湾<rt>ゴルフ</rt></ruby>
                </h1>
                <p>ゴルファンの公式ウェブサイトへようこそ！</p>
            `;
        }

        box.innerHTML = `
            <img class="profile-picture" src="img/profile.png" alt="Profile Picture">
            ${content}
            <button class="back-button" onclick="resetContent()">Voltar</button>
        `;

        box.classList.remove('fade-out');
        box.classList.add('fade-in');
    }, 500);
}

// Função para voltar ao estado inicial
function resetContent() {
    const box = document.querySelector('.box');

    box.classList.add('fade-out');

    setTimeout(() => {
        box.innerHTML = `
            <img class="profile-picture" src="img/profile.png" alt="Profile Picture">
            <div class="name">
                <h1>Golfão</h1>
                <h2>
                    <ruby>金帝路<rt>きんていろ</rt></ruby> 
                    <ruby>湾<rt>ゴルフ</rt></ruby>
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
