import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

export function Divider({ color }) {
  return (
    <div className="divider-custom divider-light">
      <div className="divider-custom-line" style={{ backgroundColor: color }}></div>
      <div className="divider-custom-icon" style={{ color: color }}>
        <FaStar />
      </div>
      <div className="divider-custom-line" style={{ backgroundColor: color }}></div>
    </div>
  )
}

Divider.propTypes = {
  color: PropTypes.string
};