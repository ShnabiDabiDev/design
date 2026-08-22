function fileindicatorUpdate () {
    var userfile = document.querySelector('.span-file-settings2')
    var userfilestorage = document.querySelectorAll('.file1')
    userfile.textContent =  userfilestorage.length + '/50'
}

function createFile_handler (id, tag, username) {
    const file = document.createElement('div');
    file.className = 'file1';

    const manipulate = document.createElement('div');
    manipulate.className = 'userfile-manipulate';

    const handshakeImg = document.createElement('img');
    handshakeImg.className = 'handshake-image';
    handshakeImg.src = '/images/cooperative-handshak.svg';
    handshakeImg.alt = '';

    const deleteImg = document.createElement('img');
    deleteImg.className = 'delete-image';
    deleteImg.src = '/images/delete-five.svg';
    deleteImg.alt = '';

    manipulate.append(handshakeImg, deleteImg);

    const fileInfo = document.createElement('div');
    fileInfo.className = 'file-info';

    const folderImg = document.createElement('img');
    folderImg.className = 'fileinfo-folder';
    folderImg.src = '/images/folder.svg';
    folderImg.alt = '';

    const fileIdSpan = document.createElement('span');
    fileIdSpan.className = 'file-id';
    fileIdSpan.textContent = `id:${id}`;

    fileInfo.append(folderImg, fileIdSpan);

    // Блок с тегом и именем пользователя
    const fileInfo2 = document.createElement('div');
    fileInfo2.className = 'file-info2';

    const tagDiv = document.createElement('div');
    tagDiv.className = 'fileinfo-tag';

    const plusImg = document.createElement('img');
    plusImg.src = '/images/plus55.svg';
    plusImg.alt = '';

    const tagSpan = document.createElement('span');
    tagSpan.textContent = tag;

    tagDiv.append(plusImg, tagSpan);

    const usernameDiv = document.createElement('div');
    usernameDiv.className = 'fileinfo-username';

    const usernameSpan = document.createElement('span');
    usernameSpan.textContent = username;

    usernameDiv.append(usernameSpan);

    fileInfo2.append(tagDiv, usernameDiv);

    file.append(manipulate, fileInfo, fileInfo2);
    return file;
}

function backgroundEffect () {

    setTimeout(() => {
        const container = document.querySelector('.drop-conteiner')
        const effect = document.createElement('div')
        container.append(effect)
        effect.className = 'background-animation4'
        effect.style.transition = 'transform 3s ease-in, opacity 3s ease-in'
        const circleSize = 50;

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        const randomX = Math.random() * (containerWidth - circleSize);
        const randomY = Math.random() * (containerHeight - circleSize);

        effect.style.position = 'absolute';
        effect.style.left = randomX + 'px';
        effect.style.top = randomY + 'px';

        effect.style.opacity = '0.05'

        setTimeout(() => {
            effect.style.opacity = '0'

            const random = Math.random()
            if (random > 0.45) {
                effect.style.transform = 'scale(5) translateY(20px)'
            } else {
               effect.style.transform = 'scale(5) translateY(-20px)'
            }

        }, 1);

    }, 1000);

    setTimeout(() => {
        backgroundEffect()
    }, 4000);
}

function backgroundEffect2 () {

    setTimeout(() => {
        const container = document.querySelector('.drop-conteiner')
        const effect = document.createElement('div')
        container.append(effect)
        effect.className = 'background-animation4'
        effect.style.transition = 'transform 3s ease-in, opacity 3s ease-in'
        const circleSize = 50;

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        
        const randomX = Math.random() * (containerWidth - circleSize);
        const randomY = Math.random() * (containerHeight - circleSize);

        effect.style.position = 'absolute';
        effect.style.left = randomX + 'px';
        effect.style.top = randomY + 'px';

        effect.style.opacity = '0.05'

        setTimeout(() => {
            effect.style.opacity = '0'

            const random = Math.random()
            if (random > 0.45) {
                effect.style.transform = 'scale(5) translateY(20px) translateX(-20px)'
            } else {
               effect.style.transform = 'scale(5) translateY(-20px) translateX(20px)'
            }

        }, 1);

    }, 1000);

    setTimeout(() => {
        backgroundEffect2()
    }, 5000);
}

