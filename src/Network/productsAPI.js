import { axiosInstance } from "./axiosConfig";

export const getProductDetails = (id) => {
    return axiosInstance.get(`/movie/${id}`)
};

export const getProducts = () => {
    return axiosInstance.get("/movie/popular")
}