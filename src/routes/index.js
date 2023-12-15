import React from "react";
import Root from "../root/index";

import Main from "../pages/Main";
import News from "../pages/News"

export const routes = [
    {
        element: <Root />,
        path: '/',
        children: [
            {
                element: <Main />,
                path: '/'
            },
            {
                element: <News />,
                path: '/yangiliklar'
            },
        ],
    },
];