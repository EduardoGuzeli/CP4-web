// Mapeia cada nível de prioridade para as classes de cor do badge
const CORES_PRIORIDADE = {
  Alta: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  Média: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Baixa: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

// Componente TaskItem: representa uma única tarefa na lista.
// É um componente "filho" que recebe a tarefa e as callbacks de ação
// (concluir/remover) via props, e apenas dispara essas callbacks quando
// o usuário interage — quem realmente altera o estado é o componente App.
function TaskItem({ tarefa, onToggleConcluida, onRemoveTarefa }) {
  const corBadge = CORES_PRIORIDADE[tarefa.prioridade] ?? CORES_PRIORIDADE.Média;

  return (
    <li >
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => onToggleConcluida(tarefa.id)}
       
      />

      <div>
        <div>
          <h3>
            {tarefa.nome}
          </h3>
          <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${corBadge}`}>
            {tarefa.prioridade}
          </span>
        </div>

        {tarefa.descricao && (
          <p>{tarefa.descricao}</p>
        )}

        {tarefa.data && (
          <p>
            📅 {new Date(tarefa.data + "T00:00:00").toLocaleDateString("pt-BR")}
          </p>
        )}
      </div>

      <button
        onClick={() => onRemoveTarefa(tarefa.id)}
       aria-label="Remover tarefa"
      >
        Remover
      </button>
    </li>
  );
}

export default TaskItem;
