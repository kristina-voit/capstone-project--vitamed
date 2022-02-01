import Card from "../Medicine/MedicineCard";

export default function MedicineList({ data, onRemoveProduct }) {
  const medicineList = data.map((product) => (
    <Card
      id={product.id}
      name={product.name}
      hersteller={product.hersteller}
      einnahmehinweis={product.einnahmehinweis}
      einnahmeMorgens={product.einnahmeMorgens}
      einnahmeMittags={product.einnahmeMittags}
      einnahmeAbends={product.einnahmeAbends}
      einnahmeNachts={product.einnahmeNachts}
      onRemoveProduct={onRemoveProduct}
    />
  ));

  return <div>{medicineList}</div>;
}
