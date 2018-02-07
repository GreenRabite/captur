export const fetchPhotos = () => (
  $.ajax({
    method: 'GET',
    url: `api/photos`
  })
);

export const fetchPhoto = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const updatePhoto = (photo) => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: {photo}
  })
);

export const createPhoto = (photo) => {
  console.log(photo);
  return $.ajax({
    method: 'POST',
    url: `api/photos`,
    data: photo,
    processData: false,
    contentType: false
  });
};

export const deletePhoto = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);
