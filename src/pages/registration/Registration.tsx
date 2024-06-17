import Form from "@/components/form/FormComponent";
import shapeForm from "@/utils/shapeForm.json";
import { FormEvent } from "react";

const RegistrationPage = () => {
  const handleOnSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    console.log("data", data);
  };
  return <Form shapeForms={shapeForm} onSubmit={handleOnSubmit} />;
};
export default RegistrationPage;
