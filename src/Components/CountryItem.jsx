import { Link } from "react-router-dom";
import React from "react";

const CountryItem = ({ item }) => {
  const { country, capital, region, population, flag, cca } = item;

  return (
    <Link to={`/detailCountry/${cca}`} className="cursor-pointer">
      <div className="flex flex-col w-[264px] dark:bg-[#2B3844] bg-[#FFFFFF] h-[336px] rounded-lg overflow-hidden shadow">
        <div className="h-[160px] w-[264px] ">
          {
            <img
              src={flag.svg}
              alt={flag.alt}
              className="object-cover h-full w-full"
            />
          }
        </div>
        <div className="flex flex-col pt-4 pl-6 gap-4">
          <h2 className="text-lg font-extrabold dark:text-white ">
            {country.common}
          </h2>
          <div className="font-semibold flex flex-col gap-2">
            <p>
              Population:{" "}
              <span className="font-normal">{population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span className="font-normal">{region}</span>
            </p>
            <p>
              Capital: <span className="font-normal">{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryItem;
