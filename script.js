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
  if (msg.includes("cam")) return "🍊 Cam sành Vĩnh Long là đặc sản nổi tiếng của miền Tây Nam Bộ, được mệnh danh là “vua cam” của Việt Nam. Với lớp vỏ xanh sần sùi đặc trưng, bên trong là múi cam vàng óng, mọng nước và vị ngọt thanh xen chút chua dịu. Người dân Vĩnh Long chăm chút từ khâu trồng, chăm sóc đến thu hoạch, tạo nên chất lượng cam sành thơm ngon, giàu dinh dưỡng. Loại cam này không chỉ được ưa chuộng trong nước mà còn xuất khẩu ra nhiều thị trường quốc tế. Thưởng thức cam sành Vĩnh Long là cảm nhận hương vị tươi mát và tinh hoa của vùng đất phù sa màu mỡ.";
  if (msg.includes("dừa")) return "🥥 Dừa Bến Tre là đặc sản nổi tiếng của miền Tây Nam Bộ, được mệnh danh là “xứ dừa” của Việt Nam. Với vị ngọt thanh mát, nước dừa nơi đây trở thành thức uống giải khát tự nhiên được nhiều người yêu thích. Người dân Bến Tre tận dụng từng phần của cây dừa – từ trái, lá đến thân – để chế biến đa dạng sản phẩm như kẹo dừa, dầu dừa, thủ công mỹ nghệ. Cây dừa không chỉ mang lại giá trị kinh tế mà còn gắn bó mật thiết với đời sống văn hóa của người dân miền sông nước. Thưởng thức dừa Bến Tre không chỉ là tận hưởng vị ngọt lành mà còn cảm nhận được tinh hoa của vùng đất hiền hòa.";
  if (msg.includes("rau má")) return "🌿 Rau má miền Nam là đặc sản dân dã, gắn liền với đời sống người dân nơi đây. Với vị thanh mát, hơi đắng nhẹ nhưng ngọt hậu, rau má thường được dùng để nấu canh, ăn sống hoặc ép lấy nước giải khát. Người dân miền Nam chăm chút từng luống rau, từ khâu gieo trồng đến thu hoạch, giữ trọn hương vị tự nhiên. Uống một ly nước rau má không chỉ giúp giải nhiệt ngày hè mà còn cảm nhận được sự giản dị, tinh túy của ẩm thực Việt.";
  if (msg.includes("tỏi")) return "🧄 Tỏi Lý Sơn là đặc sản nổi tiếng của huyện đảo Lý Sơn (Quảng Ngãi), được mệnh danh là “vàng trắng” của vùng biển này. 🌊Loại tỏi này có củ nhỏ, tép mẩy, hương thơm dịu và vị cay nồng đặc trưng. Nhờ được trồng trên đất núi lửa pha cát biển, tỏi Lý Sơn chứa nhiều tinh dầu, dược tính cao, tốt cho sức khỏe. Không chỉ là gia vị, tỏi Lý Sơn còn là niềm tự hào văn hóa và thương hiệu nông sản của Việt Nam.";
  if (msg.includes("hạt điều")) return "Hạt điều Bình Định là đặc sản nổi tiếng của miền Trung, mang hương vị bùi béo khó quên. 🌰 Với vị giòn thơm, nhân trắng ngọt dịu, hạt điều nơi đây được chế biến thành nhiều sản phẩm hấp dẫn như rang muối, điều sấy. Người dân Bình Định chăm chút từ khâu trồng, thu hoạch đến chế biến, giữ trọn hương vị tự nhiên. Thưởng thức hạt điều Bình Định không chỉ là tận hưởng món ăn ngon mà còn cảm nhận được tinh hoa lao động của vùng đất võ.";
  if (msg.includes("rau trà quế")) return "Rau Trà Quế – Hội An mang trong mình hương vị đặc trưng của đất và nước miền Trung. 🥗 Nhờ được trồng trên đất phù sa kết hợp rong rêu từ sông Cổ Cò, rau nơi đây có vị ngọt mát và mùi thơm khác biệt.Từ lâu, rau Trà Quế đã trở thành nguyên liệu không thể thiếu trong các món ăn truyền thống của Hội An như cao lầu, mì Quảng. Không chỉ là thực phẩm, đó còn là nét văn hóa ẩm thực gắn liền với đời sống và niềm tự hào của người dân Hội An.";
  if (msg.includes("khoai")) return "Khoai lang Nhật Quảng Nam là đặc sản nổi tiếng của vùng đất miền Trung, được nhiều người yêu thích. 🍠 Củ khoai có vỏ tím, ruột vàng óng, vị ngọt bùi tự nhiên và giàu dinh dưỡng. Nhờ khí hậu và thổ nhưỡng đặc biệt, khoai lang Nhật Quảng Nam cho chất lượng vượt trội, dễ chế biến thành nhiều món ngon. Không chỉ là thực phẩm dân dã, khoai lang Nhật còn góp phần nâng cao giá trị nông sản và là niềm tự hào của người dân Quảng Nam.";
  if (msg.includes("mận")) return "Mận hậu Sơn La là đặc sản nổi tiếng của vùng núi Tây Bắc, đặc biệt ở tỉnh Sơn La. 🍑 Quả mận có vỏ tím hồng, thịt giòn ngọt, vị chua nhẹ rất đặc trưng. Nhờ khí hậu mát mẻ và đất đai màu mỡ, mận hậu Sơn La cho chất lượng vượt trội, được nhiều người ưa chuộng. Không chỉ là loại trái cây ngon, mận hậu còn góp phần nâng cao giá trị nông sản và là niềm tự hào của người dân Sơn La.";
  if (msg.includes("nấm")) return "Nấm hương rừng Lạng Sơn là đặc sản quý của vùng núi phía Bắc Việt Nam. 🍄Loại nấm này mọc tự nhiên trong rừng, có mùi thơm đặc trưng, vị ngọt thanh và giàu dinh dưỡng. Nấm hương rừng thường được dùng trong các món hầm, xào, hoặc chế biến thành dược liệu tốt cho sức khỏe. Không chỉ là thực phẩm, nấm hương rừng Lạng Sơn còn mang giá trị văn hóa và kinh tế cho đồng bào miền núi.";
  if (msg.includes("táo mèo")) return "Táo mèo Yên Bái là đặc sản nổi tiếng của vùng núi Tây Bắc, đặc biệt ở tỉnh Yên Bái. 🍎 Quả táo mèo nhỏ, vỏ sần sùi, vị chua chát đặc trưng nhưng lại ngọt hậu, rất được ưa chuộng. Táo mèo thường được dùng để ngâm rượu, làm siro, mứt hoặc chế biến thành dược liệu hỗ trợ tiêu hóa. Không chỉ là loại quả dân dã, táo mèo Yên Bái còn mang giá trị văn hóa và kinh tế cho đồng bào vùng cao.";
  if (msg.includes("cà phê")) return "Cà phê Buôn Ma Thuột là đặc sản nổi tiếng của vùng đất Tây Nguyên, được mệnh danh là “thủ phủ cà phê” của Việt Nam. ☕ Với hương vị đậm đà, nồng nàn, mỗi hạt cà phê nơi đây thấm đẫm nắng gió và đất bazan màu mỡ. Người dân Tây Nguyên chăm chút từ khâu trồng, thu hoạch đến rang xay, tạo nên chất lượng tuyệt hảo. Nhấp một ngụm cà phê Buôn Ma Thuột không chỉ thưởng thức vị ngon mà còn cảm nhận được tinh hoa văn hóa cà phê Việt.";
  if (msg.includes("trà")) return "Trà Tân Cương là đặc sản nổi tiếng của vùng Thái Nguyên, được mệnh danh là “đệ nhất danh trà” của Việt Nam. 🌿Với hương thơm dịu nhẹ, vị chát đầu lưỡi rồi ngọt hậu nơi cuống họng, trà Tân Cương mang lại cảm giác khoan khoái, dễ chịu. Người dân nơi đây chăm chút từng lá trà, từ khâu trồng, hái đến sao chế, tạo nên chất lượng tuyệt hảo. Uống một chén trà Tân Cương không chỉ thưởng thức hương vị mà còn cảm nhận được tinh hoa văn hóa trà Việt.";
  if (msg.includes("quế")) return "Quế Trà Bồng là đặc sản nổi tiếng của huyện Trà Bồng, Quảng Ngãi, được mệnh danh là “dược liệu vàng” của Việt Nam. 🌿Nhờ khí hậu và thổ nhưỡng đặc biệt, vỏ quế nơi đây có hương thơm nồng, vị cay ngọt hậu rất đặc trưng. Quế Trà Bồng chứa nhiều tinh dầu, được dùng trong y học, ẩm thực và sản xuất hương liệu.Không chỉ mang giá trị kinh tế, quế Trà Bồng còn là niềm tự hào văn hóa của người dân Quảng Ngãi.";
  if (msg.includes("xoài")) return "Xoài Cát Hòa Lộc là giống xoài nổi tiếng của tỉnh Tiền Giang, được xem là “vua xoài” Việt Nam. 🥭 Quả có hình dáng thon dài, vỏ vàng óng, thịt dày, ít xơ, vị ngọt đậm và hương thơm đặc trưng. Nhờ thổ nhưỡng phù sa và khí hậu miền Tây, xoài Cát Hòa Lộc đạt chất lượng vượt trội, được ưa chuộng trong và ngoài nước.Đây không chỉ là loại trái cây ngon mà còn là niềm tự hào của vùng đất Tiền Giang.";
  if (msg.includes("vú sữa")) return "Vú sữa Lò Rèn là đặc sản nổi tiếng của tỉnh Vĩnh Long, được xem là loại vú sữa ngon nhất Việt Nam. 🍈 Quả có vỏ mỏng, bóng đẹp, thịt trắng ngần, vị ngọt thanh và hương thơm dịu nhẹ. Nhờ thổ nhưỡng phù sa màu mỡ, vú sữa Lò Rèn có chất lượng vượt trội, được người tiêu dùng trong và ngoài nước ưa chuộng. Đây không chỉ là trái cây ngon mà còn là niềm tự hào của vùng đất Vĩnh Long.";
  if (msg.includes("chanh dây")) return "Chanh dây Lâm Đồng là loại trái cây đặc sản của vùng cao nguyên, nổi tiếng với hương vị thơm ngon. 🌿Quả có vỏ tím, ruột vàng óng, vị chua ngọt hài hòa, giàu vitamin C và chất chống oxy hóa. Nhờ khí hậu mát mẻ quanh năm, chanh dây Lâm Đồng cho chất lượng vượt trội, được ưa chuộng trong nước và xuất khẩu. Không chỉ giải khát, chanh dây còn mang lại nhiều lợi ích sức khỏe, góp phần nâng cao giá trị nông sản địa phương.";
  if (msg.includes("tỏi")) return "🧄 Tỏi Lý Sơn là đặc sản nổi tiếng của Quảng Ngãi, được mệnh danh là “vàng trắng” của Việt Nam. Với củ nhỏ, tép đều, vị thơm nồng nhưng không gắt, tỏi Lý Sơn mang hương vị đặc trưng khó nơi nào sánh được. Người dân trên đảo Lý Sơn chăm chút từ khâu gieo trồng trên đất núi lửa pha cát biển đến thu hoạch, tạo nên chất lượng tuyệt hảo. Loại tỏi này không chỉ được dùng làm gia vị mà còn có giá trị dược liệu cao. Thưởng thức tỏi Lý Sơn là cảm nhận tinh hoa của vùng đảo tiền tiêu miền Trung.";
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


