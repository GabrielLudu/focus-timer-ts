import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
  deletarTarefa: (id: string) => void;
}

const List = ({ tarefas, selecionarTarefa, deletarTarefa }: Props) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      {tarefas.length === 0 ? (
        <p className={style.semTarefas}>Nenhuma tarefa no momento. Adicione uma meta acima para focar!</p>
      ) : (
        <ul>
          {tarefas.map((item) => (
            <Item
              selecionarTarefa={selecionarTarefa}
              deletarTarefa={deletarTarefa}
              key={item.id}
              {...item}
            />
          ))}
        </ul>
      )}
    </aside>
  );
};

export default List;
