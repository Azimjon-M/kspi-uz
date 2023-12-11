import React, { useState } from "react";
import kspi_logo from "../../assets/icons/logo_kspi.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useFormik } from "formik";

function Navbar() {
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

    return (
        <nav className="flex border border-black bg-white shadow-xl">
            <div className="min-w-[250px] flex items-center gap-x-[10px] my-[25px] mx-[60px]">
                <img className="w-[60px] h-auto" src={kspi_logo} alt="icon" />
                <p className="text-[18px] text-[#004269] font-bold">
                    <FormattedMessage id="logo" />
                </p>
            </div>
            <div className="w-full flex flex-col">
                <div className="flex justify-between bg-[#004269] text-white px-[20px] rounded-bl-lg">
                    <ul className="flex gap-x-[20px] text-[15px] font-medium">
                        <li className="py-[4px]">
                            <Link
                                target="_blank"
                                to="https://talaba.kspi.uz/dashboard/login"
                            >
                                <FormattedMessage id="hemis-tizimi" />
                            </Link>
                        </li>
                        <li className="cursor-pointer py-[4px]">
                            {/* Dropdown Boshqa saytlarga Yo'llantiriladi */}
                            <FormattedMessage id="institut-jurnali" />
                        </li>
                        <li className="py-[4px]">
                            <Link
                                target="_blank"
                                to="https://conferences.kspi.uz/"
                            >
                                <FormattedMessage id="konferensyalar" />
                            </Link>
                        </li>
                        <li className="py-[4px]">
                            <Link target="_blank" to="https://my.edu.uz/">
                                <FormattedMessage id="ikkinchi-talim" />
                            </Link>
                        </li>
                        <li className="py-[4px]">
                            {/* O'zimizni Page */}
                            <Link to="">
                                <FormattedMessage id="ochiq-malumotlar" />
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
                <div className="w-full h-full flex items-center justify-center">
                    <ul className="flex items-center">
                        <li>Tuzilma</li>
                        <li>Faoliyat</li>
                        <li>Tuzilma</li>
                        <li>Yangiliklar</li>
                        <li>Talabalar</li>
                        <li>Abturient</li>
                        <li>Language</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
