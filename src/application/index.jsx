import { useEffect, useState } from "react";
import { CardCharacter } from "../components/CardCharacter";
import { ContainerApp, HeaderApp, ContentCharacters, Loader } from "./styles";
import IconLoader from "../assets/loader.gif";

import axios from "axios";

export function Application() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState("");
  const [qtdCharacters, setQtdCharacters] = useState("");
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        const array = [...characters, ...response.data.results];
        setCharacters(array);
        setCountPages(response.data.info.pages);
        setQtdCharacters(response.data.info.count);
        setIsLoader(false);
      });
  }, [page]);

  return (
    <>
      {isLoader && (
        <Loader>
          <img src={IconLoader} alt="" />
        </Loader>
      )}
      <ContainerApp>
        <HeaderApp>
          <h1>Ricky e Morty</h1>
          <span>Nº de Personagens: {qtdCharacters}</span>
        </HeaderApp>
        <ContentCharacters>
          <div>
            {characters &&
              characters.map(({ image, name, gender, species }) => {
                return (
                  <CardCharacter
                    image={image}
                    name={name}
                    gender={gender}
                    species={species}
                  />
                );
              })}
          </div>
          {!(page === countPages) && (
            <button onClick={() => setPage(page + 1)}>Carregar mais</button>
          )}
        </ContentCharacters>
      </ContainerApp>
    </>
  );
}
