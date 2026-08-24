// DOM Elements
const messageInput = document.getElementById('messageInput');
const messageForm = document.getElementById('messageForm');
const messagesContainer = document.getElementById('messagesContainer');
const userNameDisplay = document.getElementById('userName');
const avatarLetter = document.getElementById('avatarLetter');
const userAvatar = document.getElementById('userAvatar');

// const socket = io("http://localhost:3000", {
//   withCredentials: true
// });

var currentUser = 'null'

userNameDisplay.textContent = currentUser;
avatarLetter.textContent = currentUser.charAt(0).toUpperCase();
const colors = generateAvatarColor(currentUser);
userAvatar.style.background = `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`;

messageInput.disabled = false;

let userData 

function hideEmptyState() {
  const emptyState = document.querySelector('.empty-state');
  if (emptyState) {
    emptyState.remove();
  }
}

// Add Message to Chat
function addMessage(text, author, isOwn = false) {
  hideEmptyState();

  const bubble = document.createElement('div');
  bubble.className = `message ${isOwn ? 'outgoing' : 'incoming'}`;

  const now = new Date();
  const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

  const authorEl = document.createElement('div');
  authorEl.style.marginBottom = '6px';
  authorEl.style.fontWeight = '600';
  authorEl.style.fontSize = '0.85rem';
  authorEl.style.opacity = isOwn ? '0.9' : '0.85';
  authorEl.textContent = author;

  const textEl = document.createElement('div');
  textEl.style.wordBreak = 'break-word';
  textEl.textContent = text;

  const metaEl = document.createElement('div');
  metaEl.className = 'message-meta';

  const timeEl = document.createElement('span');
  timeEl.className = 'message-time';
  timeEl.textContent = time;

  metaEl.appendChild(timeEl);
  bubble.appendChild(authorEl);
  bubble.appendChild(textEl);
  bubble.appendChild(metaEl);

  messagesContainer.appendChild(bubble);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Generate Avatar Color
function generateAvatarColor(name) {
  const colors = [
    ['#3b82f6', '#2563eb'],
    ['#8b5cf6', '#7c3aed'],
    ['#ec4899', '#db2777'],
    ['#f59e0b', '#d97706'],
    ['#10b981', '#059669'],
    ['#06b6d4', '#0891b2'],
  ];
  
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const text = messageInput.value.trim();
  if (!text) return;
  
  // socket.emit("send", text)
  messageInput.value = '';
  messageInput.focus();
});

// socket.on('connect_error', (err) => {
//   if (err.message === 'NO_COOKIE') {
//     window.location.href = '/registration'
//   }
//   if (err.message === "DB_RESPONSE") {
//     window.location.href = '/registration'
//   }
// })

// socket.on("token_expired", () => {
//   document.cookie = "jwt=; Max-Age=0; path=/";
//   window.location.href = "/registration";
// });

// socket.on('userdata', (data) => {
//   userNameDisplay.textContent = data.username;
//   avatarLetter.textContent = data.username.charAt(0).toUpperCase();
//   const colors = generateAvatarColor(data.username);
//   userAvatar.style.background = `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
//   userData = data;
// })

// socket.on("message", (data) => {
//   let isOwn = data.user === userData.username;
//   addMessage(data.message, data.user, isOwn);
// });

messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    messageForm.dispatchEvent(new Event('submit'));
  }
});

let profilelink

// async function loaduserdata() {
//   const response = await fetch('/api/profile/:id', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       credentials: "include",
//       body: JSON.stringify({
//       })
//   });

//   const data = await response.json()

//   if (data) {
//     profilelink = data.userid
//   }
// }

// loaduserdata()

const tabProfile = document.querySelector('.tabprofile');
const tabHiry = document.querySelector('.tabhiry');

tabProfile.addEventListener('click', (event) => {
  event.preventDefault();

  if (profilelink) {
    window.location.href = '/profile/';
  }

})

tabHiry.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '/hiry';
})


// Focus input on load
messageInput.focus();
