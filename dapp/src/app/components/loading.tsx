type Props = {
  key: string;
};

export default function Loading({ key }: Props) {
  return (
    <div
      className={`grid grid-cols-6 gap-4 py-2 border-x-2 border-b-2 border-black items-center last:rounded-b-md justify-items-center 
        hover:bg-[#A388EE] animate-pulse bg-white`}
      key={key}
    >
      <div className="rounded-full bg-slate-200 p-5"></div>
      <div className="bg-slate-200 h-4 w-16 rounded"></div>
      <div className="bg-slate-200 h-4 w-14 rounded"></div>
      <div className="bg-slate-200 h-4 w-12 rounded"></div>
      <div className="bg-slate-200 h-4 w-28 rounded"></div>
      <div className="bg-slate-200 h-4 w-24 rounded"></div>
    </div>
  );
}
