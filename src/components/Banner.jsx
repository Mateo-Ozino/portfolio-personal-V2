import { Divider } from './general_components/Divider'

export function Banner() {
  return (
    <section className="banner">
      <figure className='banner__foto'></figure>
      <h1>Mateo Ozino</h1>
      <Divider color={"#FA4F4F"}/>
      <h2>Front End Developer</h2>
    </section>
  )
}