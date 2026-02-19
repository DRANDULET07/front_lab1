import { FragmentLayout } from './components/FragmentLayout';
import { ItemSummarySection } from './components/ItemSummarySection';

export default function App() {
  return (
    <>
      <FragmentLayout />
      <hr className="divider" />
      <ItemSummarySection />
    </>
  );
}

