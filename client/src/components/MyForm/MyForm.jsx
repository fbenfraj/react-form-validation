import React from "react";
import { useForm } from "react-hook-form";
import "./MyForm.scss";

const MyForm = () => {
  const { register, watch, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="myform" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="lastname"
        id="lastname"
        className="myform-input"
        placeholder="Lastname"
        maxLength="20"
        ref={register({ required: true, minLength: 3 })}
      />
      {errors.lastname &&
        errors.lastname.type === "required" &&
        "Your lastname is required"}
      {errors.lastname &&
        errors.lastname.type === "minLength" &&
        "Your lastname must contain at least 3 characters."}

      <input
        type="text"
        name="firstname"
        id="firstname"
        className="myform-input"
        placeholder="Firstname"
        maxLength="20"
        ref={register({ required: true, minLength: 3 })}
      />
      {errors.firstname &&
        errors.firstname.type === "required" &&
        "Your firstname is required"}
      {errors.firstname &&
        errors.firstname.type === "minLength" &&
        "Your firstname must contain at least 3 characters."}

      <select
        name="gender"
        className="myform-select"
        ref={register({ required: true })}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input
        type="email"
        name="email"
        id="email"
        className="myform-input"
        placeholder="Email"
        ref={register({ required: true })}
      />
      {errors.email &&
        errors.email.type === "required" &&
        "Your email is required"}
      <input
        type="password"
        name="password"
        id="password"
        className="myform-input"
        placeholder="Password"
        ref={register({ required: true, minLength: 6 })}
      />
      {errors.password &&
        errors.password.type === "required" &&
        "Your password is required"}
      {errors.password &&
        errors.password.type === "minLength" &&
        "Your password must contain at least 6 characters."}
      <input
        type="password"
        name="password2"
        id="password2"
        className="myform-input"
        placeholder="Repeat password"
        ref={register({
          required: true,
          minLength: 6,
          validate: value => {
            return value === watch("password");
          }
        })}
      />
      {errors.password2 &&
        errors.password2.type === "required" &&
        "Please enter the same password again."}
      {errors.password2 &&
        errors.password2.type === "minLength" &&
        "Your password must contain at least 6 characters."}
      {errors.password2 &&
        errors.password2.type === "validate" &&
        "Passwords must match."}

      <section className="myform-checkbox">
        <div>
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            ref={register}
          />
          <label htmlFor="newsletter">Receive newsletter</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="conditions"
            name="conditions"
            ref={register({ required: true })}
          />
          <label htmlFor="conditions">I accept the Terms and Conditions</label>
        </div>
        {errors.conditions &&
          errors.conditions.type === "required" &&
          "Please accept our Terms and Conditions."}
      </section>

      <input type="submit" className="myform-input" value="OK" />
    </form>
  );
};

export default MyForm;
