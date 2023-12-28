const navLinks = {
    hero: document.querySelector('a[href="#hero"]'),
    projects: document.querySelector('a[href="#projects"]'),
}

const sections = {
    hero: document.querySelector('#hero'),
    projects: document.querySelector('#projects'),
}

changeSection(window.location.hash ? window.location.hash : '#hero')

for (const link of Object.values(navLinks)) {
    link.addEventListener('click', (e) => {
            const target = e.target.getAttribute('href');
            if (!target.startsWith('#')) return;
            changeSection(target)
        }
    )
}

function changeSection(sectionName) {
    for (const link of Object.values(navLinks)) {
        link.classList.remove('active');
    }
    for (const link of Object.values(sections)) {
        link.classList.remove('active');
    }

    if (!sectionName.startsWith('#')) {
        sectionName = '#' + sectionName;
    }

    const targetElement = document.querySelector(sectionName);
    if (!targetElement) return;
    targetElement.classList.add('active');
    navLinks[targetElement.id].classList.add('active');
}

/** Shuffle data-info elements */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const dataInfo = document.querySelector("[data-info]");
const dataInfoElements = [];
for (const element of dataInfo.children) {
    dataInfoElements.push(element);
}
shuffleArray(dataInfoElements);
dataInfo.innerHTML = "";
for (const element of dataInfoElements) {
    dataInfo.appendChild(element);
}




