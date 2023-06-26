import { Search } from "react-ionicons";

const FilterCountries = () => {
  return (
    <div className="h-12 sm:h-14 flex justify-between items-center mx-20">
      <form>
        <div className="flex max-w-[480px] ">
          <Search />
          <input className="outline-none bg-transparent" />
        </div>
      </form>
      <div className="w-[200px]"></div>
    </div>
  );
};

export default FilterCountries;
