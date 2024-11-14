// pages/_app.js or custom Layout component
// import '../styles/globals.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="layout-wrapper">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
