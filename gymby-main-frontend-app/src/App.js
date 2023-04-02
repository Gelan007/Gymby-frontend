import './App.css';
import MainPage from "./pages/mainLandingPage/MainPage";
import NavbarContainer from "./components/navbars/NavbarContainer";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <div>
       {/* <MainPage/>*/}
          <NavbarContainer/>
          <AppRouter/>
      </div>
  );
}

export default App;
