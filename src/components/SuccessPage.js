const successSubjects = {
  '\u0425\u04af\u0441\u044d\u043b\u0442': '\u0445\u04af\u0441\u044d\u043b\u0442',
  '\u0413\u043e\u043c\u0434\u043e\u043b': '\u0433\u043e\u043c\u0434\u043e\u043b',
  '\u0422\u0430\u043b\u0430\u0440\u0445\u0430\u043b': '\u0442\u0430\u043b\u0430\u0440\u0445\u0430\u043b',
};

export default function SuccessPage({ feedbackType = '\u0425\u04af\u0441\u044d\u043b\u0442', onReset }) {
  const successSubject = successSubjects[feedbackType] || successSubjects['\u0425\u04af\u0441\u044d\u043b\u0442'];

  return (
    <div className="w-full h-screen bg-[#0048BA] flex items-center justify-center animate-fadeIn p-4 lg:p-10">
      <div className="w-full min-h-[92vh] max-h-[96vh] bg-[#F8FAFC] rounded-3xl flex flex-col overflow-hidden border border-white/90 shadow-[inset_14px_14px_30px_rgba(15,23,42,0.14),inset_-14px_-14px_30px_rgba(255,255,255,0.98),0_18px_34px_rgba(0,0,0,0.18)] lg:min-h-[720px] lg:max-h-[860px] lg:max-w-[1320px] lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[auto_1fr] lg:rounded-[34px]">
        <div className="flex justify-center pt-[3vh] pb-[2vh] lg:col-start-1 lg:row-start-1 lg:justify-center lg:px-14 lg:pt-16 lg:pb-0">
          <img src={`${process.env.PUBLIC_URL}/bichil_logo.png`} alt="logo" className="h-[12vh] lg:h-36 w-auto object-contain" />
        </div>

        <div className="flex-1 flex flex-col items-center px-8 lg:contents">
          <div className="w-[21vh] h-[21vh] mt-[8vh] mb-[4vh] rounded-[2.25rem] bg-[#EEF2F7] flex items-center justify-center success-circle success-circle-bounce shadow-[inset_12px_12px_26px_rgba(100,116,139,0.3),inset_-12px_-12px_26px_rgba(255,255,255,0.95)] lg:col-start-1 lg:row-start-2 lg:self-center lg:justify-self-center lg:-mt-12 lg:mb-0 lg:w-[330px] lg:h-[330px] lg:rounded-[46px] lg:shadow-[inset_20px_20px_40px_rgba(100,116,139,0.28),inset_-20px_-20px_40px_rgba(255,255,255,0.95)]">
            <img src={`${process.env.PUBLIC_URL}/send.gif`} alt="sent" className="w-[18vh] h-[18vh] lg:w-[285px] lg:h-[285px] object-contain" />
          </div>

          <div className="w-full mt-auto mb-[6vh] flex flex-col items-center -translate-y-[2vh] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mt-0 lg:mb-0 lg:-translate-x-14 lg:self-stretch lg:justify-center lg:items-start lg:px-14 lg:py-14">
            <div className="w-full lg:max-w-[640px] lg:flex lg:flex-col lg:items-center">
              <h2 className="font-montserrat text-gray-800 font-black text-center leading-snug text-[2.3vh] lg:text-[42px] lg:leading-tight mb-[1.5vh] lg:mb-6">{`\u0422\u0430\u043d\u044b ${successSubject}`}<br /><span className="whitespace-nowrap">{`\u0430\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0438\u043b\u0433\u044d\u044d\u0433\u0434\u043b\u044d\u044d.`}</span></h2>
              <p className="font-poppins text-gray-400 text-center leading-relaxed text-[1.3vh] lg:text-lg lg:max-w-[520px]">{`\u0422\u0430\u043d\u044b \u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0434\u0430\u0433\u0443\u0443 \u0442\u043e\u0434\u0440\u0443\u0443\u043b\u0430\u0445 \u0437\u04af\u0439\u043b\u0441 \u0433\u0430\u0440\u0432\u0430\u043b \u0442\u0430\u043d\u0442\u0430\u0439`}<br className="hidden lg:block" />{`\u044d\u0440\u0433\u044d\u043d \u0445\u043e\u043b\u0431\u043e\u0433\u0434\u043e\u0445 \u0431\u043e\u043b\u043d\u043e. \u0422\u0430\u043d\u0434 \u0431\u0430\u044f\u0440\u043b\u0430\u043b\u0430\u0430.`}</p>
            </div>

            <div className="w-full px-[6vw] lg:px-0 mt-12 lg:mt-20 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5 lg:max-w-[600px]">
              <button className="w-full py-[1.6vh] lg:py-5 font-opensans bg-[#0048BA] rounded-full font-extrabold tracking-wider text-white text-[1.5vh] lg:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.97] transition-all">{`\u0425\u043e\u043b\u0431\u043e\u043e \u0431\u0430\u0440\u0438\u0445`}</button>
              <button onClick={onReset} className="w-full py-[1.6vh] lg:py-5 font-opensans bg-[#22c55e] rounded-full font-extrabold tracking-wider text-white text-[1.5vh] lg:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.97] transition-all">{`\u041d\u04af\u04af\u0440 \u0445\u0443\u0443\u0434\u0430\u0441 \u0440\u0443\u0443 \u0437\u043e\u0447\u043b\u043e\u0445`}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
