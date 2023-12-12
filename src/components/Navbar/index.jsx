import React, { useState } from "react";
import kspi_logo from "../../assets/icons/logo_kspi.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {setLangUz, setLangRu, setLangEn} from "../../redux/moduls/language/action/";

import flag_1 from "../../assets/icons/flag-uz.png";
import flag_2 from "../../assets/icons/flag-ru.png";
import flag_3 from "../../assets/icons/flag-en.png";

function Navbar() {
    const dispatch = useDispatch()
    const isLang = useSelector((state) => state.reducerLang.isLang);

    const [isFocusedSearInp, setFocusedSearInp] = useState(false);

    // search
    const formik = useFormik({
        initialValues: {
            searchText: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm();
        },
    });
    const handleClickSearch = () => {
        if (isFocusedSearInp && formik.values.searchText) {
            formik.handleSubmit();
        } else {
            setFocusedSearInp(!isFocusedSearInp);
        }
    };
    const handleClickClose = () => {
        setFocusedSearInp(false);
    };
    // Change Language
    const handleClickLang = (lang) => {
        switch (lang) {
            case "uz":
                dispatch(setLangUz());
                break;
            case "ru":
                dispatch(setLangRu());
                break;
            case "en":
                dispatch(setLangEn());
                break;
            default:
                break;
        }
    };

    return (
        <nav className="flex justify-between bg-white shadow-2xl sticky z-50 px-8 py-4">
            {/* Doimo bor */}
            <Link to="/">
                <div className="w-[150px] lg:min-w-[250px] flex items-center gap-x-[10px] lg:my-[25px] lg:mx-[60px]">
                    <img
                        className="w-[35px] lg:w-[60px] h-auto"
                        src={kspi_logo}
                        alt="icon"
                    />
                    <p className="text-[14px] leading-4 lg:text-[18px] text-[#004269] font-bold">
                        <FormattedMessage id="navLogo" />
                    </p>
                </div>
            </Link>
            {/* lg dan bor */}
            <div className="w-full flex items-end justify-center flex-col">
                <div className="hidden lg:flex lg:justify-between bg-[#004269] text-white px-[20px] rounded-bl-lg ">
                    <ul className="flex gap-x-[20px] text-[15px] font-medium">
                        <li className="py-[4px]">
                            <Link
                                target="_blank"
                                to="https://talaba.kspi.uz/dashboard/login"
                            >
                                <FormattedMessage id="hedHemis-tizimi" />
                            </Link>
                        </li>
                        <li className="cursor-pointer py-[4px]">
                            {/* Dropdown Boshqa saytlarga Yo'llantiriladi */}
                            <FormattedMessage id="hedInstitut-jurnali" />
                        </li>
                        <li className="py-[4px]">
                            <Link
                                target="_blank"
                                to="https://conferences.kspi.uz/"
                            >
                                <FormattedMessage id="hedKonferensyalar" />
                            </Link>
                        </li>
                        <li className="py-[4px]">
                            <Link target="_blank" to="https://my.edu.uz/">
                                <FormattedMessage id="hedIkkinchi-talim" />
                            </Link>
                        </li>
                        <li className="py-[4px]">
                            {/* O'zimizni Page */}
                            <Link to="">
                                <FormattedMessage id="hedOchiq-malumotlar" />
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center justify-center">
                        <form onSubmit={formik.handleSubmit}>
                            <label
                                className="w-auto h-full flex items-center cursor-pointer"
                                htmlFor="searchText"
                            >
                                <input
                                    className={`${
                                        isFocusedSearInp
                                            ? "w-[200px] border-b-4 border-blue-400"
                                            : "w-[0px] -z-50"
                                    } style-transition-01 h-full focus:outline-none bg-inherit px-2`}
                                    placeholder="text..."
                                    onChange={formik.handleChange}
                                    value={formik.values.searchText}
                                    type="text"
                                    id="searchText"
                                />
                                <AiOutlineSearch
                                    onClick={() => handleClickSearch()}
                                    className={`${
                                        isFocusedSearInp &&
                                        !formik.values.searchText.trim()
                                            ? "hidden"
                                            : "inline-block"
                                    } text-[25px]`}
                                />
                                <AiOutlineClose
                                    onClick={() => handleClickClose()}
                                    className={`${
                                        !isFocusedSearInp ||
                                        formik.values.searchText.trim()
                                            ? "hidden"
                                            : "inline-block"
                                    } text-[25px] text-white`}
                                />
                            </label>
                        </form>
                    </div>
                </div>
                <div className="hidden w-full h-full lg:flex lg:items-center lg:justify-center">
                    <ul className="flex items-center gap-x-6 text-[22px] text-[#004269] font-semibold">
                        <li>
                            <FormattedMessage id="navYangiliklar" />
                        </li>
                        <li>
                            <FormattedMessage id="navInstitut" />
                        </li>
                        <li>
                            <FormattedMessage id="navFaoliyat" />
                        </li>
                        <li>
                            <FormattedMessage id="navTuzilma" />
                        </li>
                        <li>
                            <FormattedMessage id="navTalabalar" />
                        </li>
                        <li>
                            <FormattedMessage id="navAbiturient" />
                        </li>
                        <li>
                            <div className="flex items-end gap-x-2">
                                <img
                                    onClick={() => handleClickLang("uz")}
                                    className={` ${isLang === "uz" && 'border-b-[3px] border-[#004269]'} w-[35px] cursor-pointer`}
                                    src={flag_1}
                                    alt="flag uz"
                                />
                                <img
                                    onClick={() => handleClickLang("ru")}
                                    className={` ${isLang === "ru" && 'border-b-[3px] border-[#004269]'} w-[35px] cursor-pointer`}
                                    src={flag_2}
                                    alt="flag ru"
                                />
                                <img
                                    onClick={() => handleClickLang("en")}
                                    className={` ${isLang === "en" && 'border-b-[3px] border-[#004269]'} w-[35px] cursor-pointer`}
                                    src={flag_3}
                                    alt="flag en"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
                {/* lg ga qadar bor */}
                <button className="btn btn-outline lg:hidden flex items-center gap-x-2 font-medium">
                    <AiOutlineMenu />
                    MENU
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
