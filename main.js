// Data do proximo ano novo
const newYears = '1 Jan 2023'

// Pegando os elementos
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


function countdown() {
	// Data do novo ano
	const newYearsDate = new Date(newYears);
	// retorna data e horario atual em milisegundos 
	const currentDate = new Date(); 
	// data do ano novo menos data atual, divido por mil = segundos
	const totalSeconds = (newYearsDate - currentDate) / 1000; 
	// segundos / 3600 = horas, horas divido por 24 (horas) = dias
	const days = Math.floor( (totalSeconds / 3600) / 24 );
	// segundos / 3600 = horas, horas % 24 = horas que sobram no dia
	const hours = Math.floor(totalSeconds / 3600) % 24; 
	// minutos 
	const minutes = Math.floor(totalSeconds / 60) % 60;
	// segundos = segundos que sobram em um minuto
	const seconds = Math.floor(totalSeconds % 60);

	// Modificando o HTML
	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours;
	minsEl.innerHTML = minutes;
	secondsEl.innerHTML = seconds;
}

// chamando a funcao pela primeira vez
countdown();
// chamando a funcao a cada um segundo
setInterval(countdown, 1000);