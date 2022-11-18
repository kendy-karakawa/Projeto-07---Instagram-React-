export default function Sugestoes() {
  const listaSugestoes = [
    {img:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"},
    {img:"assets/img/chibirdart.svg", nome:"chibirdart", razao:"Segue você"},
    {img:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", razao:"Novo no Instagram"},
    {img:"assets/img/adorable_animals.svg", nome:"adorable_animals", razao:"Segue você"},
    {img:"assets/img/smallcutecats.svg", nome:"smallcutecats", razao:"Segue você"}
  ]
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {listaSugestoes.map((l)=> <Sugestao lista={l}/>)}
    </div>
  );
}

function Sugestao(props){
  return(
    <div class="sugestao">
        <div class="usuario">
          <img src={props.lista.img} />
          <div class="texto">
            <div class="nome">{props.lista.nome}</div>
            <div class="razao">{props.lista.razao}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

  )
}
