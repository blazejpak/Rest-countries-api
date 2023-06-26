import React, { useEffect } from "react";

import { store } from "../../store/store";
import CountryItem from "../../Components/CountryItem";

import axios from "axios";

import FilterCountries from "../../Components/FilterCountries";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataSlice.fetchedData);

  const apiUri = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUri);
        const data = await response.data.map((data) => ({
          country: data.name,
          capital: data.capital ? data.capital[0] : null,
          region: data.region,
          population: data.population,
        }));
        return dispatch({ type: "data/dataReducer", payload: data });
      } catch (err) {
        console.error(err);
        return [];
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex flex-col gap-12">
      <FilterCountries />
      <section className="max-w-[1280px] mx-20">
        {data.map((item) => (
          <CountryItem item={item} key={item.country} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
