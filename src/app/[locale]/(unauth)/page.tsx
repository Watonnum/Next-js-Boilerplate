// import FoodRoom from '../../../components/foodRoom';
import Bnk from '../../../components/bnk48';
import Gallery from '../../../components/gallery';
import Highlight from '../../../components/highlight';
import Movies from '../../../components/movie';
import Seoul from '../../../components/seoul';

export default function Index() {
  return (
    <div>
      <Highlight />
      {/* <FoodRoom /> */}
      <Gallery />
      <Bnk />
      <Seoul />
      <Movies />
    </div>
  );
}
