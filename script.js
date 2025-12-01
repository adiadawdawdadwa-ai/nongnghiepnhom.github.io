// ========== ACCORDION ==========
document.querySelectorAll(".accordion-header").forEach(h => {
  h.onclick = () => {
    const c = h.nextElementSibling;
    c.style.display = c.style.display === "block" ? "none" : "block";
  };
});

// ========== TÌM KIẾM ==========
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

function scrollToCard(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function handleSearch() {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) return;

  const items = {
    "xoài": "xoai",
    "xoaicat": "xoai",
    "nhãn": "nhan",
    "vải": "vai",
    "trà": "tra",
    "chè": "tra",
    "tỏi": "toi",
    "quế": "que",
    "chanh": "chanhday",
    "cà phê": "cafe",
    "vusua": "vusua"
  };

  for (let key in items) {
    if (q.includes(key)) {
      scrollToCard(items[key]);
      return;
    }
  }

  alert("Không tìm thấy nông sản phù hợp.\nHãy thử: xoài, nhãn, vải, trà, tỏi, cà phê…");
}

searchBtn.onclick = handleSearch;
searchInput.addEventListener("keypress", e => {
  if (e.key === "Enter") handleSearch();
});

// ========== CHATBOT ==========
const box = document.getElementById("chatbot");
const openBtn = document.getElementById("chat-toggle");
const closeBtn = document.getElementById("chatbot-close");

openBtn.onclick = () => box.style.display = "block";
closeBtn.onclick = () => box.style.display = "none";

const msgBox = document.getElementById("chat-messages");
const input = document.getElementById("chat-input");
const sendBtn = document.getElementById("chat-send");

function addMsg(text, cls) {
  let div = document.createElement("div");
  div.className = cls;
  div.textContent = text;
  msgBox.appendChild(div);
  msgBox.scrollTop = msgBox.scrollHeight;
}

function aiReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("xoài")) return "🥭 Xoài Cát Hòa Lộc rất ngọt và thơm!";
  if (msg.includes("nhãn")) return "🍐 Nhãn Lồng Hưng Yên cùi dày – ngọt.";
  if (msg.includes("vải")) return "🌸 Vải thiều Lục Ngạn mọng nước.";
  if (msg.includes("trà") || msg.includes("chè")) return "🍵 Trà Tân Cương đậm – thơm lâu.";
  if (msg.includes("tỏi")) return "🧄 Tỏi Lý Sơn cay nhẹ – thơm.";
  if (msg.includes("cà phê")) return "☕ Cà phê Buôn Ma Thuột đậm vị.";

  return "🤖 Mình chưa hiểu câu đó. Hãy hỏi về xoài, nhãn, vải, trà, tỏi nhé!";
}

function sendMessage() {
  let text = input.value.trim();
  if (!text) return;

  addMsg(text, "user");
  input.value = "";

  setTimeout(() => addMsg(aiReply(text), "ai"), 400);
}

sendBtn.onclick = sendMessage;
input.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});
