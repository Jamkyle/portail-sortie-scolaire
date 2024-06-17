import InputComponent from "@/components/inputComponent/InputComponent";
import InputRadioComponent from "@/components/inputComponent/InputRadioComponent";

const FormComponent = ({ shapeForms, onSubmit }: FormProps) => {
  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        {shapeForms.map((section) => {
          return (
            <div key={section.id}>
              <span className="block text-gray-700 text-sm font-bold mb-2">
                {section.sectionLabel}
              </span>
              {section.fields.map((ele) => {
                console.log(ele)
                return ele.type === "radio" ? (
                  <InputRadioComponent item={ele} key={section.id + ele.label}/>
                ) : (
                  <InputComponent item={ele} key={section.id + ele.label} />
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
