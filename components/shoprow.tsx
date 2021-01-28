import React from "react";
import EPages from "../lib/EPages";
import Image from "next/image";
import style from "./ShopRow.module.scss";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

type Props = {
    title: string;
};

const ShopRow: React.FC<Props> = (props) => {
  return (
      <>
    <div className="row">
        <h2>{props.title}</h2>
    </div>
    <div className="row">
      <div className={style.list}>
          {props.children}
      </div>
    </div>
    </>
  );
};

export default ShopRow;
