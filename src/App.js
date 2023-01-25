import SideBarMenu from "./components/SideBarMenu";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div class="container-fluid">
      <div class="row">
        <button class="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <SideBarMenu/>
        <MainContent/>
      </div>
    </div>
  );
}

export default App;
