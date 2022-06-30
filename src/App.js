import "./App.css";
import Members from "./components/Members/Members";
import Card from "./components/Card/Card";


const App=()=> {
  return (
    <section className="app">
      <h1>Kodluyoruz React Bootcamp</h1>
      <Card></Card>
      <Members></Members>
    </section>
  );
}

export default App;
