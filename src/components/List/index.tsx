import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

const List = ({ tarefas, selecionarTarefa }: Props) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionarTarefa={selecionarTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
