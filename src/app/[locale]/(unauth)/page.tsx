import Bnk from '../../../components/bnk48';
import Carousel from '../../../components/carroussel';
import FoodRoom from '../../../components/foodRoom';
import Highlight from '../../../components/highlight';

export default function Index() {
  return (
    <div>
      <Carousel />
      <Highlight />
      <FoodRoom />
      <Bnk />
    </div>
  );
}
