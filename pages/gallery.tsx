import Head from 'next/head'
import Navbar from '../components/navbar'
import EPages from '../lib/EPages';
import Image from 'next/image';
import style from '../styles/Gallery.module.scss';
import GetGalleryImages from '../lib/GetGalleryImage';
import { GetStaticProps } from 'next';
import { Hash } from 'crypto';
import {hashCode} from '../lib/HashCode';

export default function Gallery({images}) {


  const imagesTags = [];

  images.forEach(element => {
    imagesTags.push(
    <a className="lightbox" href={element} key={hashCode(element + "%")}>
      <img src={element} alt="" key={hashCode(element)} className="img-fluid"/>
    </a>
    );
  });

  const col1 = [], col2 = [], col3 = [], col4 = [];

  for (let index = 0; index < imagesTags.length;) {
    col1.push(imagesTags[index++]);
    col2.push(imagesTags[index++]);
    col3.push(imagesTags[index++]);
    col4.push(imagesTags[index++]);    
  }

  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.css"/>
    </Head>
 
          <Navbar currentPage={EPages.GALERIE}></Navbar>
          <div className={style.galerycontainer}>
            <div className="container gallery-container">
              <div className="tz-gallery container">
                <div className="row">
                  <div className={"col " + style.responsiveCol}>
                    {col1}
                  </div>
                  <div className={"col " + style.responsiveCol} >
                    {col2}
                  </div>
                  <div className={"col " + style.responsiveCol}>
                    {col3}
                  </div>
                  <div className={"col " + style.responsiveCol}>
                    {col4}
                  </div>
                </div>
              </div>
            </div>
          </div>
      <script src="gallerysetup.js"></script>
  </>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      images: GetGalleryImages(),
    }
  }
};

