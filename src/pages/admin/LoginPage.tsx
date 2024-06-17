import FormComponent from "@/components/form/FormComponent";
import shapeLoginForm from "@/utils/shapeLoginForm.json";
import { FormEvent, useContext } from "react";
import api from "@/config/api.json";
import { UserContext } from "@/context/user/User";

import { Navigate, useLocation } from "react-router-dom";
const LoginPage = () => {
  const { setUser, user } = useContext(UserContext);
  const location = useLocation();
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

    const userData = await resp.json();
    setUser(userData);
  };
  return user?.token ? (
    <Navigate to={location?.state?.from || "/"} />
  ) : (
    <>
      <FormComponent shapeForms={shapeLoginForm} onSubmit={handleOnSubmit} />
    </>
  );
};

export default LoginPage;
