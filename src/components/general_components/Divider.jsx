import { FaStar } from "react-icons/fa6";

export function Divider() {
  return (
    <div className="divider-custom divider-light">
      <div className="divider-custom-line"></div>
      <div className="divider-custom-icon">
        <FaStar />
      </div>
      <div className="divider-custom-line"></div>
    </div>
  )
}