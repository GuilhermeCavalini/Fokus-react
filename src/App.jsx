import styles from "./App.module.css";

import Cabecalho from "./components/Cabecalho";
import Cronometro from "./components/Cronometro";
import AppTarefas from "./components/AppTarefas";
import Rodape from "./components/Rodape";
import TarefasProvider from "./context/TarefasContext";
function App() {
  const modoCronometro = {
    id: "foco",
    nome: "Foco",
    frase: ["Otimize sua produtividade,", "mergulhe no que importa."],
    tempoInicialEmSegundos: 30,
  };
 
  return (
    <div className={styles[`app--${modoCronometro.id}`]}>
      <Cabecalho />
      <main>
        <Cronometro />
        <TarefasProvider >
            <AppTarefas />
        </TarefasProvider >
      </main>
      <Rodape />
    </div>
  );
}

export default App;
