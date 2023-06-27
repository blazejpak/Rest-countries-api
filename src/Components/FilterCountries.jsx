import { useEffect, useState } from "react";
import { Search, ChevronDownOutline } from "react-ionicons";
import { useSelector, useDispatch } from "react-redux";

const FilterCountries = ({ onSearch, onChange }) => {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => state.themeSlice.darkMode);
  const data = useSelector((state) => state.dataSlice.fetchedData);

  const [clickedFilterRegion, setClickedFilterRegion] = useState(false);
  const [typeFilter, setTypeFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const filterRegionHandler = () => {
    setClickedFilterRegion((curState) => !curState);
  };

  const searchInputSubmit = (e) => {
    e.preventDefault();

    onSearch(searchInput);
  };

  useEffect(() => {
    if (typeFilter) {
      onChange(typeFilter);
    } else return;
  }, [typeFilter]);

  return (
    <div className="flex md:justify-between md:items-center mx-10 md:mx-20 mt-12 gap-10 md:flex-row flex-col text-xs md:text-sm">
      <form
        onSubmit={searchInputSubmit}
        className="flex w-full md:w-[343px] h-12 sm:h-14 dark:bg-[#2B3844] bg-white items-center pl-8 rounded-lg gap-1 sm:gap-6 shadow-sm"
      >
        <Search color={isDarkMode ? "white" : "#B2B2B2"} />
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="outline-none bg-transparent placeholder:text-[#848484] dark:placeholder:text-white w-full"
          placeholder="Search for a country..."
        />
      </form>
      <div
        className="relative w-52 h-12 sm:h-14  bg-white dark:bg-[#2B3844] rounded-lg  shadow-sm"
        onClick={filterRegionHandler}
      >
        <div className="flex items-center justify-center w-full cursor-pointer gap-12 h-full">
          <p>Filter by Region</p>
          <ChevronDownOutline color={isDarkMode ? "white" : "#000"} />
        </div>
        {clickedFilterRegion ? (
          <div className="absolute w-52 h-40 bg-white dark:bg-[#2B3844] top-16 rounded-lg flex flex-col pl-6 gap-2 justify-center shadow">
            <p
              onClick={() => setTypeFilter("Africa")}
              className="cursor-pointer hover:scale-105 transition-all duration-300 active:scale-110 hover:font-extrabold"
            >
              Africa
            </p>
            <p
              onClick={() => setTypeFilter("Americas")}
              className="cursor-pointer hover:scale-105 transition-all duration-300 active:scale-110 hover:font-extrabold"
            >
              America
            </p>
            <p
              onClick={() => setTypeFilter("Asia")}
              className="cursor-pointer hover:scale-105 transition-all duration-300 active:scale-110 hover:font-extrabold"
            >
              Asia
            </p>
            <p
              onClick={() => setTypeFilter("Europe")}
              className="cursor-pointer hover:scale-105 transition-all duration-300 active:scale-110 hover:font-extrabold"
            >
              Europe
            </p>
            <p
              onClick={() => setTypeFilter("Oceania")}
              className="cursor-pointer hover:scale-105 transition-all duration-300 active:scale-110 hover:font-extrabold"
            >
              Oceania
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FilterCountries;
