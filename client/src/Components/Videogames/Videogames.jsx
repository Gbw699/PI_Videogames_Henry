import { container } from "./Videogames.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../Redux/actions";
// eslint-disable-next-line no-unused-vars
import Videogame from "../Videogame/Videogame";
import Pagination from "../Pagination/Pagination";

export default function Videogames() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);
  const renderedVideogames = useSelector((state) => state.renderedVideogames);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 15;

  let currentVideogames = renderedVideogames.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    if (!allVideogames.length) {
      dispatch(getVideogames());
    }
    setCurrentPage(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderedVideogames]);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const videogame = currentVideogames.map((videogame, index) => {
  //   return (
  //     <Videogame
  //       id={videogame.id}
  //       name={videogame.name}
  //       background_image={videogame.background_image}
  //       genres={videogame.genres}
  //       rating={videogame.rating}
  //       key={index}
  //     />
  //   );
  // });

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalCount={renderedVideogames.length}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
      <div className={container}>
        {currentVideogames?.map((videogame, index) => {
          return (
            <Videogame
              id={videogame.id}
              name={videogame.name}
              background_image={videogame.background_image}
              genres={videogame.genres}
              rating={videogame.rating}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}
//totalCount = cantidad total de videojuegos
//currentPage = página en la que estoy posicionado
//pageSize = cantidad de videojuegos por página
//onPageChange = callback invocada con la actualización de página, cuando se cambia la página
