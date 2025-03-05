import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import "./Login.css"

function Login() {
  return (
    <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
      <div class="input-container ic1">
        <input id="username" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="username" class="placeholder">Username</label>
      </div>
      <div class="input-container ic2">
        <input id="country" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="country" class="placeholder">Country</label>
      </div>
      <button type="text" class="submit">submit</button>
    </div>
  )
}

export default Login