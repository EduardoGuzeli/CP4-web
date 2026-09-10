import TaskItem from "../taskItem/TaskItem";
import EmptyState from "../emptyState/EmptyState";

// Componente TaskList: recebe a lista de tarefas já filtrada (vinda do App)
// e usa o método de array `.map()` para transformar cada tarefa em um
// componente <TaskItem />. As callbacks de concluir/remover são apenas
// repassadas adiante (padrão pai -> filho -> neto).
function TaskList({ tarefas, onToggleConcluida, onRemoveTarefa }) {
  if (tarefas.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="flex flex-col gap-3">
      {tarefas.map((tarefa) => (
        <TaskItem
          key={tarefa.id}
          tarefa={tarefa}
          onToggleConcluida={onToggleConcluida}
          onRemoveTarefa={onRemoveTarefa}
        />
      ))}
    </ul>
  );
}

export default TaskList;
