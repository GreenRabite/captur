import { connect } from 'react-redux';
import { updatePhoto, createPhoto } from './../../actions/photo_actions';
import { fetchAlbum } from './../../actions/album_actions';
import PhotoForm from './photo_form';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) =>{
  let photo = {title: "", description: "", img_url: "", album_id: ownProps.match.params.albumId};
  let formType= "new";
  if (ownProps.location.pathname.includes('edit')) {
    // photo = Object.assign({}, photo, state.entities.photos[ownProps.match.params.photoId]);
    photo = state.entities.photos[ownProps.match.params.photoId];
    formType = "update";
  }
  return ({
    currentUser: state.session.currentUser,
    photo,
    formType,
    redirectToNewPath: false
  });
};

const mapDispatchToProps = (dispatch) => ({
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  createPhoto: (newPhoto)=> dispatch(createPhoto(newPhoto)),
  fetchAlbum: (id)=>dispatch(fetchAlbum(id))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PhotoForm));
