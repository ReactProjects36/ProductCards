import Cards from "./Cards";
export default function Products({}) {
  let data = [
    {
      title: "Logic Master",
      qualities: ["8000 Dpi", "5 Programmable Buttons"],
      actualPrice: "12495",
      discount: 25,
    },
    {
      title: "Logic Master",
      qualities: ["8000 Dpi", "5 Programmable Buttons"],
      actualPrice: "12495",
      discount: 25,
    },
    {
      title: "Logic Master",
      qualities: ["8000 Dpi", "5 Programmable Buttons"],
      actualPrice: "12495",
      discount: 25,
    },
    {
      title: "Logic Master",
      qualities: ["8000 Dpi", "5 Programmable Buttons"],
      actualPrice: "12495",
      discount: 25,
    },
  ];
  return (
    <div style={{ display: "flex", backgroundColor: "white" }}>
      {data.map((i, key) => (
        <Cards key={key} title={i.title} features={i.qualities} oldPrice={i.actualPrice} discount={i.discount} />
      ))}
    </div>
  );
}
