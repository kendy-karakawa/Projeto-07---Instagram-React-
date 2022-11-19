import { useState } from "react";

export default function Ousuario() {
    const linkPadrao = "assets/img/catanacomics.svg";
    const [name, setName] = useState("");
    const [link, setLink] = useState(linkPadrao);
  
    function definirUsuario() {
      setName(prompt("Insira o seu nome aqui:"));
    }
  
    function definirFotoUsuario() {
      setLink(prompt("Insira a URL da sua imagem aqui:"));
    }
  
    return (
      <>
        <img
          src={!link ? linkPadrao : link}
          onClick={definirFotoUsuario}
          data-test="profile-image"
        />
        <div className="texto">
          <strong>catanacomics</strong>
          <span data-test="name">
            {!name ? "usuario" : name}
            <ion-icon
              name="pencil"
              data-test="edit-name"
              onClick={definirUsuario}
            ></ion-icon>
          </span>
        </div>
      </>
    );
  }