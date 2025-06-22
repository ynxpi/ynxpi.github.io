<script>
  let holdTimer;

  // Startup initialization
  function startUI() {
    document.getElementById('startup-screen').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'flex';
    requestFull();
    keepAwake();
  }

  // Request fullscreen
  async function requestFull() {
    const el = document.documentElement;
    if (el.requestFullscreen) await el.requestFullscreen();
  }

  // Prevent screen from sleeping
  async function keepAwake() {
    try {
      if ('wakeLock' in navigator) await navigator.wakeLock.request('screen');
    } catch (err) {
      console.warn('Wake lock failed:', err);
    }
  }

  // Show submenu
  function showSubmenu(id) {
    document.getElementById('main-menu').style.display = 'none';
    document.querySelectorAll('.submenu').forEach(m => m.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
  }

  // Return to main menu
  function goBack() {
    document.querySelectorAll('.submenu').forEach(m => m.style.display = 'none');
    document.getElementById('main-menu').style.display = 'flex';
  }

  // Popup for long press
  function startHold(el, msg) {
    holdTimer = setTimeout(() => showPopup(msg), 600);
  }

  function clearHold() {
    clearTimeout(holdTimer);
  }

  function showPopup(msg) {
    const popup = document.getElementById('popup');
    const text = document.getElementById('popup-text');
    const bar = document.getElementById('popup-bar');

    text.textContent = msg;
    popup.classList.add('show');
    bar.style.transition = 'none';
    bar.style.width = '100%';
    void bar.offsetWidth;
    const duration = Math.max(2000, msg.length * 80);
    bar.style.transition = `width ${duration}ms linear`;
    bar.style.width = '0%';
    setTimeout(() => popup.classList.remove('show'), duration);
  }

  // Clock update
  function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = `⏰ ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Battery update
  function updateBattery() {
    if (!navigator.getBattery) return;
    navigator.getBattery().then(b => {
      const level = Math.round(b.level * 100);
      document.getElementById('battery-status').textContent = `🔋 ${level}%`;
    });
  }
  updateBattery();

  // Snow effect
  const snowContainer = document.getElementById('snow-container');
  function createSnowflake() {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");
    flake.textContent = "❄";
    flake.style.left = Math.random() * window.innerWidth + "px";
    flake.style.fontSize = (Math.random() * 10 + 10) + "px";
    flake.style.animationDuration = (Math.random() * 2 + 2) + "s";
    snowContainer.appendChild(flake);
    setTimeout(() => flake.remove(), 4000);
  }
  setInterval(createSnowflake, 120);

  // Back to start on minimize
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      document.getElementById('startup-screen').style.display = 'flex';
      requestFull();
    }
  });

  // Login system
  async function login(event) {
    event.preventDefault();
    const user = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value.trim();

    if (user === 'ynx' && pass === 'Lilyismylilsister1') {
      document.getElementById('auth-screen').style.display = 'none';
      document.getElementById('main-menu').style.display = 'flex';
      return;
    }

    try {
      const res = await fetch('https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/users.json');
      const db = await res.json();
      if (db[user] && db[user] === pass) {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('main-menu').style.display = 'flex';
      } else {
        alert("Invalid credentials.");
      }
    } catch {
      alert("Failed to validate login.");
    }
  }

  async function signup(event) {
    event.preventDefault();
    const user = document.getElementById('signup-user').value.trim();
    const pass = document.getElementById('signup-pass').value.trim();
    const res = await fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/users.json');
    const data = await res.json();
    const content = JSON.parse(atob(data.content));
    if (content[user]) {
      alert('Username already exists.');
      return;
    }
    content[user] = pass;

    await fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/users.json', {
      method: 'PUT',
      headers: {
        'Authorization': `token YOUR_GITHUB_TOKEN`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Add user ${user}`,
        content: btoa(JSON.stringify(content, null, 2)),
        sha: data.sha
      })
    });

    alert('Signup complete! You can now log in.');
  }
</script>
