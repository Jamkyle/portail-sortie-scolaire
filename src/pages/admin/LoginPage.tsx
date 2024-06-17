import FormComponent from "@/components/form/FormComponent";
import shapeLoginForm from "@/utils/shapeLoginForm.json";
import { FormEvent } from "react";
import api from "@/config/api.json";
const LoginPage = () => {
  const handleOnSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const dataLogin = {
      username: data.get("username"),
      password: data.get("password"),
    };
    const resp = await fetch(`${api.url}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataLogin),
    });

    const user = await resp.json();
    console.log("user", user);
  };
  return (
    <>
      <FormComponent shapeForms={shapeLoginForm} onSubmit={handleOnSubmit} />
    </>
  );
};

export default LoginPage;
