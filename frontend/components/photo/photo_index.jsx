import React from 'react';
import PhotoIndexItem from './photo_index_item';
import LoadingScreen from './../ui_loading_screen';

class PhotoIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPhotos();
  }


  render(){
    let PhotoIndexItems = this.props.photos.map((photo)=> {
      return <PhotoIndexItem key={photo.id} photo={photo}/>;
    });
    if (this.props.loading) {
      return(
        <LoadingScreen />
      );
    }else{
      return(
        <div className="appBG captrBG">
          <div className="masonry">
            {PhotoIndexItems}
          </div>
        </div>
      );
    }
  }
}


export default PhotoIndex;
