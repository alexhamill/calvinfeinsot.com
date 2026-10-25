// FireBase Setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
import {
    getFirestore, collection, getDocs, doc, onSnapshot, runTransaction
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
console.log(db);

async function getgames(db) {
  const gameCol = collection(db, 'Games');
  const gameSnapshot = await getDocs(gameCol);
  const gameList = gameSnapshot.docs.map(doc => doc.data());
  return gameList;
}

function makeblock(game){
    console.log(game);
    const block = `<div class="daycon">
            <a href="${game.Link}" target="_blank" rel="noopener"><h1 class="gname">${game.Name}!</h1></a>
            <div class="ac">
                <h2>All Time High Score:</h2>
                
            </div>
            <div class="alex">
                <h2 style="text-align: center;">Alex</h2>
                <p>High Score:</p>
                <p>Today's Score:</p>
            </div>
            <div class="calvin">
                <h2 style="text-align: center;">Calvin</h2>
                <p>High Score:</p>
                <p>Today's Score:</p>
            </div>
        </div>`
    document.querySelector("#maincon").innerHTML += block;
}

async function init() {
    const games = await getgames(db);
    games.forEach(element => {
        makeblock(element);
    });
}

init();