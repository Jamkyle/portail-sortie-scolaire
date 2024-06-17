import Form from "@/components/form/FormComponent";
import shapeForm from "@/utils/shapeForm.json";
import { FormEvent } from "react";
import api from "@/config/api.json";
const RegistrationPage = () => {
  const handleOnSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const dataToSend = {
      firstName: data.get('Prénom')
    }
    fetch(`${api.url}/forms`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
  };
  return <Form shapeForms={shapeForm} onSubmit={handleOnSubmit} />;
};
export default RegistrationPage;
