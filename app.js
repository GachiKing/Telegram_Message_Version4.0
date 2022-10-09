// const TOKEN = "5768216891:AAGeiYxHU-9evhg5xJkx-5Y9w--6kkI-56g";
// const CHAT_ID = "-1001886987876";
// const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
// const success = document.getElementById('success');

// document.getElementById('tg').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     // let message = `<b>Заявка с сайта!<br>\n`;
//     // message += `<b>Отправитель: </b> ${ this.name.value }\n`
//     // message += `<b>Почта: </b> ${ this.email.value }`;

//     axios.post(URI_API, {
//         chat_id: CHAT_ID,
//         parse_mode: 'html',
//         text: 'message'
//     })
//     .then((res) => {
//         this.name.value = "";
//         this.email.value = "";
//         success.innerHTML = "Сообщения отправлено!";
//         success.style.display = "block";
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log('Конец')
//     })
// })