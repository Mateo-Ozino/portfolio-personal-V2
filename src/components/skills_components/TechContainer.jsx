import { useTranslation } from "react-i18next"

export function TechContainer() {
  const { t } = useTranslation()

  const techImages = Object.values(import.meta.glob('../../assets/tech_logo/*.{png,jpg,jpeg,PNG,JPEG,svg,webp}', { eager: true, query: '?url', import: 'default' }))

  return (
    <section className="tech-container" id="tech-container">
      <h2>{t('techsTitle')}</h2>
      <div className="tech-container__images">
        {
          techImages.map((imageUrl, index) => {
            return (
              <figure key={index}>
                <img src={imageUrl} />
              </figure>
            )
          })
        }
      </div>
    </section>
  )
}