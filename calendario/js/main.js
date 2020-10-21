const date = new Date();

let month = date.getMonth();

if (month == 0) {
  document.getElementById("mes").innerHTML = "Janeiro";
} else if (month == 1) {
  document.getElementById("mes").innerHTML = "Fevereiro";
} else if (month == 2) {
  document.getElementById("mes").innerHTML = "Março";
} else if (month == 3) {
  document.getElementById("mes").innerHTML = "Abril";
} else if (month == 4) {
  document.getElementById("mes").innerHTML = "Maio";
} else if (month == 5) {
  document.getElementById("mes").innerHTML = "Junho";
} else if (month == 6) {
  document.getElementById("mes").innerHTML = "Julho";
} else if (month == 7) {
  document.getElementById("mes").innerHTML = "Agosto";
} else if (month == 8) {
  document.getElementById("mes").innerHTML = "Setembro";
} else if (month == 9) {
  document.getElementById("mes").innerHTML = "Outubro";
} else if (month == 10) {
  document.getElementById("mes").innerHTML = "Novembro";
} else if (month == 11) {
  document.getElementById("mes").innerHTML = "Dezembro";
}

let weekDay = date.getDay();

if (weekDay == 0) {
  document.getElementById("dia-semana").innerHTML = "Domingo";
} else if (weekDay == 1) {
  document.getElementById("dia-semana").innerHTML = "Segunda-Feira";
} else if (weekDay == 2) {
  document.getElementById("dia-semana").innerHTML = "Terça-Feira";
} else if (weekDay == 3) {
  document.getElementById("dia-semana").innerHTML = "Quarta-Feira";
} else if (weekDay == 4) {
  document.getElementById("dia-semana").innerHTML = "Quinta-Feira";
} else if (weekDay == 5) {
  document.getElementById("dia-semana").innerHTML = "Sexta-Feira";
} else if (weekDay == 6) {
  document.getElementById("dia-semana").innerHTML = "Sábado";
}

let day = (document.getElementById("dia").innerHTML = date.getDate());

let year = (document.getElementById("ano").innerHTML = date.getFullYear());

const interval = setInterval(() => {
  const schedule = new Date();
  const now = schedule.toLocaleTimeString("pt-BR", { hour12: true });

  document.getElementById("horario").innerHTML = now;
}, 1000);
