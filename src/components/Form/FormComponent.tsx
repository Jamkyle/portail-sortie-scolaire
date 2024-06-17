import InputComponent from "@/components/inputComponent/InputComponent";


const FormComponent = ({ shapeForms }: FormProps) => {
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {shapeForms.map((section) => {
          return (
            <div className="">
              <span className="block text-gray-700 text-sm font-bold mb-2">{section.sectionLabel}</span>
              {section.fields.map((ele) => {
                return (
                  <InputComponent item={ele}/>
                );
              })}
            </div>
          );
        })}
        <button type="submit" className="btn bg-teal-500">
          Valider
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
