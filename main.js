const v_inicio = document.getElementById('v-inicio');
const spanBtns = document.querySelectorAll('span');

// const videos = {
//     colonial: './colonial.mp4',
//     independencia : './independencia.mp4',
//     exodo: './exodo.mp4',
//     gobernadores: './gobernadores.mp4',
//     religiosa: './religiosa.mp4',
//     vestidos: './vestidos.mp4',
//     guerra_civil: './guerra civil.mp4',
// }





const handlerStart = (e) => {
    let src = e.target.getAttribute('data');
    v_inicio.style = 'display: block';
    v_inicio.src = src;
    v_inicio.play();
}

const handlerFinish = (e) => {
    e.target.style = '';    
}


spanBtns.forEach(span => span.addEventListener('click', handlerStart));
v_inicio.addEventListener('ended', handlerFinish);