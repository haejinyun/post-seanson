import MainCarousel from '@/components/MainCarousel';
import WeatherSection from '@/components/WeatherSection';

export default function Home() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MainCarousel />
      </div>
      <WeatherSection />
    </div>
  );
}
