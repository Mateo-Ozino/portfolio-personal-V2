const techImages = Object.values(import.meta.glob('../../assets/tech_logo/*.{png,jpg,jpeg,PNG,JPEG,svg}', { eager: true, as: 'url' }))

export function TechContainer() {
  let counter = 0

  return (
    <section className="tech-container" id="tech-container">
      <h2>Herramientas y Frameworks</h2>
      <div className="tech-container__images">
        {
          techImages.map(imageUrl => {
            counter += 1
            return (
              <figure key={counter}>
                <img src={imageUrl} />
              </figure>
            )
          })
        }
      </div>
    </section>
  )
}