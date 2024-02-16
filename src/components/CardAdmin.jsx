/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./CardAdmin.css";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import Context from '../context/context';
import "bootstrap/dist/css/bootstrap.min.css";

const CardAdmin = ({ producto }) => {
  const { setProducto  } = useContext(Context);
  const navigate = useNavigate();

  const renderEstrellas = () => {
    if (!producto) return null; 

    const calificacion = parseInt(producto.rating, 10);
    

    const estrellas = [];
    for (let i = 1; i <= 5; i++) {
      // Cambia la clase 'filled' si la calificación es mayor o igual a i
      const claseEstrella = calificacion >= i ? 'filled' : '';
      estrellas.push(<span key={i} className={`estrella ${claseEstrella}`}>★</span>);
    }
    return estrellas;
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      // Truncar la descripción y agregar puntos suspensivos
      return `${description.slice(0, maxLength)}...`;
    }
  };

  const handleDetail = (e) => {
    e.preventDefault();
    setProducto(producto);
    navigate(`/producto/${producto.id}`);
  };

  return (
    <div className="card shadow d-flex">
      <img src={producto.img} alt={producto.name} />
      <h1 className="card-title text-capitalize mt-3">General Details:</h1>
      <div className="container-precio d-flex flex-column align-items-center">
        <div className="precio d-grid justify-content-center align-items-center">
        <ul>
          <li className="text-primary1">
            Name: {producto.name}
          </li>
          <li className="text-primary1">
            Category: {producto.category}
          </li>
          <li className="text-primary1">
            Description: {truncateDescription(producto.desc, 20)}
            </li>
            <li className="text-primary1">
            Feelings: {producto.feelings}
          </li>
          <li className="text-primary1">
            Negatives: {producto.negatives}
          </li>
          <li className="text-primary1">
            Helps with: {producto.helpwith}
          </li>
          <li className="text-primary1">
            Price:{producto.price.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </li>
          <li className="text-primary1">
            Discount Price:{producto.discountprice.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </li>
          <li className="text-primary1">
            Rating: ({producto.rating}){renderEstrellas()}
          </li>
          </ul>
        </div>
        <div className="d-flex justify-content-evenly w-100">
          <button id="btnpubli" className="btn btn-success" onClick={handleDetail}>
            Ver mas
          </button>
          <Link to={`/edit/${producto.id}`} className="nav-link active">
          <button type="button" className="btn btn-warning mb-4" style={{ display:"flex", width: "100px", height:"80px", justifyContent: "center", alignItems:"center" }}>
            <img
              src="/img/iconmonstr-pencil-square-lined.svg"
              alt=""
              style={{ width: "30px", height: "50px", marginRight: "5px" }}
            />{" "}
           Editar
          </button>
        </Link>
          <button id="btnpubli" className="btn btn-success">
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardAdmin;