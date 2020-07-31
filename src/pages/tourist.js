import React from "react"

const Tourist = () => {
  return (
    <div>
      <form
        method="post"
        name="tourist"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label>
          Name
          <input type="text" name="name" id="name" placeholder="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </div>
  )
}

export default Tourist
