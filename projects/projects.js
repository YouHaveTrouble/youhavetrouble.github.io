const projectEntry = document.getElementById('project-entry');
const mcPluginsSection = document.getElementById('minecraft-plugins');
mcPluginsSection.innerHTML = '<legend><h2>Minecraft plugins</h2></legend>'
getRepos();

function getRepos() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/youhavetrouble/repos?per_page=200');
    xhr.send();
    xhr.onload = function() {
        if (xhr.status !== 200) {
            mcPluginsSection.innerHTML = '<legend><h2>Minecraft plugins</h2></legend><p>An error occured while getting data from github. Please refresh the page.</p>'
            return;
        }
        let json = JSON.parse(xhr.response);
        for (const repoId in json) {
            const repo = json[repoId];
            if (repo['topics'].includes('minecraft-plugin')) {
                addMinecraftPlugin(repo);
            }
        }
    };
}

function addMinecraftPlugin(pluginData) {
    let newEntry = projectEntry.content.querySelector('.project-entry').cloneNode(true);
    newEntry.querySelector('.project-title').innerText = pluginData['name'];
    newEntry.querySelector('.project-source').href = pluginData['html_url'];
    newEntry.querySelector('.project-description').innerText = pluginData['description']
    newEntry.querySelector('.project-downloads').href = `${pluginData['html_url']}/releases/latest`
    mcPluginsSection.append(newEntry);
}