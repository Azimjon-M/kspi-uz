import React from "react";
import { Outlet } from "react-router-dom";
import MarqueeCom from "../components/Marquee";

const Root = () => {
    return (
        <div>
            <MarqueeCom />
            <Outlet />
        </div>
    );
};

export default Root;
