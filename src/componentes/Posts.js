import Opost from "./Opost";

export default function Post() {

  const posts = [
    {userName:"meowed", userImg:"assets/img/meowed.svg",conteudo:"assets/img/gato-telefone.svg",curtidaImg:"assets/img/respondeai.svg", curtidoPor:"respondeai" },
    {userName:"barked", userImg:"assets/img/barked.svg",conteudo:"assets/img/dog.svg",curtidaImg:"assets/img/adorable_animals.svg", curtidoPor:"adorable_animals" }

  ]
  
  return (
    <div className="posts">
      {posts.map((p)=><Opost posts={p} />)}
    </div>
  );
}

