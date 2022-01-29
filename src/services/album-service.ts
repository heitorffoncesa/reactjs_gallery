import api from "./api";

export const getAlbums = () => api.get("/albums")

export const getAlbum = (id: number) => api.get(`/albums/${id}`)

export const getPhotos = (id: number) => api.get(`/photos?albumId=${id}`)