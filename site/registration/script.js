async function registerUser(nickname, password) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                username: nickname,
                password: password
            })
        });

        const data = await response.json();

        if (data.success) {
            console.log('Client: Registration successful');
            window.location.href = `/profile/${data.userId}`
        } else {
            console.error('Client: Registration failed:', data);
        }

    } catch (error) {
        console.error('Client: Error during registration:', error);
    }
}

async function checktoken () {
  const result = await fetch('/api/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: "include",
    body: JSON.stringify({})
  })

  const data = await result.json()
  console.log(data)
  if (data.success) {
    window.location.href = `/profile/${data.userid}`
    console.log(data.userid)
  }
}

checktoken()

window.addEventListener('load', function () {
    const button = document.querySelector('.button-register')
    const username = document.querySelector('.label-text')
    const password = document.querySelector('.label-password')

    let isvalidname = false
    let isvalidpassword = false

    button.addEventListener('click', function (event) {
        event.preventDefault()
        registerUser(username.value, password.value)
    });
});
