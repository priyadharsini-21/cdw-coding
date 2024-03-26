import "./App.css";
import Header from "./components/templates/Header";
import Administrator from "./components/templates/Administrator";
import Members from "./components/templates/Members";
import Divider from "@mui/material/Divider";
function App() {
  return (
    <>
      <Header></Header>
      <Administrator></Administrator>
      <Divider variant="middle"/>
      <Members></Members>
    </>
  );
}

export default App;
