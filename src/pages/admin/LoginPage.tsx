import FormComponent from "@/components/form/FormComponent";
import shapeLoginForm from "@/utils/shapeLoginForm.json";
import { FormEvent } from "react";
const LoginPage = () => {
  const handleOnSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const dataLogin = {
      username: data.get("username"),
      password: data.get("password"),
    };
  };
  return (
    <>
      <FormComponent shapeForms={shapeLoginForm} onSubmit={handleOnSubmit} />
    </>
  );
};

export default LoginPage;
