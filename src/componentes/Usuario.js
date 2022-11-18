export default function Usuario() {
 const name = "s"//prompt ("qual o nome ?")

  return (
    <div class="usuario" data-test="user">
      <img src="assets/img/catanacomics.svg" data-test="profile-image" />
      <div class="texto">
        <strong>catanacomics</strong>
        <span data-test="name">
          {!name ?  "catana" : name}
          <ion-icon
            name="pencil"
            data-test="edit-name"
            onclick="changeName()"
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
