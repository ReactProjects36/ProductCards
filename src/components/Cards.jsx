import "../styles/cards.css";
import Price from "./Price";

export default function Cards({ title, features, oldPrice, discount }) {
  return (
    <>
      <div className="cards">
        <h2 style={{ margin: "5px" }}>{title}</h2>
        {features.map((feature) => (
          <p>feature</p>
        ))}
        <Price actualPrice={parseFloat(oldPrice)} discount={discount} />
      </div>
    </>
  );
}
