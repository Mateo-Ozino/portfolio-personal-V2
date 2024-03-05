import { useTranslation } from "react-i18next"
import { SectionTitle } from "./general_components/SectionTitle"

export function About() {
  const { t } = useTranslation()

  return (
    <section className="about" id="about">
      <SectionTitle>
        {t('aboutTitle')}
      </SectionTitle>
      <section className="about__content">
        <article>
          <span>
            {t('about1')}
          </span>
          <span>
            {t('about2')}
          </span>
        </article>
        <article>
          <span>
            {t('about3')} 
          </span>
          <span>
            {t('about4')}
          </span>
        </article>
      </section>
    </section>
  )
}