import './App.css';
import GlowingImage from './GlowingImage';
import Image1 from './assets/image1.jpg'
 
export default function App() {
  return (
    <main className="main-content">
      <GlowingImage
        src={Image1}
        alt="Glowing Image"
        width={230}
        height={345}
      />
    </main>
  );
}