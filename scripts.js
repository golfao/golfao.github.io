function showContent(language) {
    const box = document.querySelector('.box');

    // Adiciona a classe de fade-out para esconder o conteúdo atual
    box.classList.remove('fade-in');
    box.classList.add('fade-out');

    // Aguarda o fim do fade-out para alterar o conteúdo
    setTimeout(() => {
        let content = '';

        // Define o conteúdo com base no idioma selecionado
        if (language === 'pt') {
            content = `
                <h1>Golfão</h1>
                <p>Bem-vindo ao site oficial do Golfão!</p>
            `;
        } else if (language === 'en') {
            content = `
                <h1>Golfão</h1>
                <p>Welcome to Golfão's official website!</p>
            `;
        } else if (language === 'jp') {
            content = `
                <h1>
                    <ruby>金帝路<rt>きん てい ろ</rt></ruby> 
                    <ruby>湾<rt>ゴルフ</rt></ruby>
                </h1>
                <p>ゴルファンの公式ウェブサイトへようこそ！</p>
            `;
        }

        // Atualiza o conteúdo da box
        box.innerHTML = `
            <img class="profile-picture" src="img/profile.png" alt="Profile Picture">
            ${content}
            <button class="back-button" onclick="resetContent()">Voltar</button>
        `;

        // Remove a classe fade-out e adiciona fade-in para exibir o novo conteúdo
        box.classList.remove('fade-out');
        box.classList.add('fade-in');
    }, 500); // Tempo para o fade-out
}

function resetContent() {
    const box = document.querySelector('.box');

    // Aplica a classe de fade-out ao voltar ao conteúdo inicial
    box.classList.remove('fade-in');
    box.classList.add('fade-out');

    // Após o fade-out, redefine o conteúdo inicial
    setTimeout(() => {
        box.innerHTML = `
            <img class="profile-picture" src="img/profile.png" alt="Profile Picture">
            <div class="name">
                <h1>Golfão</h1>
                <h2>
                    <ruby>金帝路<rt>きん てい ろ</rt></ruby> 
                    <ruby>湾<rt>ゴルフ</rt></ruby>
                </h2>
            </div>
            <div class="language-buttons">
                <button onclick="showContent('pt')">Português</button>
                <button onclick="showContent('en')">English</button>
                <button onclick="showContent('jp')">日本語</button>
            </div>
        `;

        // Remove a classe fade-out e adiciona fade-in para o conteúdo inicial
        box.classList.remove('fade-out');
        box.classList.add('fade-in');
    }, 500); // Tempo para o fade-out
}
