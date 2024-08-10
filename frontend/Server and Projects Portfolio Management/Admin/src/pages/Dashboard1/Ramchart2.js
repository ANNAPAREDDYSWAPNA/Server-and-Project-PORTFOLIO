import React, { Component, useEffect,useState } from "react"
import ReactEcharts from "echarts-for-react"

const Ramchart1=() => {
  const [loading, setLoading] = useState(true);
  const [totalRam2, setTotalRam2] = useState(0);
  const [freeRam2, setFreeRam2] = useState(512);
  useEffect(()=>{
    fetchRam2();
  },[]);
  const fetchRam2 = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/get-ram2");
      const data = await response.json();
      let sum2_ram = 0;
      let free2_ram = 512;
      data.ramValues.forEach((ramValue) => {
        sum2_ram = sum2_ram + parseInt(ramValue);
        free2_ram = free2_ram - parseInt(ramValue);
      });
      setTotalRam2(sum2_ram);
      setFreeRam2(free2_ram);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching RAM data:", error);
      setLoading(false);
    }
  };
  const option= {
      toolbox: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["RAM Used", "RAM Free"],
        textStyle: {
          color: ["#74788d"],
        },
      },
      color: ["#02a499", "#38a4f8"],
      series: [
        {
          name: "Total sales",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: totalRam2, name: "RAM Used" },
            { value: freeRam2, name: "RAM Free" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
  }
    return (
      <React.Fragment>
        <ReactEcharts style={{ height: "350px" }} option={option} />
      </React.Fragment>
    )
}
export default Ramchart1
