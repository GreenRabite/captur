import React from 'react';

class CommentFormItem extends React.Component {
  constructor({props}) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.comment);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.formType === "update") {
      this.props.updateComment(this.state);
    }else {
      const comment = this.state;
      const photoId = parseInt(this.props.match.params.photoId);
      this.props.props.createComment((comment),photoId).then(()=>
      (this.props.handleCloseModal()));
    }
  }

  render(){
      return(
        <div>

          <form onSubmit={this.handleSubmit}>
            <div className="flex-box-container2"><div className="x-icon" onClick={this.props.handleCloseModal}>X</div></div>
            <div className="input-field">
              <label> <br/>
                <textarea name="textarea" placeholder="Add your comment here" rows="8" cols="20" onChange={this.update('body')} value={this.state.body}/>
              </label><br/><br/>
            </div>
        <div className="center-bttn">
          <button className="main-bttn-form" type="submit">Submit</button>
        </div>
        </form>
      </div>
    );
  }
}

export default CommentFormItem;
