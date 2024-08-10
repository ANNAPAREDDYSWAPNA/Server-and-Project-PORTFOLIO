import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

const Storagechart1 = () => {
  const [loading, setLoading] = useState(true);
  const [totalStorage1, setTotalStorage1] = useState(0);
  const [freeStorage1, setFreeStorage1] = useState(1024);
  const [totalRam1, setTotalRam1] = useState(0);
  const [freeRam1, setFreeRam1] = useState(256);

  useEffect(() => {
    fetchStorage1();
    fetchRam1();
  }, []);

  const fetchStorage1 = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/get-storage1");
      const data = await response.json();
      let sum1_storage = 0;
      let free1_storage = 1024;
      data.storageValues.forEach((storageValue) => {
        sum1_storage = sum1_storage + parseInt(storageValue);
        free1_storage = free1_storage - parseInt(storageValue);
      });
      setTotalStorage1(sum1_storage);
      setFreeStorage1(free1_storage);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching storage data:", error);
      setLoading(false);
    }
  };

  const fetchRam1 = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/get-ram1");
      const data = await response.json();
      let sum2_ram = 0;
      let free2_ram = 256;
      data.ramValues.forEach((ramValue) => {
        sum2_ram = sum2_ram + parseInt(ramValue);
        free2_ram = free2_ram - parseInt(ramValue);
      });
      setTotalRam1(sum2_ram);
      setFreeRam1(free2_ram);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching RAM data:", error);
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
          { value: totalStorage1, name: "Storage Used" },
          { value: freeStorage1, name: "Storage Free" },
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
