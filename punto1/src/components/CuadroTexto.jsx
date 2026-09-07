const CuadroTexto = (props) => {
    
  return (
    <input
      type={props.tipo}
      id={props.id}
      placeholder={props.texto}
      className="form-control"
    />
  )
}

export default CuadroTexto