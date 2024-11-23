let initialHTML = null;

function showContent(language) {
    const profileBox = document.querySelector(".profile-box");

    // Save the initial HTML for "Voltar"
    if (!initialHTML) {
        initialHTML = profileBox.innerHTML;
    }

    const translations = {
        pt: `
            <img src="img/profile.png" alt="Profile Picture" class="profile-img">
            <h1 class="profile-name">Golfão</h1>
            <ruby class="profile-name-jp">
                金<rt>きん</rt>帝<rt>てい</rt>路<rt>ろ</rt> 湾<rt>ゴルフ</rt>
            </ruby>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Curabitur accumsan, quam a tincidunt dapibus, eros ligula aliquet erat.</p>
            <button onclick="resetContent()">Voltar</button>
        `,
        en: `
            <img src="img/profile.png" alt="Profile Picture" class="profile-img">
            <h1 class="profile-name">Golfo</h1>
            <ruby class="profile-name-jp">
                金<rt>きん</rt>帝<rt>てい</rt>路<rt>ろ</rt> 湾<rt>ゴルフ</rt>
            </ruby>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Integer fringilla, nisl vel vulputate vehicula.</p>
            <button onclick="resetContent()">Back</button>
        `,
        jp: `
            <img src="img/profile.png" alt="Profile Picture" class="profile-img">
            <h1 class="profile-name">金帝路 湾</h1>
            <ruby class="profile-name-jp">
                金<rt>きん</rt>帝<rt>てい</rt>路<rt>ろ</rt> 湾<rt>ゴルフ</rt>
            </ruby>
            <p>ローレム・イプサムはダミーテキスト。</p>
            <p>様々なコンテンツを置き換えるために使われます。</p>
            <button onclick="resetContent()">戻る</button>
        `,
    };

    profileBox.classList.add("fade-out");
    setTimeout(() => {
        profileBox.innerHTML = translations[language];
        profileBox.classList.remove("fade-out");
        profileBox.classList.add("fade-in");
    }, 1000);
}

function resetContent() {
    const profileBox = document.querySelector(".profile-box");

    profileBox.classList.add("fade-out");
    setTimeout(() => {
        profileBox.innerHTML = initialHTML;
        profileBox.classList.remove("fade-out");
        profileBox.classList.add("fade-in");
    }, 1000);
}
