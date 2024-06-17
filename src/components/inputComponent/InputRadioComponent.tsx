const InputRadioComponent = ({ item }: { item: ShapeFormValues }) => {
  return item?.options?.map((opt) => (
    <div className="flex flex-wrap flex-row">
      <input
        className="flex align-item-center"
        id={opt.id}
        name={item.label}
        type={item.type}
        placeholder={item.placeholder}
      />
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
        htmlFor={opt.id}
      >
        {opt.label}
      </label>
    </div>
  ));
};
export default InputRadioComponent;
