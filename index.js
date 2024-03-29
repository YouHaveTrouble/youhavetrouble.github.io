const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('[data-link]');

const observer = new IntersectionObserver((entries) => {
    if (window.innerWidth <= 767) return;
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveLink(sectionId);
        }
    });
}, {
    root: null,
    rootMargin: '-10% 0px -10% 0px',
    threshold: 0.3
});

const mobileObserver = new IntersectionObserver((entries) => {
    if (window.innerWidth > 767) return;
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveLink(sectionId);
        }
    });
}, {
    root: null,
    rootMargin: '-20% 0px -20% 0px',
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
    mobileObserver.observe(section);
});

function setActiveLink(sectionId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-link') === sectionId) {
            link.classList.add('active');
        }
    });
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




