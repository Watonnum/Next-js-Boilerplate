import Bnk from '../../../components/bnk48';
import Footer from '../../../components/footer';
import Gallery from '../../../components/gallery';
import Highlight from '../../../components/highlight';
import Movies from '../../../components/movie';
import Seoul from '../../../components/seoul';

export default function Index() {
  return (
    <div className="mt-80">
      <Highlight />
      <Gallery />
      <Bnk />
      <Seoul />
      <Movies />
      <Footer />
    </div>
  );
}
