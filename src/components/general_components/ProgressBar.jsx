import PropTypes from "prop-types";

export function ProgressBar({ progress }) {
  return (
    <div className="w-full rounded-full h-2.5 progress-bar">
      <div className="h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number
};