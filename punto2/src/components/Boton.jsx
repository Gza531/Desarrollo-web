const Boton=(props)=>{
  
  return (
    <button
      type="submit"
      className="btn btn-primary"
    >
      {props.texto}
    </button>
  )
};
export default Boton;