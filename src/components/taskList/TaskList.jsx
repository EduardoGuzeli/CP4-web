import TaskItem from "../taskItem/TaskItem";
import EmptyState from "../emptyState/EmptyState";


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
