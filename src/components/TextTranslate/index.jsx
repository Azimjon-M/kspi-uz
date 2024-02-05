import React, { useEffect, useState } from 'react'
import data from '../../db.json'
import { useSelector } from 'react-redux';

const TextTranslate = ({id="X_ID"}) => {
    const lang = useSelector((state) => state.reducerLang.isLang);
    const [text, setText] = useState();

    
    useEffect(()=> {
    if (!id === "X_ID") {
        setText(data[lang][id])
    } else {
        console.log("'TextTranslate'ga ID kiritilmagan! ERR: ");
    }
    }, [lang, id])

    return (
        <>{text}</>
    )
}

export default TextTranslate