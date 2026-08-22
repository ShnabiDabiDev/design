const copyBtn = document.getElementById('copyId');
const userIdEl = document.getElementById('userId');
const nickEl = document.getElementById('nick');
const name1 = document.querySelector('.name1')
const name2 = document.querySelector('.name2')
const chatLink = document.querySelector('.nav-item[href="/chat"]');
const videoLink = document.querySelector('.nav-item[href="/videos"]');
const overlay = document.querySelector('.page-overlay');
const app = document.querySelector('.app');

// const defaultUser = { id: 'user_0001', nick: 'Гость' };

// userIdEl.textContent = defaultUser.id;
// nickEl.textContent = defaultUser.nick;

async function loaduserdata () {
    const response = await fetch("https://backend2-production-046d.up.railway.app/api/profile", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({getdata: 'get'})
    });

    const data = await response.json()
    
    if (!data) {
        return
    } else {
        console.log(data)
    }
}

loaduserdata()

const navigateWithAnimation = (link, targetHref) => {
    if (!link) return;

    const goTo = (event) => {
        if (event) event.preventDefault();
        document.body.classList.add('is-transitioning');
        link.classList.add('is-pressed');
        overlay.classList.add('show');
        app.classList.add('is-exiting');
        setTimeout(() => {
            window.location.href = targetHref;
        }, 260);
    };

    link.addEventListener('click', goTo);
    link.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            goTo(event);
        }
    });
};

navigateWithAnimation(chatLink, '/chat');
navigateWithAnimation(videoLink, '/hiry');

copyBtn.addEventListener('click', async () => {
	const text = userIdEl.textContent.trim();
	try {
		await navigator.clipboard.writeText(text);
		
		const prev = copyBtn.textContent;
		copyBtn.textContent = 'Скопировано!';
		copyBtn.animate([{transform:'scale(1)'},{transform:'scale(1.06)'},{transform:'scale(1)'}],{duration:420,easing:'cubic-bezier(.2,.9,.3,1)'});
		setTimeout(()=> copyBtn.textContent = prev,1300);
	} catch (err) {
		// fallback
		const inp = document.createElement('input');
		inp.value = text; document.body.appendChild(inp); inp.select(); document.execCommand('copy'); inp.remove();
		copyBtn.textContent = 'Скопировано!';
		setTimeout(()=> copyBtn.textContent = 'Копировать',1200);
	}
});
