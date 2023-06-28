import React, { useEffect, useState } from "react";

import CountryItem from "../../Components/CountryItem";

import axios from "axios";

import FilterCountries from "../../Components/FilterCountries";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import Loading from "../../Components/Loading";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataSlice.fetchedData);

  const apiUri = "https://restcountries.com/v3.1";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(apiUri + "/all").catch((error) => {
        setIsLoading(false);
        setIsError(error.message);
      });
      const data = await response.data.map((data) => ({
        id: uuidv4(),
        country: data.name,
        capital: data.capital ? data.capital[0] : null,
        region: data.region,
        population: data.population,
        flag: data.flags,
        cca: data.cca3,
      }));
      dispatch({ type: "data/dataReducer", payload: data });
      setIsLoading(false);
    };
    try {
      fetchData();
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      return;
    }
  }, []);

  const filterCountriesOnChange = async (name) => {
    try {
      setIsLoading(true);
      const response = await axios
        .get(apiUri + `/name/${name}`)
        .catch((error) => {
          setIsLoading(false);
          setIsError(error.message);
        });

      const data = await response.data.map((data) => ({
        id: uuidv4(),
        country: data.name,
        capital: data.capital ? data.capital[0] : null,
        region: data.region,
        population: data.population,
        flag: data.flags,
        cca: data.cca3,
      }));
      dispatch({ type: "data/dataReducer", payload: data });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      return;
    }
  };

  const filterRegionsOnChange = async (region) => {
    try {
      setIsLoading(true);
      const response = await axios
        .get(apiUri + `/region/${region}`)
        .catch((error) => {
          setIsLoading(false);
          setIsError(error.message);
        });

      const data = await response.data.map((data) => ({
        id: uuidv4(),
        country: data.name,
        capital: data.capital ? data.capital[0] : null,
        region: data.region,
        population: data.population,
        flag: data.flags,
        cca: data.cca3,
      }));
      dispatch({ type: "data/dataReducer", payload: data });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      return;
    }
  };

  if (isError) {
    return (
      <section className="mt-52">
        <p className="text-center text-2xl font-bold">{isError}</p>
      </section>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

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
