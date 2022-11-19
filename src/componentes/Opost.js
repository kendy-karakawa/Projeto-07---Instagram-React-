import { useState } from "react";

export default function Opost(props) {
  const [salvo, setSalvo] = useState("bookmark-outline");
  const [like, setLike] = useState("heart-outline");
  const [numeroLike, setNumerolike] = useState(10199);

  function salvar() {
    setSalvo("bookmark");
  }

  function darLike() {
    if (like === "heart") {
      setLike("heart-outline");
      setNumerolike(numeroLike - 1);
    } else {
        addLike()
    }
  }

  function addLike(){
    if(like === "heart-outline"){
        setNumerolike(numeroLike + 1);
    }
    setLike("heart");
    
  }

  return (
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.posts.userImg} />
          {props.posts.userName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img
          src={props.posts.conteudo}
          onDoubleClick={addLike}
          data-test="post-image"
        />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={like}
              onClick={darLike}
              data-test="like-post"
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={salvo}
              onClick={salvar}
              data-test="save-post"
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.posts.curtidaImg} />
          <div className="texto">
            Curtido por <strong>{props.posts.curtidoPor}</strong> e{" "}
            <strong data-test="likes-number">
              outras {numeroLike} pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
