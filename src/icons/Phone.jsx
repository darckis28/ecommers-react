const Phone = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      className="w-[16px] h-[16px] text-gray-400"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Phone;
