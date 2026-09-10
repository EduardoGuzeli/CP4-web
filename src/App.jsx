import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import TaskForm from "./components/taskForm/TaskForm";
import TaskFilters from "./components/taskFilters/TaskFilters";
import TaskList from "./components/taskList/TaskList";
import Footer from "./components/footer/Footer";

// Chave usada para salvar/ler as tarefas no localStorage do navegador
const STORAGE_KEY = "devtasks_tarefas";

function App() {
  // useState: guarda a lista de tarefas em memória.
  // O valor inicial é uma função (lazy initializer) que já tenta
  // recuperar as tarefas salvas anteriormente no localStorage.
  const [tarefas, setTarefas] = useState(() => {
    const salvas = localStorage.getItem(STORAGE_KEY);
    return salvas ? JSON.parse(salvas) : [];
  });

  // useState: controla qual filtro está ativo ("todas", "pendentes" ou "concluidas")
  const [filtro, setFiltro] = useState("todas");

  // useEffect: toda vez que a lista de tarefas mudar, salva o novo
  // estado no localStorage, convertendo o array para uma string JSON.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
  }, [tarefas]);

  // Callback repassada ao TaskForm: adiciona uma nova tarefa ao estado.
  function adicionarTarefa(novaTarefa) {
    setTarefas((tarefasAtuais) => [novaTarefa, ...tarefasAtuais]);
  }

  // Callback repassada ao TaskList/TaskItem: alterna o status concluída/pendente.
  // Usa `.map()` para percorrer o array e retornar uma nova lista,
  // alterando apenas a tarefa cujo id corresponde ao clicado.
  function alternarConcluida(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  }

  // Callback repassada ao TaskList/TaskItem: remove uma tarefa da lista.
  // Usa `.filter()` para manter no array apenas as tarefas com id diferente
  // da que foi removida.
  function removerTarefa(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== id)
    );
  }

  // Aplica o filtro selecionado sobre a lista de tarefas antes de renderizar.
  // Também usa `.filter()`, dessa vez para decidir o que é exibido na tela.
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true; // "todas"
  });

  const totalConcluidas = tarefas.filter((t) => t.concluida).length;

  return (
    <div className="min-h-screen bg-slate-950">
      <Header total={tarefas.length} concluidas={totalConcluidas} />

      <main className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-8">
        <TaskForm onAddTask={adicionarTarefa} />

        <TaskFilters filtroAtivo={filtro} onChangeFilter={setFiltro} />

        <TaskList
          tarefas={tarefasFiltradas}
          onToggleConcluida={alternarConcluida}
          onRemoveTarefa={removerTarefa}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
