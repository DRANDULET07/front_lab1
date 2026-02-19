import { Card } from './Card';

type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: 'Widget', price: 9.99 },
  { id: 2, name: 'Gadget', price: 14.5 },
  { id: 3, name: 'Doohickey', price: 3.25 },
];

export function ProductList() {
  return (
    <div className="grid">
      {products.map((product) => (
        <Card key={product.id} title={product.name}>
          <p className="muted">
            Price: <strong>{product.price.toFixed(2)}</strong> USD
          </p>
          <p className="muted">
            ID: <strong>{product.id}</strong>
          </p>
        </Card>
      ))}
    </div>
  );
}

