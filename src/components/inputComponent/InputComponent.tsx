const InputComponent = ({ item }: { item: ShapeFormValues }) => {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={item.label}
      >
        {item.label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={item.label}
        name={item.label}
        type={item.type}
        placeholder={item.placeholder}
      />
    </div>
  );
};
export default InputComponent;
