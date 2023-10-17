// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

async function FetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  ShowCourses(json);
}
FetchCursos();

interface Course {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>;
  idAulas: Array<number>;
  nivel: "iniciante" | "avancado";
}

function isCourse(value: unknown): value is Course {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  ) {
    return true;
  } else {
    return false;
  }
}

function ShowCourses(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCourse).forEach((item) => {
      document.body.innerHTML += `
      <p>${item.nome}</p>
      <p>${item.horas}</p>
      <p>${item.tags}</p>
      `;
    });
  }
}
