/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./App.css";

function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header name="Harry" year={new Date().getFullYear()} />
      <main>
        <h2>We serve the most delicious food around</h2>
      </main>
    </div>
  );
}

export default App;
