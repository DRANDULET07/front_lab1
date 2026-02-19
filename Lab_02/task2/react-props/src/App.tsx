import { Card } from './components/Card';
import { ProductList } from './components/ProductList';
import { Section } from './components/Section';

export default function App() {
  return (
    <>
      <h1>Lab 02 — Components, Props & Mapping</h1>

      <div className="twoUp">
        <Card title="Reusable Card">
          <p>A component that receives a title prop and renders children.</p>
        </Card>
        <Card title="Second Card" className="accent">
          <p>Same component, different props and content.</p>
        </Card>
      </div>

      <Section title="Products">
        <ProductList />
      </Section>
    </>
  );
}

