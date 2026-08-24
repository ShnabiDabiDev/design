let userid
let username

// async function likebutton() {
//     const result = await fetch('/api/like', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: 'include',
//         body: JSON.stringify({})
//     });
//     const data = await result.json();

//     if (data.success) {
//     } else {
//         console.error('Failed to like the item:', data.message);
//     }
// }

// likebutton();

const headerUploadBtn = document.getElementById('headerUploadBtn');
const profileButton = document.querySelector('.profile-button');
const chatButton = document.querySelector('.chat-button');
const profileName = document.querySelector('.profile-text strong');
const profileHandle = document.querySelector('.profile-text span');
const mainGrid = document.getElementById('mainGrid');
const chatbtn = document.querySelector('.chat-button');
const profilebtn = document.querySelector('.profile-button');

// const socket = io();

const imageSources = [
    './images/Fly_close.jpg',
    './images/istockphoto-2164885237-612x612.jpg',
    './images/butterfly-flying-icon-in-trendy-glyph-style-isolated-on-soft-blue-background-free-vector.jpg'
];


// async function getjwt() {
//     const result = await fetch('/api/getjwt', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: 'include',
//         body: JSON.stringify({})
//     });
//     const data = await result.json();

//     if (data.success) {
//         userid = data.userid
//         username = data.username
//         profileName.textContent = data.username;
//         profileHandle.textContent = `@${data.username}`;
//     } else {
//         window.location.href = '/registration';
//         console.error('Failed to get JWT:', data.message);
//     }
// }

// async function saveHiry(hiry) {
//     const result = await fetch('/api/savehiry', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: 'include',
//         body: JSON.stringify({userid: userid, username: username, imagetype: hiry})
//     });
//     const data = await result.json();

//     if (data.success) {
//         console.log(data)
//     } else {
//         console.log('fail to save hiry')
//     }
// }

// getjwt();

// socket.on('connect', () => {
//     console.log('Connected to server');
// });

// async function getAllGridCard(imageSrc) {
    
//     socket.emit('getidhiry')

//     socket.on('getidhiry', (hirys) => {
//         hirys.hirys.forEach(hiry => {
//             const card = document.createElement('div');
//             card.className = 'grid-card--small';
//             card.style.backgroundImage = `url('${hiry.image}')`;

//             mainGrid.appendChild(card);
//             card.addEventListener('click', () => {
//                 window.location.href = `/watch/${hiry.id}`;
//             })
//         })
//     });
// }

// async function addGridCard (ImageSource) {
//     const card = document.createElement('div');
//     card.className = 'grid-card--small';
//     card.style.backgroundImage = `url('${ImageSource}')`;

//     mainGrid.appendChild(card);

//     socket.emit('savehiry', {
//         imagetype: ImageSource
//     })

//     socket.on('savehiryresult', (data) => {
//         card.addEventListener('click', () => {
//             window.location.href = `/watch/${data.id}`;
//         })
//     })
// }

headerUploadBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    const imageSrc = imageSources[randomIndex];

    // socket.emit('hiryinstance', imageSrc);
});

chatButton.addEventListener('click', () => {
    window.location.href = '/chat';
})

profileButton.addEventListener('click', () => {
    window.location.href = '/profile';
})

// socket.on('gethiry', (data) => {
//     getAllGridCard()
// });

// socket.on('image', (data) => {
//     addGridCard(data.image);
//     // saveHiry(data.image)
// });