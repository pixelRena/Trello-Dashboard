import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Background from "@/components/background.component";
import Sidebar from "@/components/sidebar.component";
import Navigation from "@/components/navigation/navigation.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trello Dashboard</title>
        <meta name="description" content="View your trello boards statistics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Background/>
      <main className={styles.main}>
        <section> 
          <Sidebar/>
        </section>

        <section className="mt-5 ml-12 mr-12 w-screen">
          <Navigation/>
          {/* Routes begin here */}
        </section>
      </main>
    </>
  )
}
