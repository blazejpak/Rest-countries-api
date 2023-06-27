import React, { useEffect } from "react";

import { store } from "../../store/store";
import CountryItem from "../../Components/CountryItem";

import axios from "axios";

import FilterCountries from "../../Components/FilterCountries";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataSlice.fetchedData);

  const apiUri = "https://restcountries.com/v3.1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUri + "/all");
        // console.log(response);
        const data = await response.data.map((data) => ({
          id: uuidv4(),
          country: data.name,
          capital: data.capital ? data.capital[0] : null,
          region: data.region,
          population: data.population,
          flag: data.flags,
        }));
        return dispatch({ type: "data/dataReducer", payload: data });
      } catch (err) {
        console.error(err);
        return [];
      }
    };
    fetchData();
  }, []);

  const filterCountriesOnChange = async (name) => {
    try {
      const response = await axios.get(apiUri + `/name/${name}`);
      console.log(response);

      const data = await response.data.map((data) => ({
        id: uuidv4(),
        country: data.name,
        capital: data.capital ? data.capital[0] : null,
        region: data.region,
        population: data.population,
        flag: data.flags,
      }));
      return dispatch({ type: "data/dataReducer", payload: data });
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  const filterRegionsOnChange = async (region) => {
    try {
      const response = await axios.get(apiUri + `/region/${region}`);
      const data = await response.data.map((data) => ({
        id: uuidv4(),
        country: data.name,
        capital: data.capital ? data.capital[0] : null,
        region: data.region,
        population: data.population,
        flag: data.flags,
      }));
      return dispatch({ type: "data/dataReducer", payload: data });
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  return (
    <main className="flex flex-col gap-12 max-w-[1608px] mx-auto">
      <FilterCountries
        onChange={filterRegionsOnChange}
        onSearch={filterCountriesOnChange}
      />
      <section className=" flex-wrap flex gap-16 justify-center">
        {data.map((item) => (
          <CountryItem item={item} key={item.id} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
