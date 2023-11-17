const CatLoader = () => {
  return (
    <div
      id="cat-head"
      className="relative w-1/3 h-72 rounded-full animate-pulse bg-slate-700"
    >
      <div id="cat-ears" className="relative flex h-2/3 bottom-10">
        <div
          id="left-ear"
          className="absolute bg-slate-700 w-1/2 h-full rounded-bl-[50%] rounded-tr-[50%] rotate-6"
        ></div>
        <div
          id="right-ear"
          className="absolute bg-slate-700 w-1/2 h-full right-0 rounded-br-[50%] rounded-tl-[50%] rotate-[174deg]"
        ></div>
      </div>
      <div
        id="cat-whiskers"
        className="relative flex h-1/6 justify-center bottom-10"
      >
        <div className="relative w-1/2 space-y-6">
          <div className="bg-slate-600 skew-y-12 w-2/3 h-1/6 ml-auto rounded-full"></div>
          <div className="bg-slate-600 -skew-y-2 h-1/6 ml-auto rounded-full"></div>
          <div className="bg-slate-600 -skew-y-12 w-2/3 h-1/6 ml-auto rounded-full"></div>
        </div>
        <div className="relative w-1/2"></div>
        <div className="relative w-1/2 space-y-6">
          <div className="bg-slate-600 -skew-y-6 w-2/3 h-1/6 rounded-full"></div>
          <div className="bg-slate-600 skew-y-2 h-1/6 rounded-full"></div>
          <div className="bg-slate-600 skew-y-12 w-2/3 h-1/6 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CatLoader;
