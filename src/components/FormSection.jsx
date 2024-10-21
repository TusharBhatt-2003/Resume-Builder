
const FormSection = ({ title, name, placeholder, value, onChange }) => {
  return (
    <div className="mb-4 ">
      <label className="block text-[#242424] font-bold mb-2 teko">{title}:</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[80%] p-2 teko border border-[#242424] bg-[#fffefb] rounded-lg"
      />
    </div>
  );
};

export default FormSection;
