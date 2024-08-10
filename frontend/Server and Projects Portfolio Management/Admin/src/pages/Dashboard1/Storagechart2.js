import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

const Storagechart1 = () => {
  const [loading, setLoading] = useState(true);
  const [totalStorage2, setTotalStorage2] = useState(0);
  const [freeStorage2, setFreeStorage2] = useState(2048);
  

  useEffect(() => {
    fetchStorage2();
  }, []);

  const fetchStorage2 = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/get-storage2");
      const data = await response.json();
      let sum2_storage = 0;
      let free2_storage = 2048;
      data.storageValues.forEach((storageValue) => {
        sum2_storage = sum2_storage + parseInt(storageValue);
        free2_storage = free2_storage - parseInt(storageValue);
      });
      setTotalStorage2(sum2_storage);
      setFreeStorage2(free2_storage);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching storage data:", error);
      setLoading(false);
    }
  };

  

  const option = {
    toolbox: {
      show: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      x: "left",
      data: ["Storage Used", "Storage Free"],
      textStyle: {
        color: ["#74788d"],
      },
    },
    color: ["#02a499", "#f8b425"],
    series: [
      {
        name: "Total sales",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: "center",
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "30",
              fontWeight: "bold",
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: totalStorage2, name: "Storage Used" },
          { value: freeStorage2, name: "Storage Free" },
        ],
      },
    ],
  };

  return (
    <React.Fragment>
      <ReactEcharts style={{ height: "350px" }} option={option} />
    </React.Fragment>
  );
};

export default Storagechart1;
