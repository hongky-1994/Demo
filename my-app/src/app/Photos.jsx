import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store/fetchData";
import PhotoHolder from "./photoHolder";

class Photos extends Component {
  state = {
    photos: [],
    startId: "",
    endId: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="row m-2">
          <div className="col">
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.fetchData(
                  "photos",
                  "https://jsonplaceholder.typicode.com/photos"
                );
              }}
            >
              Load Photo from server
            </button>
          </div>
          <div className="col">
            <input
              className="form-control "
              type="text"
              name="startId"
              placeholder="Start ID photo"
              value={this.state.startId}
              onChange={this.handleChange}
            />
          </div>
          <div className="col">
            <input
              className="form-control col"
              name="endId"
              type="text"
              placeholder="End ID photo"
              value={this.state.endID}
              onChange={this.handleChange}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-success"
              onClick={() => {
                let newPhotos = this.props.photos.slice(
                  this.state.startId * 1 - 1,
                  this.state.endId * 1
                );
                this.setState({ photos: newPhotos });
              }}
            >
              Show Photo
            </button>
          </div>
        </div>
        <div className="photo-container">
          {this.state.photos.map(photo => (
            <PhotoHolder key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ photos: state.photos });

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
