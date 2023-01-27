import Produto from "./SecaoProduto";
import Banner from "./SecaoBanner";
import Sobre from "./SecaoSobre";
import Contato from "./SecaoContato";
export default function conteudo() {
  return (
    <section>
      <Banner/>
      <Produto/>
      <Sobre/>
      <Contato/>

    </section>
  );
}
