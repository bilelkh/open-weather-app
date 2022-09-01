import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import CustomNavbar from "./components/customNavbar";
import Weather from "./pages/weather";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Weather />
    </div>
  );
}

export default App;
