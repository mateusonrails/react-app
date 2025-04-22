import Banner from "../../components/Banner";
import Card from "../../components/Card";
// import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";

function Home() {

  function getName(event) {
    console.log(event.target.value)
    setNome(event.target.value)
  }

  const [ name, setNome] = useState()

  return (
    <>
      <Header/>
      <Banner image="home" />
      <Container>

        <input 
          type="text"
          placeholder="name"
          onChange={getName}
        />
        <h2>{name}</h2>

        {/* { categories.map((category, index) =>
          <Category category={category}>
            { filterCategory(index).map((video) => <Card video={video} key={video.key}/> ) }
          </Category>
        )} */}
      </Container>
      <Footer/>
    </>
  );
}

export default Home;
