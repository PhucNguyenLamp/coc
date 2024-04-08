// const socket = io();

// const myform = document.querySelector('#myform')
// //update on keypressed
// myform.addEventListener('keypress', e => {
//     // e.preventDefault()
//     const message = myform.querySelector('#input').value
//     console.log(message)
//     socket.emit('chat-message', message)
// })
// socket.on('connect', (data) => {
//     console.log('connected')
//     console.log(data)
// })
// socket.on('chat-message', data => {
//     // select the form data and change it to text message
//     var newdata = myform.elements['data'];
//     newdata.value = data;
//     console.log(data);
// })