const SPSVerticalCard =({ icon, title, desc, li, bgGradient, textColor }) => {
    return (
    <div className={`w-80 h-[600px] p-8 flex flex-col rounded-2xl bg-gradient-to-r ${bgGradient} ${textColor} shadow-lg overflow-hidden`}>
      <div className="flex flex-row text-xl items-center mb-4">
        <div className="mr-3">{icon}</div>
        <h3 className="font-semibold text-xl">{title}</h3>
      </div>
      <div className="mb-6 flex-grow overflow-y-auto scrollbar-hide">
        <p className="text-justify text-sm leading-relaxed">
          {desc}
        </p>
      </div>
      <ul className="space-y-3">
        {li.map((item, index) => (
          <li key={index} className="flex justify-between items-center border-b border-white/30 pb-2">
            <span className="text-sm">{item}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SPSVerticalCard;