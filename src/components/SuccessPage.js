export default function SuccessPage({ onReset }) {
  return (
    <div className="w-full h-screen bg-[#0f0f2e] flex items-center justify-center animate-fadeIn p-4">
      <div className="w-full bg-white rounded-3xl flex flex-col overflow-hidden" style={{ maxHeight: '96vh', minHeight: '92vh' }}>
        <div className="flex justify-center" style={{ paddingTop: '3vh', paddingBottom: '2vh' }}>
          <img src="bichil_logo.png" alt="logo" className="object-contain" style={{ height: '12vh' }} />
        </div>

        <div className="flex-1 flex flex-col items-center px-8">
          <div className="rounded-full border-2 border-gray-300 flex items-center justify-center success-circle success-circle-bounce" style={{ width: '18vh', height: '18vh', marginTop: '8vh', marginBottom: '4vh' }}>
            <svg className="success-check" style={{ width: '7vh', height: '7vh' }} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div style={{ marginTop: 'auto', marginBottom: 'auto', transform: 'translateY(6vh)' }}>
            <h2 className="font-montserrat text-gray-800 font-black text-center leading-snug" style={{ fontSize: '2.3vh', marginBottom: '1.5vh' }}>{`\u0422\u0430\u043d\u044b \u0445\u04af\u0441\u044d\u043b\u0442`}<br />{`\u0430\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0438\u043b\u0433\u044d\u044d\u0433\u0434\u043b\u044d\u044d.`}</h2>
            <p className="font-poppins text-gray-400 text-center leading-relaxed" style={{ fontSize: '1.3vh' }}>{`\u0422\u0430\u043d\u044b \u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u0433 \u0434\u0430\u0440\u0443\u0443 \u043d\u044d\u0433\u0434\u04af\u04af\u043b\u044d\u043d \u0445\u0430\u043d\u0434\u0443\u0443\u043b\u0430\u0445 \u0431\u043e\u043b\u043d\u043e. \u0422\u0430\u043d\u0434 \u0431\u0430\u044f\u0440\u043b\u0430\u043b\u0430\u0430.`}</p>
          </div>

          <div className="w-full space-y-3" style={{ paddingLeft: '6vw', paddingRight: '6vw', marginBottom: '4vh' }}>
            <button className="w-full font-opensans bg-[#0048BA] rounded-full font-extrabold tracking-wider text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.97] transition-all" style={{ padding: '1.6vh 0', fontSize: '1.5vh' }}>{`\u0425\u043e\u043b\u0431\u043e\u043e \u0431\u0430\u0440\u0438\u0445`}</button>
            <button onClick={onReset} className="w-full font-opensans bg-[#22c55e] rounded-full font-extrabold tracking-wider text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.97] transition-all" style={{ padding: '1.6vh 0', fontSize: '1.5vh' }}>{`\u0421\u0430\u0439\u0442\u0440\u0443\u0443 \u0437\u043e\u0447\u043b\u043e\u0445`}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
