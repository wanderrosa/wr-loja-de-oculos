import "./contato.css";
export default function contato() {
  return (
    <section className="secaocontato" id="contato">
      <div className="limitasecao">
        <h2>Fale conosco</h2>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>
        <div className="boxcontatos">
          <div className="boxcontato">
            <p>Contato</p>
            <div className="boxcontatotxtimg">
              <img src="assets/local.png" alt=""></img>
              <span>Nova Iguaçu, RJ</span>
            </div>
            <div className="boxcontatotxtimg">
              <img src="assets/telefone.png" alt=""></img>
              <span>(21) 9999-9999</span>
            </div>
            <div className="boxcontatotxtimg">
              <img src="assets/email.png" alt=""></img>
              <span>contato@oticavida.com</span>
            </div>
          </div>
          <div className="boxcontato">
            <p>Nossas Redes Sociais</p>
            <div className="boxcontatotxtimg">
              <img src="assets/fb.png" alt=""></img>
              <span>/OticaVida</span>
            </div>
            <div className="boxcontatotxtimg">
              <img src="assets/ig.png" alt=""></img>
              <span>@oticavidarj</span>
            </div>
            <div className="boxcontatotxtimg">
              <img src="assets/tt.png" alt=""></img>
              <span>@oticavidarj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
