import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';


function Login(props){
  console.log(props)
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /*<form onSubmit={handleSubmit(onSubmit)}>*/
    <form onSubmit={props.handleLogin}>
      <div className="form-group">
      <label>Etunimi</label>
      <input className="form-control" type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
      </div>
      <div className="form-group">
      <label>Sukunimi</label>
      <input className="form-control" type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
      </div>
      <div className="form-group">
      <label>Sähköpostiosoite</label>
      <input className="form-control" type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      </div>
      <div className="form-group">
      <label>Matkapuhelinnumero</label>
      <input className="form-control" type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
      </div>
      <button href="https://alligator.io">Lähetä</button>
    </form>
  );
}

export default Login;