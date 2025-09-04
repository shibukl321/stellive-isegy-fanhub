async function fetchSession(){try{return await (await fetch(window.BACKEND_BASE+'/session',{credentials:'include'})).json()}catch(e){return null}}
function applySessionUI(s){if(document.getElementById('adminArea')){document.getElementById('adminArea').style.display=s?.isAdmin?'block':'none'}}
(async()=>{const s=await fetchSession();applySessionUI(s);})();