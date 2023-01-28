import "./sobre.css";
export default function sobre() {
  return (
    <section className="secaosobre" id="sobre">
      <div className="limitasecao">
        <h2>QUEM SOMOS NÓS?</h2>
        <p>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida
          iniciou suas atividades focada no atendimento ao público de renda mais
          baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.
        </p>
        <div className="boxcardsobre">
          <img src="assets/loja.png" alt=""></img>
          <div className="sobrecard">
            <h3>Nossas Filiais</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
          <div className="sobrecard">
            <h3>Atendimento flexível</h3>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>
          <img src="assets/atendimento.png" alt=""></img>
        </div>
      </div>
    </section>
  );
}
