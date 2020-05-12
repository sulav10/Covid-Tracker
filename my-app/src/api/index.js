import axios from "axios";

export const fetchData = async (country) => {
  const url = "https://covid19.mathdro.id/api";

  if (country == "global") {
    const changebleUri = `${url}`;

    const data = await axios.get(changebleUri);

    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = data;

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } else if (country) {
    const changebleUri = `${url}/countries/${country}`;

    const data = await axios.get(changebleUri);

    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = data;

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  }

  const data = await axios.get(url);

  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = data;

  const modifiedData = {
    confirmed,
    recovered,
    deaths,
    lastUpdate,
  };

  return modifiedData;
};

export const fetchDailyData = async () => {
  const { data } = await axios.get("https://covid19.mathdro.id/api/daily");

  const fetchedData = data.map((item) => {
    return {
      confirmed: item.confirmed.total,
      deaths: item.deaths.total,
      date: item.reportDate,
    };
  });

  return fetchedData;
};

export const fetchCountries = async () => {
  const { data } = await axios.get("https://covid19.mathdro.id/api/countries");

  const modifiedData = data;
  return modifiedData;
};
