import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
  //Para almacenar el valor del paciente que se ha seleccionado y poder editarlo o eliminarlo
  const [paciente, setPaciente] = useState({});
  //Funcion que toma como paremtro un id del paciente que se va a eliminar
  const eliminarPaciente = (id) => {
    const pacientesAcutalizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesAcutalizados);
  };


  useEffect(()=>{

    localStorage.setItem("pacientes", JSON.stringify(pacientes))

  },[pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  );
}

export default App;
