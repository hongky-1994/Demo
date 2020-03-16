import React, { Component } from "react";

class PhotoHolder extends Component {
  render() {
    return (
      <div className="photoHolder">
        <div className="img-holder">
          <img src={this.props.photo.url} alt={this.props.photo.url} />
        </div>
        <div className="photo-album">
          Album no: {this.props.photo.albumId} - {this.props.photo.id}
        </div>
        <div className="photo-name">Title: {this.props.photo.title}</div>
      </div>
    );
  }
}
export default PhotoHolder;
