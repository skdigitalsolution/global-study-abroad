import DestinationGuidePage from '../components/destinations/DestinationGuidePage';
import { extendedDestinationGuides } from '../data/extendedDestinationGuides';

export default function NewZealandPage() {
  return <DestinationGuidePage guide={extendedDestinationGuides['new-zealand']} />;
}
