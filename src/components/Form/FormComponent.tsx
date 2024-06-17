const FormComponent = ({ shapeForm }: FormProps) => {
    return (
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {shapeForm.map((ele) => {
            return (
              <div className="flex flex-wrap -mx-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor={ele.label}
                >
                  {ele.label}
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id={ele.label}
                  type={ele.type}
                  placeholder={ele.placeholder}
                />
                <p className="text-red-500 text-xs italic">champ requis, veuillez le remplir.</p>
              </div>
            );
          })}
          <button type='submit' className="btn bg-teal-500">Valider</button>
        </form>
      </div>
    );
  };
  
  export default FormComponent;
  