import React from "react"
import { Container } from "../pages-style/tourist.style"
const Tourist = () => {
  return (
    <Container>
      <form
        method="POST"
        name="tourist"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="tourist" />

        <input type="text" name="name" id="name" placeholder="name" />

        <input type="email" name="email" id="email" placeholder="email" />

        <textarea name="message" id="message" rows="5" placeholder="message" />

        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </Container>
  )
}

export default Tourist