function backgroundEffect3 () {

    setTimeout(() => {
        const container = document.querySelector('.drop-conteiner')
        const effect = document.createElement('div')
        container.append(effect)
        effect.className = 'background-animation4'
        effect.style.transition = 'transform 3s ease-in, opacity 3s ease-in'
        const circleSize = 50;

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        
        const randomX = Math.random() * (containerWidth - circleSize);
        const randomY = Math.random() * (containerHeight - circleSize);

        effect.style.position = 'absolute';
        effect.style.left = randomX + 'px';
        effect.style.top = randomY + 'px';

        effect.style.opacity = '0.05'

        setTimeout(() => {
            effect.style.opacity = '0'

            const random = Math.random()
            if (random > 0.45) {
                effect.style.transform = 'scale(5) translateY(20px) translateX(-20px)'
            } else {
               effect.style.transform = 'scale(5) translateY(-20px) translateX(20px)'
            }

        }, 1);

    }, 1000);

    setTimeout(() => {
        backgroundEffect3()
    }, 6000);
}

function backgroundEffect4 () {

    setTimeout(() => {
        const container = document.querySelector('.drop-conteiner')
        const effect = document.createElement('div')
        container.append(effect)
        effect.className = 'background-animation4'
        effect.style.transition = 'transform 3s ease-in, opacity 3s ease-in'
        const circleSize = 50;

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        
        const randomX = Math.random() * (containerWidth - circleSize);
        const randomY = Math.random() * (containerHeight - circleSize);

        effect.style.position = 'absolute';
        effect.style.left = randomX + 'px';
        effect.style.top = randomY + 'px';

        effect.style.opacity = '0.05'

        setTimeout(() => {
            effect.style.opacity = '0'

            const random = Math.random()
            if (random > 0.45) {
                effect.style.transform = 'scale(5) translateY(20px) translateX(-20px)'
            } else {
               effect.style.transform = 'scale(5) translateY(-20px) translateX(20px)'
            }

        }, 1);

    }, 1000);

    setTimeout(() => {
        backgroundEffect4()
    }, 7000);
}

function backgroundEffect5 () {

    setTimeout(() => {
        const container = document.querySelector('.drop-conteiner')
        const effect = document.createElement('div')
        container.append(effect)
        effect.className = 'background-animation4'
        effect.style.transition = 'transform 3s ease-in, opacity 3s ease-in'
        const circleSize = 50;

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        
        const randomX = Math.random() * (containerWidth - circleSize);
        const randomY = Math.random() * (containerHeight - circleSize);

        effect.style.position = 'absolute';
        effect.style.left = randomX + 'px';
        effect.style.top = randomY + 'px';

        effect.style.opacity = '0.05'

        setTimeout(() => {
            effect.style.opacity = '0'

            const random = Math.random()
            if (random > 0.45) {
                effect.style.transform = 'scale(5) translateY(20px) translateX(-20px)'
            } else {
               effect.style.transform = 'scale(5) translateY(-20px) translateX(20px)'
            }

        }, 1);

    }, 1000);

    setTimeout(() => {
        backgroundEffect5()
    }, 8000);
}

window.addEventListener('load', function() {
    const container = document.querySelector('.user-files'); // ваш контейнер для файлов
    backgroundEffect()
    setTimeout(() => {
        backgroundEffect2()
    }, 1000);

    setTimeout(() => {
        backgroundEffect3()
    }, 2000);

    setTimeout(() => {
        backgroundEffect4()
    }, 3000);

    setTimeout(() => {
        backgroundEffect5()
    }, 4000);

    const newFile = createFile_handler('1112356123', 'tag', 'gondon');
    container.appendChild(newFile);
    // async function data () {
    //     try {
    //         const response = await fetch('/api/hello');
    //         if (!response.ok) {
    //             console.log('Ошибка HTTP: ' + response.status);
    //         }
    //         const data = await response.json();
    //         console.log('Data received:', data);

    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }
    // data()

    // fileindicatorUpdate()
});

