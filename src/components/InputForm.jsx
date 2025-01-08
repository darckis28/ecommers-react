const InputForm = ({ placeholder, icon, type, clasname }) => {
  return (
    <div className={clasname}>
      <div className="relative">
        <input
          type={type}
          className="w-full rounded-lg bg-[#f0f0f0] border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder={placeholder}
        />

        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          {icon}
        </span>
      </div>
    </div>
  );
};
export default InputForm;
