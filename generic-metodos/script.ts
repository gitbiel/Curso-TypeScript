// Define que o retorno será um HTMLAnchorElement
const LInk = document.querySelector<HTMLAnchorElement>('.link');
LInk?.href;

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
}

async function Data() {
  const notebook = await getData<Notebook>(
    'https://api.origamid.dev/json/notebook.json',
  );
  console.log(notebook.nome);
}
