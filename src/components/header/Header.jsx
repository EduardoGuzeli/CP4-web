// Componente Header: cabeçalho da aplicação.
// Recebe via props a quantidade total de tarefas e a quantidade já concluídas,
// para exibir um pequeno resumo de progresso ao usuário.
function Header({ total, concluidas }) {
  return (
    <header >
      <div>
        <p>
          Organização para devs
        </p>
        <h1>
          DevTasks
        </h1>
        <p>
          Gerencie as tarefas do seu dia a dia como programador.
        </p>

        {total > 0 && (
          <p>
            {concluidas} de {total} tarefas concluídas
          </p>
        )}
      </div>
    </header>
  );
}

export default Header;
