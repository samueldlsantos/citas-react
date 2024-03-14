import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [errorFormulario, setErrorFormulario] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFechaAlta(paciente.fechaAlta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([mascota, propietario, email, fechaAlta, sintomas].includes("")) {
      setErrorFormulario(true);
      return;
    }

    setErrorFormulario(false);

    var pacienteObj = {
      mascota,
      propietario,
      email,
      fechaAlta,
      sintomas,
    };

    if (paciente.id) {
      //Significa que se esta editando la informacion

      pacienteObj.id = paciente.id;
      const pacientesActualizados = pacientes.map((paciente) => {
        return paciente.id == pacienteObj.id ? pacienteObj : paciente;
      });
      setPacientes([...pacientesActualizados]);
      setPaciente({});
    } else {
      pacienteObj.id = generarId();
      setPacientes([...pacientes, pacienteObj]);
    }

    //Reseteando el formulario
    setMascota("");
    setPropietario("");
    setEmail("");
    setFechaAlta("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-10 mx-5"
        onSubmit={handleSubmit}
      >
        {errorFormulario && (
          <Error mensaje="Todos los campos son obligatorios" />
        )}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota:
          </label>
          <input
            id="mascota"
            className="border-2 rounded-lg px-5 py-1 w-full mt-2 placeholder-gray-400"
            type="text"
            placeholder="nombre de la mascota"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Propiertario:
          </label>
          <input
            id="propietario"
            className="border-2 rounded-lg px-5 py-1 w-full mt-2 placeholder-gray-400"
            type="text"
            placeholder="nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Correo:
          </label>
          <input
            id="email"
            className="border-2 rounded-lg px-5 py-1 w-full mt-2 placeholder-gray-400"
            type="email"
            placeholder="email contacto propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta:
          </label>
          <input
            id="alta"
            className="border-2 rounded-lg px-5 py-1 w-full mt-2 placeholder-gray-400"
            type="date"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas:
          </label>
          <textarea
            id="sintomas"
            className="border-2 rounded-lg px-5 py-1 w-full mt-2 placeholder-gray-400"
            placeholder="Escribe los sintomas de la mascota"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full text-white font-bold rounded-md p-3 uppercase hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
