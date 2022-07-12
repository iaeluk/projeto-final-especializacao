import "./character.css";
import CardPersonagem from "./cardComponent";
import { Personagem } from '../../types';

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */

type Person = {
  personagens?: Personagem[],
}

const GradePersonagem = ({personagens}: Person) => {
  return (
    <div className="grade-personagens">
      {personagens && 
        personagens.map((personagem: Personagem) => {
          return <CardPersonagem key={personagem.id} personagem={personagem} />
        })
      }
    </div>
  );
};

export default GradePersonagem;
