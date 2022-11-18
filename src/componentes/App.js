import Corpo from "./Corpo";
import Navbar from "./NavBar";

export default function App() {
  
    return (
      <div class="root">
        <Navbar />

        <Corpo />

        <div class="fundo-mobile">
          <ion-icon name="home"></ion-icon>
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="add-circle-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    );
  
}
