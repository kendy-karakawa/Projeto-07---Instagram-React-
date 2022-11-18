export default function Post() {

  const posts = [
    {userName:"meowed", userImg:"assets/img/meowed.svg",conteudo:"assets/img/gato-telefone.svg",curtidaImg:"assets/img/respondeai.svg", curtidoPor:"respondeai" },
    {userName:"barked", userImg:"assets/img/barked.svg",conteudo:"assets/img/dog.svg",curtidaImg:"assets/img/adorable_animals.svg", curtidoPor:"adorable_animals" }

  ]
  
  return (
    <div class="posts">
      {posts.map((p)=><Opost posts={p} />)}
    </div>
  );
}

function Opost(props){
  return(
    <div class="post" data-test="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.posts.userImg} />
            {props.posts.userName}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.posts.conteudo}data-test="post-image"/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"  data-test="like-post"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.posts.curtidaImg} />
            <div class="texto">
              Curtido por <strong>{props.posts.curtidoPor}</strong> e{" "}
              <strong data-test="likes-number">outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
  )
}
