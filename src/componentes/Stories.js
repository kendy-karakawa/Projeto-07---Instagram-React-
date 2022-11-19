export default function Stories() {
  const stories = [
    { img: "assets/img/9gag.svg", user: "9gag" },
    { img: "assets/img/meowed.svg", user: "meowed" },
    { img: "assets/img/barked.svg", user: "barked" },
    {
      img: "assets/img/nathanwpylestrangeplanet.svg",
      user: "nathanwpylestrangeplanet",
    },
    { img: "assets/img/wawawicomics.svg", user: "wawawicomics" },
    { img: "assets/img/respondeai.svg", user: "respondeai" },
    { img: "assets/img/filomoderna.svg", user: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", user: "memeriagourmet" }
  ];

  return (
    <div className="stories">
      {stories.map((s) => <Story story={s} /> )}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.story.img} />
      </div>
      <div className="usuario">{props.story.user} </div>
    </div>
  );
}
