let main = document.querySelector('main');
let video = document.querySelector('video');
let paused = false;
let ms = 0;
function timeout(ms) {
    return new Promise((resolver , rechazar) => {
        resolver(setTimeout(function(){
            Notification.requestPermission()
                .then((resp) => {
                    new Notification('¡Holi!', {
                        body: 'Bienvenido/a/e',
                        icon: 'weblogo.jpg',
                        
                    });
                })
        }, 5000));
    }
)};
timeout();
console.log('hola');
video.addEventListener('onclick', (ev) => {
    if(paused == true) {
        video.pause();
        console.log(`${video.currentTime}`);
    } else {
        video.playo;
    }
})
video.addEventListener('oncontextmenu', (ev) => {
    let p = document.createElement('p');
    p.textContent = (`${video.currentTime}`);
    document.body.appendChild(p);
})