// ===== ACCORDION =====
document.querySelectorAll(".accordion-header").forEach(h => {
  h.onclick = () => {
    const c = h.nextElementSibling;
    c.style.display = c.style.display === "block" ? "none" : "block";
  };
});

// ===== SEARCH =====
function scrollToCard(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("search-btn").onclick = handleSearch;
document.getElementById("search-input").addEventListener("keypress", e => {
  if (e.key === "Enter") handleSearch();
});

function handleSearch() {
  const q = document.getElementById("search-input").value.toLowerCase();

  const data = {
    "xoài": "xoai",
    "nhãn": "nhan",
    "táo mèo":"tao meo",
    "nấm":"nam",
    "mận hậu":"mau hau",
    "vải": "vai",
    "trà": "tra",
    "chè": "tra",
    "tỏi": "toi",
    "khoai":"khoai",
    "rau":"rau",
    "hạt điều":"hat dieu",
    "quế": "que",
    "chanh dây": "chanhday",
    "cà phê": "cafe",
    "vú sữa": "vusua",
    "rau má":"rau",
    "dừa":"dua",
    "cam":"cam",
  };

  for (let k in data)
    if (q.includes(k)) return scrollToCard(data[k]);

  alert("Không tìm thấy nông sản này.");
}

// ===== CHATBOX =====
const chat = document.getElementById("chatbot");
document.getElementById("chat-toggle").onclick = () => chat.style.display = "block";
document.getElementById("chatbot-close").onclick = () => chat.style.display = "none";

function addMsg(msg, cls) {
  const m = document.createElement("div");
  m.className = cls;
  m.textContent = msg;
  document.getElementById("chat-messages").appendChild(m);
}

function ai(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("xoài")) return "🥭 Xoài Cát Hòa Lộc rất ngọt!";
  if (msg.includes("nhãn")) return "🍐 Nhãn Lồng Hưng Yên rất thơm!";
  if (msg.includes("vải")) return "🌸 Vải thiều rất mọng nước!";
  if (msg.includes("tỏi")) return "🧄 Tỏi Lý Sơn cực kỳ chất lượng!";
  return "🤖 Bạn hỏi nông sản gì ạ?";
}

document.getElementById("chat-send").onclick = sendNow;

function sendNow() {
  let text = document.getElementById("chat-input").value;
  if (!text) return;

  addMsg(text, "user");
  document.getElementById("chat-input").value = "";

  setTimeout(() => addMsg(ai(text), "ai"), 350);
}

