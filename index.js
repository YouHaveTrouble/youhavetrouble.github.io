const status = document.querySelector("#status");
const action = document.querySelector("#status-action");
const avatar = document.querySelector(".avatar img");

updateStatus();
window.setInterval(updateStatus, 10000);

async function updateStatus() {
    const result = await fetch("https://api.youhavetrouble.me/online");
    if (result.status !== 200) return;

    const json = await result.json();
    if (json.steam.status === "ONLINE") {
        status.innerText = "Currently Online";
        action.innerText = "";
        setavatarBg("online")
        return;
    }
    if (json.steam.status === "IN_GAME") {
        status.innerText = "Currently Online";
        action.innerText = `Playing ${json.steam.game}`;
        setavatarBg("online")
        return;
    }
    if (json.discord === "DO_NOT_DISTURB" || json.discord === "ONLINE") {
        status.innerText = "Currently Online";
        action.innerText = "";
        setavatarBg("online")
        return;
    }

    status.innerText = "Currently Offline";
    action.innerText = "";
    setavatarBg("offline")
}

function setavatarBg(status) {
    if (status === "online") {
        avatar.style.backgroundColor = "#5a9a5a"
    } else if (status === "offline") {
        avatar.style.backgroundColor = "#a62d2d"
    }
}
