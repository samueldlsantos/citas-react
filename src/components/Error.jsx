const Error = ({mensaje}) => {
    return (
        <div className="mb-5 p-5 bg-red-600 rounded-2xl">
            <p className="text-white font-black uppercase text-center">
              {mensaje}
            </p>
          </div>
    )
}

export default Error