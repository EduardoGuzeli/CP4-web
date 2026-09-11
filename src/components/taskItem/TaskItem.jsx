// Mapeia cada nível de prioridade para as classes de cor do badge
const CORES_PRIORIDADE = {
  Alta: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  Média: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Baixa: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};


function TaskItem({ tarefa, onToggleConcluida, onRemoveTarefa }) {
  const corBadge = CORES_PRIORIDADE[tarefa.prioridade] ?? CORES_PRIORIDADE.Média;

  return (
    <li className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm">
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => onToggleConcluida(tarefa.id)}
        className="mt-1.5 h-4 w-4 accent-blue-600"
      />

      <div className="min-w-0 flex-1"> 
        <div className="flex flex-wrap items-center gap-2">
          <h3 className={`font-medium ${
              tarefa.concluida ? "text-slate-500 line-through" : "text-slate-100"
            }`}>
            {tarefa.nome}
          </h3>
          <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${corBadge}`}>
            {tarefa.prioridade}
          </span>
        </div>

        {tarefa.descricao && (
          <p className="mt-1 text-sm text-slate-400">{tarefa.descricao}</p>
        )}

        {tarefa.data && (
          <p className="mt-1 text-xs text-slate-500">
            📅 {new Date(tarefa.data + "T00:00:00").toLocaleDateString("pt-BR")}
          </p>
        )}
      </div>

      <button
        onClick={() => onRemoveTarefa(tarefa.id)}
        className="shrink-0 rounded-lg px-2 py-1 text-sm text-slate-500 transition hover:bg-rose-500/10 hover:text-rose-400"
       aria-label="Remover tarefa"
      >
        Remover
      </button>
    </li>
  );
}

export default TaskItem;
