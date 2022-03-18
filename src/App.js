import "./App.css";
import Testimonio from "../src/components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto dicen nuestros alumnos</h1>
        <Testimonio
          nombre="EMMA"
          pais="Francia"
          imagen="ema"
          cargo="ingeniera de producto"
          texto=" MiB main.36640f37f716dce5cf75.hot-update.js 4.32 KiB 2 auxiliary assets
      cached modules 1.37 MiB [cached] 107 modulesruntime modules 28.1 KiB 13 modules
      ./src/components/Testimonio.js 2.57 KiB [built] [code generated]
      webpack 5.70.0 compiled successfully in 247 ms"/>
      <Testimonio
          nombre="JASINTA"
          pais="rusia"
          imagen="lucas"
          cargo="ingeniera facebook"
          texto=" MiB main.36640f37f716dce5cf75.hot-update.js 4.32 KiB 2 auxiliary assets
      cached modules 1.37 MiB [cached] 107 modulesruntime modules 28.1 KiB 13 modules
      ./src/components/Testimonio.js 2.57 KiB [built] [code generated]
      webpack 5.70.0 compiled successfully in 247 ms"/>
      <Testimonio
          nombre="panchito"
          pais="peru"
          imagen="dos"
          cargo="ingeniera amazon"
          texto=" MiB main.36640f37f716dce5cf75.hot-update.js 4.32 KiB 2 auxiliary assets
      cached modules 1.37 MiB [cached] 107 modulesruntime modules 28.1 KiB 13 modules
      ./src/components/Testimonio.js 2.57 KiB [built] [code generated]
      webpack 5.70.0 compiled successfully in 247 ms"/>
      </div>
    </div>
  );
}

export default App;
