import React from "react";
import Root from "../root/index";

import Home from "../pages/Home";

export const routes = [
    {
        element: <Root />,
        path: '/',
        children: [
            {
                element: <Home />,
                path: '/'
            }
            // {
            //     element: < />,
            //     path: ''
            // },
        ],
    },
];