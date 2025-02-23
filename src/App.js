import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Banner image="home" />
      <Container>
        <h1>HELLO WORLD!</h1>
        <p>Paragrafo do texto</p>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
