
// script.js — put this file next to index.html (same folder)
function openGame(gameName) {
  window.location.href = `games/${gameName}.html`;
}

// optional: helper to test file existence
function checkGameFile(gameName) {
  fetch(`games/${gameName}.html`, { method: 'HEAD' })
    .then(res => {
      if (res.ok) console.log(`✅ games/${gameName}.html exists`);
      else console.warn(`❌ games/${gameName}.html NOT found (status ${res.status})`);
    })
    .catch(err => console.error('Error checking file:', err));
}

console.log('script.js loaded — openGame available');


