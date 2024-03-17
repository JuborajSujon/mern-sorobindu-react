import PropTypes from "prop-types";
const SigleDeveloper = (props) => {
  const { name, skill, photo } = props;
  return (
    <div className="shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <img className="rounded-md h-full" src={photo} alt={name} />
      <div>
        <h3 className="text-xl font-bold mt-3">{name}</h3>
        <p className="font-medium text-blue-600">{skill}</p>
      </div>
    </div>
  );
};

export default SigleDeveloper;

SigleDeveloper.propTypes = {
  name: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
