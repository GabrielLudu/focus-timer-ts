import { useState, useEffect } from "react";
import Stopwatch from "../components/Stopwatch";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import { ITarefa } from "../types/tarefa";

const STORAGE_KEY = "focus_timer_tasks";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [selecionado, setSelecionado] = useState<ITarefa>();

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
    } catch (e) {
      console.error("Erro ao salvar tarefas no localStorage", e);
    }
  }, [tarefas]);

  function selecionarTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAntigas) =>
      tarefasAntigas.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAntigas) =>
        tarefasAntigas.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }

  function deletarTarefa(id: string) {
    if (selecionado?.id === id) {
      setSelecionado(undefined);
    }
    setTarefas((tarefasAntigas) => tarefasAntigas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List
        tarefas={tarefas}
        selecionarTarefa={selecionarTarefa}
        deletarTarefa={deletarTarefa}
      />
      <Stopwatch finalizarTarefa={finalizarTarefa} selecionado={selecionado} />
    </div>
  );
}

export default App;
