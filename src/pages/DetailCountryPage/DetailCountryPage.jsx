import { ArrowBackOutline } from "react-ionicons";
import { Circles } from "react-loader-spinner";

import axios from "axios";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Components/Loading";

const DetailCountryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();
  const [detailCountry, setDetailCountry] = useState(null);

  const isDarkMode = useSelector((state) => state.themeSlice.darkMode);

  const navigate = useNavigate();

  const { id } = useParams();
  const apiUri = "https://restcountries.com/v3.1";

  useEffect(() => {
    try {
      const fetchedDetailCountry = async () => {
        setIsLoading(true);
        const response = await axios
          .get(apiUri + `/alpha/${id}`)
          .catch((error) => {
            setIsLoading(false);
            setIsError(error.message);
          });

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
          languages: Object.values(data.languages),
          borders: data.borders,
        }));

        setDetailCountry(data[0]);
        setIsLoading(false);
      };
      fetchedDetailCountry();
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      return;
    }
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  const goBackHandler = () => {
    navigate("/");
  };

  if (detailCountry) {
    return (
      <main className="flex justify-center lg:justify-stretch  max-w-[1608px] mx-auto">
        <section className="  px-10 xl:px-20 max-w-[1608px] mt-10 lg:mt-20 flex flex-col gap-20">
          <div
            onClick={goBackHandler}
            className="w-36 h-10 rounded shadow bg-white dark:bg-[#2B3844] flex justify-center items-center gap-3  cursor-pointer hover:scale-105 active:scale-110"
          >
            <ArrowBackOutline
              height="20px"
              width="20px"
              color={isDarkMode ? "#fff" : "#111517"}
            />
            <p className="text-base font-light">Back</p>
          </div>
          <div className="flex lg:flex-row flex-col gap-20 ">
            <div className="lg:min-h-[480px] lg:min-w-[560px] md:max-h-[385px] md:max-w-[450px] max-h-[275px] max-w-[320px]">
              {
                <img
                  src={detailCountry.flag.svg}
                  alt={detailCountry.flag.alt}
                  className="object-cover h-full w-full"
                />
              }
            </div>
            <div>
              <h2 className="text-4xl font-extrabold">
                {detailCountry.country}
              </h2>
              <div className="flex flex-col md:flex-row  gap-10 leading-8 mt-5">
                <div>
                  <p>
                    <span className="font-semibold">Native Name:</span>{" "}
                    {detailCountry.nativeName}
                  </p>
                  <p>
                    <span className="font-semibold">Population:</span>{" "}
                    {detailCountry.population}
                  </p>
                  <p>
                    <span className="font-semibold">Region:</span>{" "}
                    {detailCountry.region}
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region:</span>{" "}
                    {detailCountry.subRegion}
                  </p>
                  <p>
                    <span className="font-semibold">Capital:</span>{" "}
                    {detailCountry.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Top Level Domain:</span>{" "}
                    {detailCountry.tld}
                  </p>
                  <p>
                    <span className="font-semibold">Currencies:</span>{" "}
                    {detailCountry.currencies}
                  </p>
                  <p>
                    <span className="font-semibold">Languages:</span>{" "}
                    {detailCountry.languages}
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 items-center mt-10 lg:mt-20 mb-10">
                <p>Border Countries:</p>
                <div className="flex flex-wrap gap-3">
                  {detailCountry.borders
                    ? detailCountry.borders.map((item) => {
                        {
                          return (
                            <div
                              onClick={() => navigate(`/detailCountry/${item}`)}
                              key={item}
                              className="px-7 py-1 rounded-sm bg-white shadow dark:bg-[#2B3844] cursor-pointer hover:scale-105 active:scale-110"
                            >
                              <p>{item}</p>
                            </div>
                          );
                        }
                      })
                    : "This country doesn't have any border country"}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
};

export default DetailCountryPage;
