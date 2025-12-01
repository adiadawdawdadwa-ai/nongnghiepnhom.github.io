// ACCORDION behavior
document.querySelectorAll('.accordion-header').forEach(h => {
h.addEventListener('click', () => {
const content = h.nextElementSibling;
document.querySelectorAll('.accordion-content').forEach(c => { if(c !==
content) c.style.display = 'none'; });
content.style.display = content.style.display === 'block' ? 'none' :
'block';
});
});
// SEARCH behavior: map keywords to element IDs
const searchInput = document.getElementById('site-search');
const searchBtn = document.getElementById('search-btn');
const mapping = {
'xoai': 'xoai', 'xoài': 'xoai', 'xoài': 'xoai',
'nhan': 'nhan', 'nhãn': 'nhan', 'nhãn lồng': 'nhan',
'vải': 'vai', 'vai': 'vai', 'vải thiều': 'vai',
'trà': 'tra', 'tra': 'tra',
'tỏi': 'toi', 'toi': 'toi',
'quế': 'que', 'que': 'que',
'chanh dây': 'chanhday', 'chanh': 'chanhday',
'cà phê': 'cafe', 'càphê': 'cafe', 'cafe': 'cafe',
'vú sữa': 'vusua', 'vusua': 'vusua'
};
function normalizeText(s){ return s.normalize('NFC').toLowerCase().trim(); }
function openAccordionForElement(el){
if(!el) return;
// find the parent accordion-content
const content = el.closest('.accordion-content');
if(content){
// show that content and hide others
document.querySelectorAll('.accordion-content').forEach(c =>
c.style.display = 'none');
content.style.display = 'block';
}
}
function scrollToElementById(id){
const el = document.getElementById(id);
if(!el) return false;
openAccordionForElement(el);
setTimeout(()=>{
el.scrollIntoView({behavior:'smooth', block:'center'});
// highlight briefly
8
el.style.transition = 'box-shadow 0.4s ease';
el.style.boxShadow = '0 8px 30px rgba(46,125,50,0.25)';
setTimeout(()=> el.style.boxShadow = '', 1400);
},220);
return true;
}
function handleSearch(){
const q = normalizeText(searchInput.value || '');
if(!q) return;
// try direct mapping by tokenizing
// check each mapping key if included in q
for(const key in mapping){
if(q.includes(key)){
const ok = scrollToElementById(mapping[key]);
if(ok) return;
}
}
// fallback: search for card titles
const allCards = document.querySelectorAll('.card');
for(const c of allCards){
if(c.innerText.toLowerCase().includes(q)){
const id = c.id;
if(id) { scrollToElementById(id); return; }
}
}
// not found
alert('Không tìm thấy nông sản phù hợp. Vui lòng thử từ khóa khác (ví dụ: xoài, nhãn, vải, trà, tỏi, cà phê).');
}
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', e=>{ if(e.key === 'Enter')
handleSearch(); });
// CHATBOT logic (simple rule-based like trước)
const chatbot = document.getElementById('chatbot');
const chatToggle = document.getElementById('chat-toggle');
const chatClose = document.getElementById('chatbot-close');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
function appendMessage(msg, cls){
const div = document.createElement('div');
div.className = cls;
div.textContent = msg;
chatMessages.appendChild(div);
chatMessages.scrollTop = chatMessages.scrollHeight;
}
9
function getAIReply(msg){
msg = msg.toLowerCase();
if(msg.includes('tỏi')) return ' Tỏi Lý Sơn: củ chắc, thơm, vị cay nồng tốt cho ẩm thực và sức khỏe.';
if(msg.includes('xoài')) return ' Xoài Cát Hòa Lộc: ngọt, thơm, phù hợp ăn tươi và chế biến.';
if(msg.includes('nhãn')) return ' Nhãn Lồng Hưng Yên: cùi dày, ngọt và thơm.';
if(msg.includes('vải')) return ' Vải Lục Ngạn: quả mọng nước, ngọt thanh.';
if(msg.includes('cà phê') || msg.includes('cafe')) return ' Cà phê Buôn Ma Thuột: hạt chất lượng, hương thơm nồng.';
if(msg.includes('trà')) return ' Trà Tân Cương: vị đậm, hương thơm dịu.';
return ' Mình chưa rõ. Hãy hỏi về nông sản như: xoài, nhãn, vải, trà, tỏi, cà phê.';
}
function openChat(){
chatToggle.classList.add('hidden');
chatbot.classList.add('open');
chatbot.setAttribute('aria-hidden','false');
}
function closeChat(){
chatbot.classList.remove('open');
chatbot.setAttribute('aria-hidden','true');
setTimeout(()=> chatToggle.classList.remove('hidden'), 300);
}
chatToggle.addEventListener('click', ()=>{ openChat(); appendMessage('Xinchào! Bạn cần hỏi về nông sản, công nghệ hay việc làm?', 'ai'); });
chatClose.addEventListener('click', ()=>{ closeChat(); });
chatSend.addEventListener('click', ()=>{
const val = chatInput.value.trim();
if(!val) return;
appendMessage(val, 'user');
chatInput.value = '';
setTimeout(()=> appendMessage(getAIReply(val), 'ai'), 500);
});
chatInput.addEventListener('keypress', e=>{ if(e.key === 'Enter')
chatSend.click(); });
// Accessibility: close chat on Escape
document.addEventListener('keydown', e=>{ if(e.key === 'Escape' &&
chatbot.classList.contains('open')) closeChat(); })