const invioPromemoria = function (e) {
  e.preventDefault();
  const testoInput = document.getElementById("promemoria").value;
  const contenitoreLista = document.getElementById("lista-contenitore");
  console.log("Promemoria salvato ", contenitoreLista);
  alert("Promemoria salvato");

  const aggiungiToDo = document.createElement("article");
  aggiungiToDo.classList.add("todo-list");

  aggiungiToDo.innerHTML = `
<p>${testoInput}</p>
<button onclick="spuntaFatto(event)">Fatto ✅</button>
<button onclick="elimina (event)">Elimina 🗑️</button>
`;
  contenitoreLista.appendChild(aggiungiToDo);
  form.reset();
};

const elimina = function (e) {
  const button = e.target;
  const rimuoviTesto = button.parentElement;
  rimuoviTesto.remove();
};

const spuntaFatto = function (e) {
  const button = e.target;
  const sbarraTesto = button.parentElement;
  sbarraTesto.style.textDecoration = "line-through";
  sbarraTesto.style.opacity = "0.5";
};

const form = document.getElementById("form");
form.addEventListener("submit", invioPromemoria);
