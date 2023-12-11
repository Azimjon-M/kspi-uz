import React from 'react';

import { useRoutes } from 'react-router-dom'; 
import { routes } from '../../routes/index';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';


function App() {
    const isLang = useSelector((state) => state.reducerLang.isLang);
    let content = useRoutes(routes);
    const message = {
        uz: require('../../languages/uz.json'),
        ru: require('../../languages/ru.json'),
        en: require('../../languages/en.json'),
    }
    return (
        <div >
            <IntlProvider locale={isLang} messages={message[isLang]}>
                {content}
            </IntlProvider>
        </div>
    )
}

export default App;