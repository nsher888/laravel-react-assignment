import PropTypes from "prop-types";

const FormHeaderTitle = ({ title, additionalClassName }) => {
  return (
    <p
      className={`mb-2 text-sm font-bold text-gray-700 ${additionalClassName}`}
    >
      {title}
    </p>
  );
};

FormHeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  additionalClassName: PropTypes.string,
};

export default FormHeaderTitle;
