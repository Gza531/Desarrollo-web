const CheckBox = (props) => {
  return (
    <div className="form-check mb-3 text-start">
      <input
        className="form-check-input"
        type="checkbox"
        id={props.id}
      />

      <label
        className="form-check-label"
        htmlFor={props.id}
      >
        {props.texto}
      </label>
    </div>
  )
}

export default CheckBox