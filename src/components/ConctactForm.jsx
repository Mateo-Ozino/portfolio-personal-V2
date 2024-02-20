import { SectionTitle } from "./general_components/SectionTitle"
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';

export function ContactForm() {
  useEffect(() => emailjs.init("-nBrsTfk4nkn9SufI"), []);

  const [contactResult, setContactResult] = useState(false)
  const [contactSuccess, setContactSuccess] = useState("")

  const { register, handleSubmit, reset, formState: {errors} } = useForm()

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Correo
    mensaje: /^[a-zA-Z0-9,.!?¡¿\s"()]+$/, //Letras y símbolos
  }

  const onSubmit = handleSubmit(data => {
    try{ 
      emailjs.send('service_drwo6z8', 'contact_form', {
        nombre: data.name,
        mail: data.mail,
        mensage: data.message
      })      
    } catch (error) {
      alert(error)
      setContactResult(false)
    } finally {
      reset()
      setContactResult(true)
      setContactSuccess("Email enviado correctamente!")
    }
  })

  const fieldRequired = "Este campo es obligatorio"

  const fieldIncorrect = "El contenido es incorrecto"

  return (
    <section className="contact" id="contact">
      <SectionTitle>Contactame</SectionTitle>
      <div className="contact__container">
        <form onSubmit={e => e.preventDefault()}>
          <div className="contact__inputs-container w-full">
            <fieldset>
              <input 
                type="text" 
                className="w-full px-6 py-3"
                name="name"
                id="name"
                placeholder="Nombre y apellido"
                {...register("name", {
                  required: {
                    value: true,
                    message: fieldRequired,
                  },
                  pattern: {
                    value: expresiones.nombre,
                    message: fieldIncorrect
                  }
                })}
              />
              <p>{errors.name?.message}</p>
            </fieldset>
            <fieldset>
              <input 
                type="email"
                className="w-full px-6 py-3"
                name="mail"
                id="mail"
                placeholder="Correo Electrónico"
                {...register("mail", {
                  required: {
                    value: true,
                    message: fieldRequired,
                  },
                  pattern: {
                    value: expresiones.mail,
                    message: fieldIncorrect
                  }
                })} 
              />
              <p>{errors.mail?.message}</p>
            </fieldset>
            <fieldset>
              <textarea 
                rows="4"
                className="w-full resize-none py-3 px-6"
                name="message"
                id="message"
                placeholder="Mensaje"
                {...register("mensaje", {
                  required: {
                    value: true,
                    message: fieldRequired,
                  },
                  pattern: {
                    value: expresiones.mensaje,
                    message: fieldIncorrect
                  }
                })} 
              />
              <p>{errors.mensaje?.message}</p>
            </fieldset>
          </div>
          <div className="contact__button-container w-full">
            <button className="py-3 px-8" onClick={onSubmit}>Enviar</button>
          </div>
          <div className={"result " + (contactResult ? "good-result" : "bad-result")}>
            <h4>
              {contactSuccess}
            </h4>
          </div>
        </form>
      </div>
    </section>
  )
}

