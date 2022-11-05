import Head from 'next/head';
import Destinations from '../components/Destinations';
import Services from '../components/Services';
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
    </div>
  )
}
