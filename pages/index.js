import Head from 'next/head';
import Destinations from '../components/Destinations';
import JadooForm from '../components/JadooForm';
import NextTrip from '../components/NextTrip';
import Services from '../components/Services';
import SliderJadoo from '../components/SliderJadoo';
import Sponsors from '../components/Sponsors';
import Travel from '../components/Travel';

export default function Home() {

  return (
    <div >
      < Head >
        <title>Jadoo</title>
        <meta name="description" content="Jadoo" />
      </Head >
      <Travel />
      <Services />
      <Destinations />
      <NextTrip />
      <SliderJadoo />
      <Sponsors />
      <JadooForm />
    </div>
  )
}
