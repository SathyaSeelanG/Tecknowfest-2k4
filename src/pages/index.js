// pages/index.js
import Hero from "../components/Hero";
import Events from "../components/Events";
// import Registration from "../components/Registration";
// import Rules from "../components/Rules";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Head from 'next/head';
export default function Home() {
  return (<>
    <Header/>
    <div>
    <Head>
        <title>Tecknowfest 2k4</title> {/* Set the page title */}
        {/* <link rel="icon" href="/favicon.ico" /> Link to the favicon */}
      </Head>
      <Hero />
      <div className="container">
        <Events />
        {/* <Registration /> */}
        {/* <Rules /> */}
        <Contact />
      </div>
    </div>
    </>
  );
}
