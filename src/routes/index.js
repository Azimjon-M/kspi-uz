import React from "react";
import Root from "../root/index";

import Main from "../pages/Main";
import News from "../pages/News";
import New from "../pages/New";
import VirQabulxona from "../pages/VirQabulxona";
import VideoMaruzalar from "../pages/VideoMaruzalar";
import Qabul from "../pages/Qabul";
import OnlineKuzatish from "../pages/OnlineKuzatish";

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
            {
                element: <New />,
                path: '/yangiliklar/:id',
            },
            {
                element: <VirQabulxona />,
                path: '/qabulxona'
            },
            {
                element: <VideoMaruzalar />,
                path: '/videomaruza'
            },
            {
                element: <Qabul />,
                path: '/qabul'
            },
            {
                element: <OnlineKuzatish />,
                path: '/kuzatish'
            },
        ],
    },
];