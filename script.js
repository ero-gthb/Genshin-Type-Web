const characters = [
    { name: "Xiao", img: "https://upload-os-bbs.mihoyo.com/upload/2021/06/10/149752197/ce64f146c01b9936b6b99c372449abaf_4602867125013620545.jpg" },
    { name: "Ganyu", img: "https://upload-os-bbs.mihoyo.com/upload/2021/06/10/149752197/a0e5fdfaf979ff34cd44cc02ccf0ff48_2786113606900450024.jpg" },
    { name: "Zhongli", img: "https://upload-os-bbs.mihoyo.com/upload/2021/06/10/149752197/a9257711f1705451c2730fa3dd9ecf02_2772284982487163066.jpg" },
    { name: "Hu Tao", img: "https://upload-os-bbs.mihoyo.com/upload/2021/06/10/149752197/3dd0b9bfcf0bda3a5e8e1bda3acbbc93_8022970524266929024.jpg" }
];

function startEvent() {
    document.getElementById("hiddenCard").style.display = "block";
}

function revealCharacter() {
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    const imgElement = document.getElementById("characterImg");
    imgElement.src = randomChar.img;
    imgElement.style.display = "block";

    document.querySelector(".card-text").style.display = "none";

    // Show popup
    document.getElementById("popup").style.display = "block";
    document.getElementById("charName").innerText = randomChar.name;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
