import Boton from "./Boton"
import CuadroTexto from "./CuadroTexto"
import Encabezado from "./Encabezado"

const CambioContrasena = () => {
  return (
    <>
    <div className="container mt-5">
    <div className="card p-4 mx-auto" style={{ maxWidth: "500px" }}>
      <form>

        <div>
          <Encabezado texto="Cambiar contraseña" />
        </div>

        <div className="mb-3">
          <label
            htmlFor="contrasenaActual"
            className="form-label"
          >
            Ingrese su contraseña actual:
          </label>

          <CuadroTexto
            tipo="password"
            id="contrasenaActual"
            texto=""
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="contrasenaNueva"
            className="form-label"
          >
            Ingrese su contraseña nueva:
          </label>

          <CuadroTexto
            tipo="password"
            id="contrasenaNueva"
            texto=""
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="contrasenaConfirmar"
            className="form-label"
          >
            Ingrese de nuevo su contraseña:
          </label>

          <CuadroTexto
            tipo="password"
            id="contrasenaConfirmar"
            texto=""
          />
        </div>

        <div>
          <Boton texto="Restablecer contraseña" />
        </div>

      </form>
      </div>
    </div>
    </>
  )
}

export default CambioContrasena