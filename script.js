let users = [
  { username: "ynx", password: "Lilyismylilsister1" }
];

async function authUser(action) {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;

  if (!user || !pass) return showMsg("Fill in both fields");

  const found = users.find(u => u.username === user);
  if (action === "signup") {
    if (found) return showMsg("User exists");
    users.push({ username: user, password: pass });
    showMsg("✅ Signed up! Now click Login");
    return;
  }

  if (action === "login") {
    if (!found || found.password !== pass) {
      return showMsg("❌ Invalid credentials");
    }
    // Developer account bypasses Pi check
    if (user === "ynx") {
      gotoStartup();
      return;
    }
    // Normal account: check Pi
    const connected = await isPiConnected();
    return connected ? gotoStartup() : showMsg("⚠️ Raspberry Pi not detected");
  }
}

function showMsg(text) {
  document.getElementById("auth-msg").innerText = text;
}

async function isPiConnected() {
  try {
    await fetch("http://raspberrypi.local", { method: "HEAD", mode: "no-cors" });
    return true;
  } catch {
    return false;
  }
}

function gotoStartup() {
  document.getElementById("auth-screen").style.display = "none";
  document.getElementById("startup-screen").style.display = "flex";
}

function startApp() {
  document.getElementById("startup-screen").style.display = "none";
  document.getElementById("main-ui").style.display = "flex";
}

function onClick(category) {
  alert("Open " + category);
}
