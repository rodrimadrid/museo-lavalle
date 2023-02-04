const v_inicio = document.getElementById('v-inicio');
const span_sala_colonial = document.getElementById('sala-colonial');







const handlerStart = () => {
    span_sala_colonial.style = 'display: none';
    v_inicio.style = 'display: block';
    v_inicio.play();
}

const handlerFinish = (e) => {
    e.target.style = '';
    span_sala_colonial.style = '';
}


span_sala_colonial.addEventListener('click', handlerStart);
v_inicio.addEventListener('ended', handlerFinish);