import styles from "./Watch.module.css";
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json";
import PageNotFound from "../PageNotFound";

function Watch() {
    const params = useParams()
    const video = videos.find((video) => video.key === params.key)
    if(!video) { return <PageNotFound/> }

    return (
        <>
            <Header/>
            <Container>
                <section className={styles.watch}>
                    <iframe 
                        width="1280"
                        height="720"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </section>
            </Container>
            <Footer/>
        </>
    )
}

export default Watch;