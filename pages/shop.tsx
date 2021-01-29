import React from "react";
import Navbar from "../components/navbar";
import EPages from "../lib/EPages";
import style from "../styles/Shop.module.scss";
import ShopItem from "../components/shopitem";
import ShopRow from "../components/shoprow";

export default function Shop() {

    return (
        <>
            <Navbar currentPage={EPages.SHOP}></Navbar>
            <div className={"container-fluid " + style.shopcontainer}>
                <ShopRow title="Bögen">
                    <ShopItem width="auto" height="auto" price={239.321} image="images/eqe.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/eqe.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/eqe.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/eqe.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/eqe.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/eqe.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/eqe.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/eqe.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/eqe.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/eqe.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/eqe.png" className={"mx-2 " + style.item}></ShopItem>
                </ShopRow>
                <ShopRow title="Pfeile">
                    <ShopItem width="auto" height="auto" price={239.321} image="images/AvalonHybridPfeil.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/AvalonHybridPfeil.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/AvalonHybridPfeil.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/AvalonHybridPfeil.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/AvalonHybridPfeil.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/AvalonHybridPfeil.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/AvalonHybridPfeil.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/AvalonHybridPfeil.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/AvalonHybridPfeil.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/AvalonHybridPfeil.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={239.321} image="images/AvalonHybridPfeil.png" className={"mx-2 " + style.item}></ShopItem>
                </ShopRow>
                <ShopRow title="Köcher">
                    <ShopItem width="auto" height="auto" price={63.591} image="images/Mesh_quiver_d.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={63.591} image="images/Mesh_quiver_d.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={63.591} image="images/Mesh_quiver_d.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={63.591} image="images/Mesh_quiver_d.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={63.591} image="images/Mesh_quiver_d.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={63.591} image="images/Mesh_quiver_d.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={63.591} image="images/Mesh_quiver_d.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={63.591} image="images/Mesh_quiver_d.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={63.591} image="images/Mesh_quiver_d.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={63.591} image="images/Mesh_quiver_d.png" className={"mx-2 " + style.item}></ShopItem>
                    <ShopItem width="auto" height="auto" price={63.591} image="images/Mesh_quiver_d.png" className={"mx-2 " + style.item}></ShopItem>
                </ShopRow>
            </div>
        </>
    );
}