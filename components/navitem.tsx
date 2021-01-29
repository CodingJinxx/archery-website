import React from "react";
import EPages from "../lib/EPages";
import Image from "next/image";
import style from "./NavItem.module.scss";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

type Props = {
    href: string;
    isCurrent: boolean;
    className?: string;
};

const NavItem: React.FC<Props> = (props) => {
    return (     
    <li className="nav-item">
        {
        props.isCurrent  ?
            <a className={style.active + " nav-link active " + props.className } aria-current="page" href={`${process.env.BACKEND_URL}${props.href}`}>{props.children}</a>
        :
            <a className={"nav-link " + props.className} href={`${process.env.BACKEND_URL}${props.href}`}>{props.children}</a>
        }
    </li>
    );
};

export default NavItem;