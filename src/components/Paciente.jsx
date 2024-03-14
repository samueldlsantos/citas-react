import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const handleEditar = () => {
    setPaciente(paciente);
  };

  const handleEliminar = () => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      customClass: {
        footer:"flex justify-content-between",
        confirmButton: "py-2 px-5 mr-10 bg-red-600 rounded-lg uppercase font-bold text-white hover:bg-red-700 cursor-pointer",
        cancelButton: "py-2 px-5 ml-10 bg-indigo-600 rounded-lg uppercase font-bold text-white hover:bg-indigo-700 cursor-pointer"
      },
      buttonsStyling: false,
      title: <p className='font-bold text-center'>Estas seguro de eliminar al paciente</p>,
      text: "No seras capaz de revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: <p className='font-bold text-center'>Si, eliminar!</p>,
      cancelButtonText: "Cancelar",
    }).then((result) => {
      // return MySwal.fire(<p>Shorthand works too</p>)
      if (result.isConfirmed) {
        eliminarPaciente(paciente.id)
        // return MySwal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      } 
    })
  }
  return (
    <>
      <div className="mx-5 my-4 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre:{" "}
          <span className="font-normal normal-case">{paciente.mascota}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario:{" "}
          <span className="font-normal normal-case">
            {paciente.propietario}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:{" "}
          <span className="font-normal normal-case">{paciente.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha alta:{" "}
          <span className="font-normal normal-case">{paciente.fechaAlta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas:{" "}
          <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>
        <div className="flex justify-between mt-5">
          <button
            className="py-2 px-5 bg-indigo-600 rounded-lg uppercase font-bold text-white hover:bg-indigo-700 cursor-pointer"
            type="button"
            onClick={handleEditar}
          >
            Editar
          </button>
          <button
            className="py-2 px-5 bg-red-600 rounded-lg uppercase font-bold text-white hover:bg-red-700 cursor-pointer"
            type="button"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default Paciente;
