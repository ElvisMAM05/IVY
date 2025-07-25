import React, { useState, useEffect } from 'react';
import "../Styles/Categories_cs.css";
import { Link } from 'react-router-dom';
import Fetch from "../../Services/Fetch";

function Categories() {
  const [Categorias, setCategorias] = useState([]);

  async function obtenerCategorias() {
    const response = await Fetch.getData("api/Categories/");
    setCategorias(response);
  }

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <div id='Categories' className="Categories_Page">
      <div className="Categories_Container">
        <h1 className="Categories_Title">Explora nuestras categorías</h1>
        <p className="Categories_Description">
          Encuentra el servicio ideal según tus necesidades y contacta a nuestros profesionales.
        </p>

        <div className="Categories_List">
          {Categorias.map((categoria) => (
            <Link
              to={`/TrabajosCategoria/${categoria.id}`}
              key={categoria.id}
              className="Category_Card"
            >
              <img
                src={categoria.imagen_c}
                alt={categoria.nombre_c}
                className="Category_Image"
              />
              <h2 className="Category_Name">{categoria.nombre_c}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;