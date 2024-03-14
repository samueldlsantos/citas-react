import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/58 md:h-screen overflow-y-scroll">
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl text-center mt-5 mb-10">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
          {
            //forEach no regresa ningun dato, solo itera, por eso no funcionaba cuando lo pusimos asi
            pacientes.map((paciente) => {
              //Se necesita un key unico en TODAS las listas que repitan componentes
              return (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              );
            })
          }
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl text-center mt-5 mb-10">
            Comienza agregado{" "}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
