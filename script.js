const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dia = document.getElementById('diaAtual');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let minute = dateToday.getMinutes();
    let second = dateToday.getSeconds();

    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;

    horas.textContent = hour;
    minutos.textContent = minute;
    segundos.textContent = second;
    dia.textContent = formatarData(dateToday); // Usar a função formatarData para obter a data formatada
}, 1000);

const tema = document.getElementById('theme');
const body = document.body;

tema.onclick = function() {
    body.classList.toggle('dark');
}

// Função para obter a data formatada
function formatarData(data) {
    const diasDaSemana = [
        'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'
    ];

    const diaDaSemana = diasDaSemana[data.getDay()];
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês é 0-indexado
    const ano = data.getFullYear();
    
    return `${diaDaSemana} ${dia}/${mes}/${ano}`;
}
