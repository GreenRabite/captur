import * as APIPhoto from "../utils/photo_api_utils";
import { loading } from './ui_actions';

// export constants
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";


export const receiveAllPhotos = (photos) =>({
    type: RECEIVE_ALL_PHOTOS,
    photos
});

export const receivePhoto = (photo) => {
  return {type: RECEIVE_PHOTO,
  photo};
};

export const removePhoto = (photoId) => ({
  type: REMOVE_PHOTO,
  photoId
});

export const fetchPhotos = () => (dispatch) => {
  dispatch(loading());
  return APIPhoto.fetchPhotos().then((photos)=>
  (dispatch(receiveAllPhotos(photos))));
};

export const fetchPhoto = (id) => (dispatch) => {
  dispatch(loading());
  return APIPhoto.fetchPhoto(id).then((photo)=>
  (dispatch(receivePhoto(photo))));
};

export const fetchMorePhotos = (num) => (dispatch) => {
  return APIPhoto.fetchMorePhotos(num).then((photos) => 
  dispatch(receiveAllPhotos(photos)));
}

export const createPhoto = (photo) => (dispatch) => (
  APIPhoto.createPhoto(photo).then((newPhoto)=> (dispatch(receivePhoto(newPhoto))))
);

export const createPhotoNewAlbum = (photo) => (dispatch) => (
  APIPhoto.createPhotoNewAlbum(photo).then((newPhoto)=> (dispatch(receivePhoto(newPhoto))))
);

export const createPhotoBrandNewAlbum = (photo) => (dispatch) => (
  APIPhoto.createPhotoBrandNewAlbum(photo).then((newPhoto)=> (dispatch(receivePhoto(newPhoto))))
);

export const updatePhoto = (photo) => (dispatch) => (
  APIPhoto.updatePhoto(photo).then((newPhoto)=> (dispatch(receivePhoto(newPhoto))))
);

export const deletePhoto = (id) => (dispatch) => (
  APIPhoto.deletePhoto(id).then((deletedPhoto)=> (dispatch(removePhoto(deletedPhoto))))
);
