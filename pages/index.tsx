import Head from "next/head";
import Navbar from "../components/navbar";
import EPages from "../lib/EPages";
import Image from "next/image";
import style from "../styles/Home.module.scss";
import { Carousel } from "../components/carousel";

export default function Home() {
  return (
    <>
      <Head>
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="d-flex flex-column">
        <Navbar currentPage={EPages.HOME}></Navbar>
        <div className={style.bannercontainer}>
          <img
            src="images/HeaderLogo.png"
            alt="Header Logo"
            className={style.headerlogo}
          />
          <h1>NICOS WALDSCHÜTZEN</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            pulvinar libero augue, in tempus enim vestibulum eu. Proin at lacus
            facilisis, ornare metus id, sollicitudin neque. Fusce egestas
            euismod egestas. Integer ac nunc cursus, auctor nibh id, tempus
            purus.{" "}
          </p>
          <form action={`${process.env.BACKEND_URL}/gallery`}>
            <button className={style.button + " btn mt-4"} type="submit">
              GALLERIE
            </button>
          </form>
        </div>
        <div className="container-fluid" style={{position: "relative"}}>
          <div className="row">
            <div className="col">
              <Carousel className="mx-auto my-5"
                images={[
                  "images/gallery_1.jpg",
                  "images/gallery_2.jpg",
                  "images/gallery_3.jpg",
                  "images/gallery_4.jpg",
                ]}
              ></Carousel>
            </div>
          </div>
          <img src="images/pexels-pixabay-219906.png" alt="" style={{position: "absolute", left: "20px", top:"20px", width: "400px", zIndex: -1}} className="d-none d-lg-block"/>
          <img src="images/pexels-tomáš-malík-3509971.png" alt="" style={{position: "absolute", right: "20px", bottom:"20px", width: "400px", zIndex: -1}} className="d-none d-lg-block"/>
        </div>

        <div className="container my-5 location">
          <div className="row">
            <h1 style={{textAlign: "center"}} className="mb-5">Hier finden Sie uns</h1>
          </div>
          <div className="row">
              <div className="col-12 col-md-3 offset-md-3 align-self-center pb-5">
                <p className={style.address}>
                Toni Bräu 32 <br/>
                Wagenbach 1244 <br/>
                Niederösterreich <br/>
                </p>
              </div>
              <div className="col-12 col-md-3">
                <div className="d-flex justify-content-center">
                  <img src="images/Map.png" alt="" style={{width: "80%", height: "auto", minWidth: "300px"}}/>
                </div>
              </div>
          </div>
        </div>
        <script src="carouselsetup.js" />
      </div>
    </>
  );
}
