import { useEffect, useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

const Stopwatch = ({ selecionado, finalizarTarefa }: Props) => {
  const [tempo, setTempo] = useState<number>();
  const [emExecucao, setEmExecucao] = useState(false);

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
      setEmExecucao(false);
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    if (contador <= 0) {
      setEmExecucao(false);
      finalizarTarefa();
      return;
    }
    setEmExecucao(true);
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      setEmExecucao(false);
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button
        disabled={emExecucao || !selecionado || tempo === 0}
        onClick={() => {
          regressiva(tempo);
        }}
      >
        {emExecucao ? "Focando..." : "Começar!"}
      </Button>
    </div>
  );
};

export default Stopwatch;
