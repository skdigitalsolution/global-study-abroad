import DestinationGuidePage from '../components/destinations/DestinationGuidePage';
import { extendedDestinationGuides } from '../data/extendedDestinationGuides';

export default function AsiaPage() {
  return <DestinationGuidePage guide={extendedDestinationGuides.asia} />;
}
