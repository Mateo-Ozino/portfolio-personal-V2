import PropTypes from "prop-types";

export function SectionTitle({ children }) {
  return (
    <section className="section-title">
      <h1>{children}</h1>
      <div className="title-line"></div>
    </section>
  )
}

SectionTitle.propTypes = {
  children: PropTypes.string,
};