
const OPCOES = [
  { valor: "todas", rotulo: "Todas" },
  { valor: "pendentes", rotulo: "Pendentes" },
  { valor: "concluidas", rotulo: "Concluídas" },
];

function TaskFilters({ filtroAtivo, onChangeFilter }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {OPCOES.map((opcao) => (
        <button
          key={opcao.valor}
          onClick={() => onChangeFilter(opcao.valor)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            filtroAtivo === opcao.valor
              ? "bg-blue-700 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          {opcao.rotulo}
        </button>
      ))}
    </div>
  );
}

export default TaskFilters;
