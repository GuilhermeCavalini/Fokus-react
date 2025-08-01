import styles from "./styles.module.css";

import BotaoModo from "./BotaoModo";
import { useContext } from "react";
import { CronometroContext } from "../../../context/CronometroContext";
import useCronometroContext from "../../../hooks/useCronometroContext";

const BotoesModos = () => {
  const { modos, modoAtual, selecionarModo } = useCronometroContext();
  return (
    <ul className={styles["cronometer-modes"]}>
      {modos.map((m) => (
        <li key={m.id}>
          <BotaoModo ativo={m.id === modoAtual.id} onClick={() => selecionarModo(m)}>
            {m.nome}
          </BotaoModo>
        </li>
      ))}
    </ul>
  );
};

export default BotoesModos;
