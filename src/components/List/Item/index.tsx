import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
  deletarTarefa: (id: string) => void;
}

const Item = ({ tarefa, tempo, selecionado, completado, id, selecionarTarefa, deletarTarefa }: Props) => {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        completado ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completado && selecionarTarefa({ tarefa, tempo, selecionado, completado, id })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label="tarefa concluida"></span>}
      <button
        type="button"
        className={style.botaoDeletar}
        aria-label="Deletar tarefa"
        onClick={(e) => {
          e.stopPropagation();
          deletarTarefa(id);
        }}
      >
        &times;
      </button>
    </li>
  );
};

export default Item;
