"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        if (curso.nivel === "iniciante") {
        }
        document.body.innerHTML += `
    <div>
      <h2>${curso.nome}</h2>
      <p>Horas ${curso.horas}</p>
      <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
      <p>Tags ${curso.tags.join(", ")}</p>
      <p>Aulas: ${curso.idAulas.join(" | ")}</p>
      <p>Nível do curso ${curso.nivel}</p>
      </div>
    `;
    });
}
