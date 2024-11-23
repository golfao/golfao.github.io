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

    // Adiciona novo conteúdo
    let nameText = '';
    if (language === 'pt') nameText = 'Golfão';
    else if (language === 'en') nameText = 'Golfo';
    else if (language === 'jp') nameText = '金帝路 湾 <span class="furigana">(きんていろ ゴルフ)</span>';

    const content = `
        <h1>${nameText}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
    `;
    box.innerHTML += content;
}
