import { useState } from "react";

// Componente TaskForm: formulário de cadastro de uma nova tarefa.
// Mantém o estado dos campos do formulário localmente (useState) e,
// ao ser enviado, repassa a nova tarefa para o componente pai (App)
// através da callback "onAddTask" recebida por props.
function TaskForm({ onAddTask }) {
  // Estado local com os dados do formulário
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("Média");

  function handleSubmit(event) {
    event.preventDefault();

    // Validação simples: nome é obrigatório
    if (!nome.trim()) return;

    // Monta o objeto da tarefa e envia para o componente pai via callback
    onAddTask({
      id: Date.now(), // id único simples baseado no timestamp
      nome: nome.trim(),
      data,
      descricao: descricao.trim(),
      prioridade,
      concluida: false,
    });

    // Limpa o formulário após o cadastro
    setNome("");
    setData("");
    setDescricao("");
    setPrioridade("Média");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg sm:grid-cols-2"
    >
      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium text-slate-300" >
          Nome da tarefa
        </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: Corrigir bug no login"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div>
        <label  className="mb-1 block text-sm font-medium text-slate-300">
          Data
        </label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 outline-none focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-300">
          Prioridade
        </label>
        <select
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 outline-none focus:border-indigo-500"
        >
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium text-slate-300">
          Descrição
        </label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Detalhes da tarefa..."
          rows={3}
          className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 outline-none focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="sm:col-span-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-500">
        Adicionar tarefa
      </button>
    </form>
  );
}

export default TaskForm;
