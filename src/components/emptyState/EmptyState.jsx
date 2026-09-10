// Componente simples exibido quando não há tarefas para mostrar
// (seja porque a lista está vazia, seja porque o filtro não encontrou nada).
function EmptyState() {
  return (
    <div  className="rounded-xl border border-dashed border-slate-700 p-10 text-center text-slate-500">
      Nenhuma tarefa por aqui ainda. Cadastre a primeira acima! 🚀
    </div>
  );
}

export default EmptyState;
