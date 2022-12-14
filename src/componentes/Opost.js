import { useState } from "react";

export default function Opost(props) {
  const [salvo, setSalvo] = useState("bookmark-outline");
  const [like, setLike] = useState("heart-outline");
  const [numeroLike, setNumerolike] = useState(10199);
  const [color, setColor] = useState("");
  const [efeito, setEfeito] = useState("coracao ");
  const [id, setId] = useState("none")

  function salvar() {
    if (salvo === "bookmark") {
      setSalvo("bookmark-outline");
    } else {
      setSalvo("bookmark");
    }
  }

  function darLike() {
    if (like === "heart") {
      setLike("heart-outline");
      setNumerolike(numeroLike - 1);
      setColor("");
    } else {
      addLike();
    }
  }

  function addLike() {
    if (like === "heart-outline") {
      setNumerolike(numeroLike + 1);
    }
    setLike("heart");
    setColor("red");
    
    
  }

  function ativarEfeito(){
    addLike()
    setId("")
    setTimeout(executarEfeito,300)
    
  }

  function executarEfeito(){
    setEfeito(efeito + " efeito")
    setTimeout(esconder,500)
  }

  function esconder(){
    setId("none")
    setEfeito("coracao ")
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
          onDoubleClick={ativarEfeito}
          data-test="post-image"
        />
        {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
        <img className={efeito} id={id} src="assets/img/kiss.png" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              class={color}
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
