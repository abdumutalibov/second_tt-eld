import "../styles/globals.css";
import Layout from "./component/Layout";
// import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;