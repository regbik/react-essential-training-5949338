/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}
const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables"
];

const dishObj = items.map((dish, i) => ({
    id: i,
    title: dish
}));

function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li style={{ listStyleType: "none" }} key={dish.id}>{dish.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObj} />
    </div>
  );
}

export default App;
