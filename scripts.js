function showContent(language) {
    const box = document.querySelector('.box');
    const profilePicture = document.querySelector('.profile-picture');

    // Remove conteúdo antigo
    box.innerHTML = '';
    profilePicture.style.transition = 'all 0.5s ease-in-out';
    profilePicture.style.position = 'absolute';
    profilePicture.style.top = '10px';
    profilePicture.style.left = '10px';
    box.appendChild(profilePicture);

    // Adiciona novo conteúdo com base no idioma
    let nameText = '';
    if (language === 'pt') nameText = 'Golfão';
    else if (language === 'en') nameText = 'Golfo';
    else if (language === 'jp') nameText = `
        <ruby>
            金帝路<rt>きんていろ</rt>
        </ruby>
        <ruby>
            湾<rt>ゴルフ</rt>
        </ruby>
    `;

    const content = `
        <h1>${nameText}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        <button class="back-button" onclick="resetContent()">Voltar</button>
    `;
    box.innerHTML += content;
}

// Função para voltar ao estado inicial
function resetContent() {
    const box = document.querySelector('.box');
    const profilePicture = document.querySelector('.profile-picture');

    // Resetando conteúdo inicial
    box.innerHTML = `
        <img class="profile-picture" src="img/profile.png" alt="Profile Picture">
        <div class="name">
            <h1>Golfão</h1>
            <h2>
                <ruby>
                    金帝路<rt>きんていろ</rt>
                </ruby>
                <ruby>
                    湾<rt>ゴルフ</rt>
                </ruby>
            </h2>
        </div>
        <div class="language-buttons">
            <button onclick="showContent('pt')">Português</button>
            <button onclick="showContent('en')">English</button>
            <button onclick="showContent('jp')">日本語</button>
        </div>
    `;
}
