export default function Sugestao(props){
    return(
      <div className="sugestao">
          <div className="usuario">
            <img src={props.lista.img} />
            <div className="texto">
              <div className="nome">{props.lista.nome}</div>
              <div className="razao">{props.lista.razao}</div>
            </div>
          </div>
  
          <div className="seguir">Seguir</div>
        </div>
  
    )
  }