export default function NavBar() {
  return (
    <div className="shadow-lg px-6 pb-6">
      <nav className="flex justify-between items-center">
        <div>Apple Website Logo</div>
        <div className="flex gap-x-6">
          <input
            type="text"
            className="border-2 border-black h-10 rounded-md"
          />
          <button className="bg-orange-600 py-2 px-4 text-white rounded-md">
            Search
          </button>
        </div>
        <div>Account</div>
        <div>Cart</div>
      </nav>
    </div>
  );
}
