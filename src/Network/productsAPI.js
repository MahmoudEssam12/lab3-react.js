import { axiosInstance } from "./axiosConfig";

export const getProductDetails = (id, lang) => {
    return axiosInstance.get(`/movie/${id}&language=${lang}`)
};

export const getProducts = (page, lang) => {
    return axiosInstance.get(`/movie/popular${process.env.REACT_APP_APIKEY}&page=${page}&language=${lang}`)
}

export const searchForMovie = (keyword) => {
    return axiosInstance.get(`/search/movie${process.env.REACT_APP_APIKEY}&query=${keyword}`)
}