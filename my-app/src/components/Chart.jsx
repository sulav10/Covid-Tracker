import React from "react";
import { useEffect, useState } from "react";
import { fetchDailyData } from "../api/index";
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.css";

function Chart({ data: { confirmed, recovered, deaths }, country }) {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const fetchedData = await fetchDailyData();
      setDailyData(fetchedData);
    };

    fetchApi();

    console.log(confirmed, recovered, deaths);
  }, []);

  const lineChart = () => {
    return (
      <div className={styles.container}>
        <Line
          data={{
            datasets: [
              {
                label: "Infected",
                data: dailyData.map((items) => {
                  return items.confirmed;
                }),
                // this dataset is drawn below
                order: 1,
                borderColor: "rgba(0, 0, 255)",
                fill: true,
                backgroundColor: "rgba(123, 123, 247, 0.25)",
              },
              {
                label: "Deaths",
                data: dailyData.map((items) => {
                  return items.deaths;
                }),
                type: "line",
                // this dataset is drawn on top
                order: 2,
                borderColor: "rgba(255, 0, 0)",
                fill: true,
                backgroundColor: "rgba(220, 20, 60, 0.712)",
              },
            ],
            labels: dailyData.map((items) => {
              return items.date;
            }),
          }}
        />
      </div>
    );
  };

  const barchart = () => {
    if (confirmed.value) {
      return (
        <div className={styles.barContainer}>
          <Bar
            data={{
              labels: ["Infected", "Recovered", "Deaths"],
              datasets: [
                {
                  borderColor: [
                    "rgba(255, 0, 0)",
                    "rgba(0, 255, 0)",
                    "rgba(0, 0, 255)",
                  ],

                  backgroundColor: [
                    "rgba(123, 123, 247)",
                    "rgba(0, 128, 0, 0.575)",
                    "rgba(255, 0, 0, 0.623)",
                  ],
                  barPercentage: 0.5,
                  barThickness: 200,
                  maxBarThickness: 500,
                  minBarLength: 2,
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: `Current condition in ${country}`,
              },
            }}
          />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  if (country == "global") {
    return lineChart();
  } else {
    return barchart();
  }
}

export default Chart;
