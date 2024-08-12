function Quote() {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col max-w-lg m-10">
          <div className="  font-extrabold text-2xl">
            "The customer service I received was exceptional. The support team
            went above and beyond to address my concerns."
          </div>
          <div className="text-md max-w-xl mt-2  font-extrabold">
            Julies Winfiled
          </div>
          <div className="text-sm max-w-xl  font-semibold opacity-40">
            CEO | ACME CORP
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
