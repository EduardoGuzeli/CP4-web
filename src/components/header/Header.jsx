
function Header({ total, concluidas }) {
  return (
    <header className="border-b border-slate-800 bg-slate-950/25 backdrop-blur">
      <div className="mx-auto max-w-3xl px-6 py-8 text-center">
        <p  className="text-sm font-medium tracking-widest text-slate-50 uppercase">
          Organização para devs
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-50 sm:text-4xl">
          Gerenciador de Tarefas
        </h1>
        <p className="mt-2 text-slate-50">
          Gerencie as tarefas do seu dia a dia como programador.
        </p>

        {total > 0 && (
          <p className="mt-4 inline-block rounded-full bg-slate-800 px-4 py-1 text-sm text-slate-300">
            {concluidas} de {total} tarefas concluídas
          </p>
        )}
      </div>
    </header>
  );
}

export default Header;
