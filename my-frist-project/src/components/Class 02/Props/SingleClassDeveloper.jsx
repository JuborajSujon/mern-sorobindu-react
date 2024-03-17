import { Component } from "react";
import PropTypes from "prop-types";

class SingleClassDeveloper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, skill, photo } = this.props;
    return (
      <div className="shadow-lg rounded-lg p-4 flex flex-col justify-between">
        <img className="rounded-md h-full" src={photo} alt={name} />
        <div>
          <h3 className="text-xl font-bold mt-3">{name}</h3>
          <p className="font-medium text-blue-600">{skill}</p>
        </div>
      </div>
    );
  }
}

SingleClassDeveloper.propTypes = {
  name: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default SingleClassDeveloper;
