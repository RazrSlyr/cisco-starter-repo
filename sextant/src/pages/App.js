import Exhibit from "../components/exhibit";
import Header from "../components/header";

function App() {
  let comps = {
    comp1: "value 1",
    comp2: "value 2",
  };
  return (
    <div>
      <Header/>
      <div className="grid w-full p-5 gap-5 grid-cols-1 place-items-center">
      <Exhibit heading={"Example Heading"} comps={comps}/>
      <Exhibit heading={"Example Heading"} comps={comps}/>
      </div>
    </div>
  );
}

export default App;
