const InputForm = ({
  placeholder,
  icon,
  type,
  clasname,
  register,
  error,
  defaul,
}) => {
  return (
    <>
      <div className={clasname}>
        <div className="relative">
          <input
            defaultValue={defaul}
            type={type}
            className="w-full rounded-lg bg-[#f0f0f0] border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder={placeholder}
            {...register}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            {icon}
          </span>
        </div>
        {error && <p className="text-red-500 mt-1 text-sm">{error.message}</p>}
      </div>
    </>
  );
};
export default InputForm;
