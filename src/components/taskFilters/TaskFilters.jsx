// Componente TaskFilters: botões para alternar entre os filtros de visualização
// (Todas, Pendentes, Concluídas). O estado do filtro ativo é controlado pelo
// componente pai (App) e recebido aqui via props, junto com a callback
// "onChangeFilter" que atualiza esse estado.
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
