import Email from "../icons/Email";

const Contact = () => {
  return (
    <section className="bg-black px-4 pt-8 pb-6 rounded-xl flex flex-col md:flex-row md:items-center md:justify-between ">
      <h2 className="text-[32px] leading-8 text-white  font-extrabold font-integralCF mb-6 flex-1">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h2>
      <div className="flex-1">
        <div className="relative mb-3 ">
          <input
            className="w-full bg-white rounded-lg p-2 pl-8"
            type="text"
            placeholder="Enter your email address"
          />
          <span className="absolute top-[11px] left-2">
            <Email />
          </span>
        </div>
        <button className="w-full bg-white rounded-lg py-2 ">
          Subscribe to Newsletter
        </button>
      </div>
    </section>
  );
};
export default Contact;
