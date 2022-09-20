const template = document.querySelector("#iconTemplate");

getPlugins();

async function getPlugins() {
    const result = await fetch("https://api.modrinth.com/v2/user/youhavetrouble/projects");
    if (result.status !== 200) return;
    const json = await result.json();
    const pluginSection = document.querySelector("[data-plugins]");

    for (const plugin in json) {
        const pluginData = json[plugin];
        if (pluginData.client_side !== "unsupported") continue;
        const clonedTemplate = template.content.cloneNode(true);
        const projectType = pluginData.project_type;
        const slug = pluginData.slug;
        clonedTemplate.querySelector("[data-link]").href = `https://modrinth.com/${projectType}/${slug}`;
        clonedTemplate.querySelector("[data-name]").innerText = pluginData.title;
        clonedTemplate.querySelector("[data-desc]").innerText = pluginData.description;
        const icon = clonedTemplate.querySelector("[data-iconimage]");
        icon.src = pluginData.icon_url;
        icon.alt = pluginData.title;
        pluginSection.append(clonedTemplate);
    }
}