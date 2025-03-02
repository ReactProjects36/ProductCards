import "../styles/price.css";

export default function Price({ actualPrice, discount }) {
  let finalPrice = parseInt(actualPrice - actualPrice * (discount / 100));
  let formattedActualPrice = parseInt(actualPrice).toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
  let formattedFinalPrice = finalPrice.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

  return (
    <div className="price">
      <p style={{ marginRight: "5px", fontWeight: "bold", textDecoration: "line-through" }}>{formattedActualPrice}</p>
      <p style={{ fontWeight: "bold" }}>{formattedFinalPrice}</p>
    </div>
  );
}
