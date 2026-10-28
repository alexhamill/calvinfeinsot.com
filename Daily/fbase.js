// FireBase Setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
import {
    getFirestore, collection, getDocs, doc, onSnapshot, runTransaction , setDoc, updateDoc, addDoc
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBcf43VHWoWFibtDRzgu0ruj8gfQzEAVF4",
    authDomain: "dailies-958ac.firebaseapp.com",
    projectId: "dailies-958ac",
    storageBucket: "dailies-958ac.firebasestorage.app",
    messagingSenderId: "966696423147",
    appId: "1:966696423147:web:ecbc4450856eaa25b078ae",
    measurementId: "G-M458VY28DS"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getgames(db) {
  const gameCol = collection(db, 'Games');
  const gameSnapshot = await getDocs(gameCol);
  const gameList = gameSnapshot.docs.map(d => ({ ...d.data(), id: d.id }));
  return gameList;
}

async function saveSettings(gameId) {
    const maxScore = document.querySelector(`#maxscore-${gameId}`).value;
    const scoreLow = document.querySelector(`#ScoreLow-${gameId}`).checked;
    console.log(maxScore,scoreLow);
    await updateDoc(doc(db, "Games", gameId), {
        MaxScore: maxScore,
        ScoreLow: scoreLow,
    });
}
window.saveSettings = saveSettings;

function makeblock(game){
    console.log(game);
    const max = game.MaxScore ?? "";
    const scoreLow = game.ScoreLow ?? false;
    const block = 
    `<div class="daycon newspaper">
            <div class="setdiv"><i class="material-icons setcon">settings</i>
            <div class="form">
                <form>
                <label for="maxscore-${game.id}" >Max Score:</label>
                <input type="text" id="maxscore-${game.id}" placeholder="-1 for no max" value="${max}"></input>
                <br>
                <input type="checkbox" id="ScoreLow-${game.id}" ${scoreLow ? "checked" : ""}></input>
                <label for="ScoreLow-${game.id}">Scoring Low is Better</label>
                <br>
                <input type="button" value="Save" onclick="saveSettings('${game.id}')">
                </form>
            </div>
            </div>
            <a href="${game.Link}" target="_blank" rel="noopener"><h1 class="gname">${game.Name}!</h1></a>
            <div class="peoplecon">
                <div class="Alex">
                    <p>Alex</p>
                    <div class="playedtoday"><p><i class="material-icons">check_box_outline_blank</i>&nbsp;&nbsp;&nbsp;Played today</p></div>
                </div>
                <div class="Calvin">
                    <p>Calvin</p>
                    <div class="playedtoday"><p><i class="material-icons">check_box_outline_blank</i>&nbsp;&nbsp;&nbsp;Played today</p></div>
                </div>
            </div>
        </div>`
    document.querySelector("#maincon").innerHTML += block;
}



async function init() {
    const games = await getgames(db);
    games.forEach(element => {
        makeblock(element);
    });
    const settings = document.querySelectorAll(".setcon")
    console.log(settings);
    settings.forEach(element => {
        console.log(element);
        element.addEventListener("click", (e) => {
            e.currentTarget.parentElement.classList.toggle("open");
        });
    });
}

init();