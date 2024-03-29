import axiosInstance from "./index";

const endPoint = "home/elon/get/";

const get = () => axiosInstance.get(endPoint);

const APIElon = {get}

export default APIElon;