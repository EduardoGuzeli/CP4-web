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
    >
      <div>
        <label >
          Nome da tarefa
        </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: Corrigir bug no login"
          required
        />
      </div>

      <div>
        <label>
          Data
        </label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          
        />
      </div>

      <div>
        <label>
          Prioridade
        </label>
        <select
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}

        >
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      <div >
        <label>
          Descrição
        </label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Detalhes da tarefa..."
          rows={3}
          
        />
      </div>

      <button
        type="submit">
        Adicionar tarefa
      </button>
    </form>
  );
}

export default TaskForm;
