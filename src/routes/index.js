import React from "react";
import Root from "../root/index";

import Main from "../pages/Main";
import News from "../pages/News";
import New from "../pages/New";
import VirQabulxona from "../pages/VirQabulxona";
import VideoMaruzalar from "../pages/VideoMaruzalar";
import Qabul from "../pages/Qabul";
import OnlineKuzatish from "../pages/OnlineKuzatish";
import Rekvizitlar from "../pages/Rekvizitlar";
import InstitutTuzilmasi from "../pages/InstitutTuzilmasi";
import InstitutKengashi from "../pages/InstitutKengashi";
import InstitutHaqida from "../pages/InstitutHaqida";
import Rektorat from "../pages/Tuzilma/Rektorat";
import Kafedralar from "../pages/Tuzilma/Kafedralar";
import Markazlar from "../pages/Tuzilma/Markazlar";
import Fakultetlar from "../pages/Tuzilma/Fakultetlar";
import Bolimlar from "../pages/Tuzilma/Bolimlar";

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
            {
                element: <Rekvizitlar />,
                path: '/rekvizitlar'
            },
            {
                element: <InstitutTuzilmasi />,
                path: '/institut-tuzilma'
            },
            {
                element: <InstitutKengashi />,
                path: '/institut-kengashi'
            },
            {
                element: <InstitutHaqida />,
                path: '/institut-haqida'
            },
            {
                element: <Rektorat />,
                path: '/rektorat'
            },
            {
                element: <Markazlar />,
                path: '/markazlar'
            },
            {
                element: <Kafedralar />,
                path: '/kafedralar'
            },
            {
                element: <Fakultetlar />,
                path: '/fakultetlar'
            },
            {
                element: <Bolimlar />,
                path: '/bolimlar'
            },
        ],
    },
];