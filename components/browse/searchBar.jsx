export const SearchBar = (props) => {
  return (
    <div className="py-1 px-2 flex justify-between items-center mx-auto bg-black h-10 rounded-2xl text-sm focus:outline-none">
      <input
        className="bg-transparent text-white  h-full focus:outline-none focus:bg-transparent"
        type="text"
        name="search"
        placeholder="Search"
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
      <button type="submit" className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  );
};
