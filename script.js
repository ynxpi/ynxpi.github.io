let users = [{username:"ynx",password:"Lilyismylilsister1"}];
let holdTimer;

async function authUser(act) {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value;
  if (!u||!p) return showMsg("Fill both fields");
  const ex = users.find(o=>o.username===u);
  if (act==="signup") {
    if (ex) return showMsg("User exists");
    users.push({username:u,password:p}); return showMsg("✅ Signed up!");
  }
  if (act==="login") {
    if (!ex|| ex.password!==p) return showMsg("❌ Invalid");
    if (u==="ynx") return gotoStartup();
    const ok = await isPiConnected();
    return ok? gotoStartup() : showMsg("⚠️ Pi not detected");
  }
}

function showMsg(m) { document.getElementById("auth-msg").innerText=m; }

async function isPiConnected() {
  try { await fetch("http://raspberrypi.local",{method:"HEAD",mode:"no-cors"}); return true; }
  catch { return false; }
}

function gotoStartup() {
  document.getElementById("auth-screen").style.display="none";
  document.getElementById("startup-screen").style.display="flex";
  initUI();
}

function startApp() {
  document.getElementById("startup-screen").style.display="none";
  document.getElementById("main-ui").style.display="flex";
}

function initUI() {
  document.getElementById("clock").style.display="block";
  document.getElementById("battery").style.display="block";
  document.getElementById("snow-container").style.display="block";
  startClock(); startBattery(); startSnow();
}

function startHold(el,msg) { holdTimer = setTimeout(()=>popup(msg),500); }
function clearHold() { clearTimeout(holdTimer); }

function showSub(id) {
  document.getElementById("main-menu").style.display="none";
  Array.from(document.getElementsByClassName("submenu")).forEach(s=>s.style.display="none");
  document.getElementById(id).style.display="flex";
}

function goBack() {
  Array.from(document.getElementsByClassName("submenu")).forEach(s=>s.style.display="none");
  document.getElementById("main-menu").style.display="flex";
}

function popup(msg) {
  const p = document.getElementById("popup"), t=document.getElementById("popup-text"), b=document.getElementById("popup-bar");
  t.innerText = msg; p.classList.add("show");
  b.style.transition="none"; b.style.width="100%";
  void b.offsetWidth;
  const dur = Math.max(1500,msg.length*70);
  b.style.transition=`width ${dur}ms linear`;
  b.style.width="0%";
  setTimeout(()=>p.classList.remove("show"),dur);
}

function startClock() {
  const cEl = document.getElementById("clock");
  setInterval(() => {
    const d=new Date();
    cEl.innerText = `⏰ ${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
  },1000);
}

function startBattery() {
  if (navigator.getBattery) {
    navigator.getBattery().then(b=>{
      const d=document.getElementById("battery");
      d.innerText = "🔋 " + Math.round(b.level*100) + "%";
    });
  }
}

function startSnow() {
  const sc = document.getElementById("snow-container");
  function tick(){
    const f = document.createElement("div");
    f.className = "snowflake"; f.textContent = "❄";
    f.style.left = Math.random()*100+"vw";
    f.style.fontSize = (Math.random()*10+10)+"px";
    f.style.animationDuration = (Math.random()*3+2)+"s";
    sc.appendChild(f);
    setTimeout(()=>f.remove(),5000);
  }
  setInterval(tick,100);
}
