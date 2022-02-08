const APP_URL = "http://jsonplaceholder.typicode.com";

 const xhr = new XMLHttpRequest();

 function onRequestHandler(){
     if(this.readyState === 4 && this.status === 200)
     // 0 => UNSET no llamamos al metodo open.   
     // 1 => OPENED, se ah llamado al metodo open.
     // 2 => Headers_receiver, se esta llamando al metodo send().
     // 3 => Loading, se esta cargando la rpsuesta
     // 4 => done. hecho.
     var data = JSON.parse(this.response);
     const HTMLResponse = document.querySelector(`#app`)
     const tpl = data.map(user => `<li>${user.name} / ${user.email}<li>`)
     HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
     console.log(data);
 }

 xhr.addEventListener("load", onRequestHandler);
 xhr.open("GET", `${APP_URL}/users`);
xhr.send()



const APP_URL1 = "http://jsonplaceholder.typicode.com";
const HTMLResponse = document.querySelector(`#app1`)

fetch(`${APP_URL}/users`)
.then((response)=> response.json())
.then((users) => {
    const tpl = users.map((user) => `<li>${user.name} / ${user.email}<li>`)
    HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
})
