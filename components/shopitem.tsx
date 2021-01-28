import React from "react";
import EPages from "../lib/EPages";
import Image from "next/image";
import style from "./ShopItem.module.scss";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

type Props = {
    image: string;
    price: number;
    width: string;
    height: string;
    className?: string;
}

const ShopItem : React.FC<Props> = (props) => {
    return (     
        <div className={"d-flex flex-column " + style.item + " " + props.className} style={{width: props.width, height: props.height}}>
            <img src={props.image} alt=""/>
            <p>{props.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2, currency: 'USD'}) + "$"}</p>
        </div>
    );
};

export default ShopItem;