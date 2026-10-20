// ===== 1. Mobile menu =====
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// close the menu after a link is tapped
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// ===== 2. Countdown to the event =====
// Event: 12 November 2026, 10:00 AM (month is 0-based, so 10 = November)
const eventDate = new Date(2026, 10, 12, 10, 0, 0);

function updateCountdown() {
  const diff = eventDate - new Date();
  const box = document.getElementById("countdown");

  if (diff <= 0) {
    box.innerHTML = "<p>The event has started. See you at VentureVerse!</p>";
    clearInterval(timer);
    return;
  }

  const secs = Math.floor(diff / 1000);
  document.getElementById("cd-days").textContent = Math.floor(secs / 86400);
  document.getElementById("cd-hours").textContent = Math.floor((secs % 86400) / 3600);
  document.getElementById("cd-mins").textContent = Math.floor((secs % 3600) / 60);
  document.getElementById("cd-secs").textContent = secs % 60;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// ===== 3. Demo registration form (no data is sent anywhere) =====
const form = document.getElementById("regForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const year = form.year.value;

  if (!name || !email || !year) {
    msg.textContent = "Please fill in all three fields.";
    msg.className = "form-msg error";
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    msg.textContent = "Please enter a valid email address.";
    msg.className = "form-msg error";
    return;
  }

  msg.textContent = "Thanks, " + name + "! Your demo seat is saved.";
  msg.className = "form-msg ok";
  form.reset();
});
