export default function Header() {
  return (
    <div className="grid grid-cols-6 gap-4 border-2 border-black rounded-t-md justify-items-center bg-[#9723c9] text-white">
      <div className="px-6 py-3 text-md font-bold uppercase tracking-wider">
        Pool
      </div>
      <div className="px-6 py-3 text-md font-bold uppercase tracking-wider">
        Utilization
      </div>
      <div className="px-6 py-3 text-md font-bold uppercase tracking-wider">
        Supply APY
      </div>
      <div className="px-6 py-3 text-md font-bold uppercase tracking-wider">
        Borrow APY
      </div>
      <div className="px-6 py-3 text-md font-bold uppercase tracking-wider">
        Total Supply
      </div>
      <div className="px-6 py-3 text-md font-bold uppercase tracking-wider">
        Total Borrow
      </div>
    </div>
  );
}
