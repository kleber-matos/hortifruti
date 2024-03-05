/** @format */

import alface from "../assets/alface.png";
import laranja from "../assets/laranja.png";
import cereja from "../assets/cereja.png";
import cenoura from "../assets/cenoura.png";
import limao from "../assets/limao.png";
import manga from "../assets/manga.png";
import tomate from "../assets/tomate.png";
import beterraba from "../assets/beterraba.png";
import carrinho from "../assets/carrinho.png";

import * as S from "./style";

export default function Main() {
  return (
    <main>
      <S.Container>
        <S.Produtos>
          <div>
            <h1>HORTIFRUTI vnv</h1>
            <h2>Nossos Produtos</h2>
          </div>

          <S.Imagens>
            <img src={alface} alt="" />
            <img src={laranja} alt="" />
            <img src={cereja} alt="" />
            <img src={cenoura} alt="" />
            <img src={manga} alt="" />
            <img src={limao} alt="" />
            <img src={beterraba} alt="" />
            <img src={tomate} alt="" />
          </S.Imagens>
        </S.Produtos>

        <S.ContainerCarrinho>
          <S.Carrinho>
            <img src={carrinho} alt="" />
            <p>Click no produto para colocar no carriho</p>
          </S.Carrinho>

          <S.Quantidade>
            <button>+</button>
            <button>-</button>
          </S.Quantidade>
        </S.ContainerCarrinho>
      </S.Container>
    </main>
  );
}
