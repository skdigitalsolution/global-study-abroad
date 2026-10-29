import DestinationGuidePage from '../components/destinations/DestinationGuidePage';
import { extendedDestinationGuides } from '../data/extendedDestinationGuides';

export default function EuropePage() {
  return <DestinationGuidePage guide={extendedDestinationGuides.europe} />;
}
