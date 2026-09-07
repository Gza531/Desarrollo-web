import Boton from "./Boton"
import CampoTexto from "./CampoTexto"
import CheckBox from "./CheckBox"
import Encabezado from "./Encabezado"

const AltaMascotas = () => {
  return (
    <>
    <div className="container mt-5">
        <div
            className="card p-4 mx-auto"
            style={{ maxWidth: "600px" }}
        >
    <form action="">
      <div>
        <Encabezado texto="Alta de mascotas" />
      </div>

      <div className="mb-3">
        <label htmlFor="nombremascota" className="form-label">
          Nombre de la mascota:
        </label>

        <CampoTexto
          tipo="text"
          id="nombremascota"
          texto="Nombre"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nacimientomascota" className="form-label">
          Fecha de nacimiento:
        </label>

        <CampoTexto
          tipo="date"
          id="nacimientomascota"
          texto=""
        />
      </div>

      <div className="mb-3">
        <label htmlFor="edadmascota" className="form-label">
          Edad:
        </label>

        <CampoTexto
          tipo="number"
          id="edadmascota"
          texto="Ej: 10"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="razamascota" className="form-label">
          Raza:
        </label>

        <CampoTexto
          tipo="text"
          id="razamascota"
          texto="Raza"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="fotomascota" className="form-label">
          Foto de la mascota:
        </label>

        <CampoTexto
          tipo="file"
          id="fotomascota"
          texto=""
        />
      </div>

      <div className="mb-3">
        <label htmlFor="telmascota" className="form-label">
          Número de contacto:
        </label>

        <CampoTexto
          tipo="tel"
          id="telmascota"
          texto="Teléfono"
        />
      </div>

      
        <CheckBox
          id="bozal"
          texto="Requiere bozal"
        />
      

     
        <CheckBox
          id="golosinas"
          texto="Puede comer golosinas"
        />
      

      <div>
        <Boton texto="Cargar mascota" />
      </div>
      </form>
      
    </div>
    </div>
    </>
  )
  
}

export default AltaMascotas