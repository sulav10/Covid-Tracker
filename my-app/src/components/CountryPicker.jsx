import React from "react";
import { fetchCountries } from "../api/index";
import { useEffect, useState } from "react";

function CountryPicker({ handleCountryChange }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const fetchedData = await fetchCountries();
      setCountries(fetchedData.countries);
      console.log(fetchedData.countries);
    };

    fetchApi();
  }, []);

  return countries.length ? (
    <div>
      <form>
        <select
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value="global">Global</option>
          {countries.map((country) => {
            return <option>{country.name}</option>;
          })}
        </select>
      </form>
    </div>
  ) : (
    ""
  );
}

export default CountryPicker;
