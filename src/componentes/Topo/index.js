import './topo.css'
export default function topo() {
  return (
    <header>
      <div className="topo">
        <img src="assets/logo.png" alt="logo"/>
        <nav>
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>
  );
}
