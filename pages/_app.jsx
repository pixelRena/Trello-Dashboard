import '@/styles/globals.css';
import Background from "@/components/background.component";
import Sidebar from "@/components/sidebar.component";
import Navigation from "@/components/navigation/navigation.component";
import styles from '../styles/Home.module.css';

export default function App({ Component, pageProps }) {
  return (
    <main className={styles.main}>
      <Background/>
      <section>
        <Sidebar/>
      </section>
      <section className="mt-5 ml-2 mr-2 lg:ml-12 lg:mr-12 w-screen">
        <Navigation/>
        <Component {...pageProps} />
      </section>
    </main>
  )
}
