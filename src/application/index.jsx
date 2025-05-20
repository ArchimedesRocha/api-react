import { CardCharacter } from "../components/CardCharacter";
import { ContainerApp, HeaderApp, ContentCharacters } from "./styles";

export function Application() {
  return (
    <ContainerApp>
      <HeaderApp>
        <h1>Ricky e Morty</h1>
        <span>Nº de Personagens: 826</span>
      </HeaderApp>
      <ContentCharacters>
        <div>
          <CardCharacter
            image="https://rickandmortyapi.com/api/character/avatar/111.jpeg"
            name="Eli Girlfriend"
            gender="Female"
            species="Human"
          />
        </div>
        <button>Carregar mais</button>
      </ContentCharacters>
    </ContainerApp>
  );
}
