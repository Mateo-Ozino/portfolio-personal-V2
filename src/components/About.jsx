import { SectionTitle } from "./SectionTitle"

export function About() {
  return (
    <section className="about" id="about">
      <SectionTitle>
        Sobre Mí
      </SectionTitle>
      <section className="about__content">
        <article>
          <span>
            Hola! Soy Mateo Ozino, Desarrollador Web Front End. Siempre fuí muy cercano a la tecnología, me resulta un mundo muy interesante y lleno de oportunidades. Pero no fue hasta fines de 2021 que decidí introducirme del todo.
          </span>
          <span>
            Actualmente, estoy cursando la licenciatura en ciencias de la computación en la Universidad de Buenos Aires, donde aprendo sobre los fundamentos teóricos y prácticos de la programación, el análisis de datos, la inteligencia artificial y el diseño de sistemas.
          </span>
        </article>
        <article>
          <span>
            Además, he completado varios cursos y certificaciones en desarrollo web, tanto front-end como back-end, utilizando herramientas como MariaDB, MySQL, HTML, CSS, JavaScript, Python y Django. 
          </span>
          <span>
            Mi objetivo es seguir formándome y ampliando mis conocimientos y habilidades en estas áreas, así como en otras relacionadas con el desarrollo de aplicaciones web.
          </span>
        </article>
      </section>
    </section>
  )
}