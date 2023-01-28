import './topo.css'
export default function topo() {
  return (
    <header>
      <div className="limitasecao topo">
        <img src="assets/logo.png" alt="logo"/>
        <nav>
          <a href="#produto">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>
  );
}
