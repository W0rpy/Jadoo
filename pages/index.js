import Head from 'next/head';
import Destinations from '../components/Destinations';

export default function Home() {

  return (
    <div >
      < Head >
        <title>Jadoo</title>
        <meta name="description" content="Jadoo" />
      </Head >
      <Destinations />
    </div>
  )
}
