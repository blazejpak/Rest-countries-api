import axios from "axios";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailCountryPage = () => {
  const [detailCountry, setDetailCountry] = useState(null);
  const { id } = useParams();
  // console.log(id);
  const apiUri = "https://restcountries.com/v3.1";

  useEffect(() => {
    try {
      const fetchedDetailCountry = async () => {
        const response = await axios.get(apiUri + `/name/${id}`);

        const data = await response.data.map((data) => ({
          country: data.name.common,
          nativeName: data.name.official,
          capital: data.capital ? data.capital[0] : null,
          region: data.region,
          subRegion: data.subregion,
          population: data.population,
          flag: data.flags,
          tld: data.tld[0],
          currencies: Object.keys(data.currencies)[0],
        }));

        return setDetailCountry(data[0]);
      };
      fetchedDetailCountry();
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (detailCountry) {
    console.log(detailCountry.currencies);
  }

  return (
    <main>
      <section></section>
    </main>
  );
};

export default DetailCountryPage;
