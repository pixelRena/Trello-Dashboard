import '@/styles/globals.css';
import Head from "next/head";
import Background from "@/components/background.component";
import Sidebar from "@/components/sidebar.component";
import Navigation from "@/components/navigation/navigation.component";
import styles from '../styles/Home.module.css';
import { BoardContextProvider } from "@/context/board.context";
import { UserContextProvider } from "@/context/user.context";
import { NotificationsContextProvider } from "@/context/notifications.context";
import { SidebarContextProvider } from "@/context/sidebar.context"; 

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <NotificationsContextProvider>
        <BoardContextProvider>
          <SidebarContextProvider>
            <Head>
            <title>Trello Dashboard</title>
            <meta name="description" content="View your trello boards statistics" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.svg" />
            </Head>  
            <Background/>
            <main className={styles.main} >
              <section>
                <Sidebar/>
              </section>
              <section className="lg:mt-5 lg:mr-5 lg:ml-72 h-full">
                <Navigation/>
                <Component {...pageProps} />
              </section>
            </main>
          </SidebarContextProvider>
        </BoardContextProvider>
      </NotificationsContextProvider>
    </UserContextProvider>
  )
}
