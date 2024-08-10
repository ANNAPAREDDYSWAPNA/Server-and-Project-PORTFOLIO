import React, { useState,useEffect } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const ServerCards = (props) => {
  const [serverData, setServerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalStorage1,setTotalStorage1]=useState(0);
  const[freeStorage1,setFreeStorage1]=useState(1024);
  const[totalRam1,setTotalRam1]=useState(0);
  const[freeRam1,setFreeRam1]=useState(256);
  const [totalStorage2,setTotalStorage2]=useState(0);
  const[freeStorage2,setFreeStorage2]=useState(2048);
  const[totalRam2,setTotalRam2]=useState(0);
  const[freeRam2,setFreeRam2]=useState(512);
  useEffect(() => {
    fetchStorage1();
    fetchRam1();
    fetchStorage2();
    fetchRam2();

  }, []);

  const fetchStorage1 = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/get-storage1");
      const data = await response.json();
      let sum1_storage = 0;
      let free1_storage = 1024;
      data.storageValues.forEach(storageValue => {
        // setTotalStorage1(totalStorage1+parseInt(storageValue))
        console.log(parseInt(storageValue))
        sum1_storage = sum1_storage + parseInt(storageValue)
        free1_storage=free1_storage-parseInt(storageValue);
       
      });
      console.log(sum1_storage)
      setTotalStorage1(sum1_storage) 
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
      data.ramValues.forEach(ramValue => {
        console.log(parseInt(ramValue))
        sum2_ram = sum2_ram + parseInt(ramValue)
        free2_ram=free2_ram-parseInt(ramValue);
       
      });
      console.log(sum2_ram)
      setTotalRam1(sum2_ram) 
      setFreeRam1(free2_ram);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching storage data:", error);
      setLoading(false);
    }
  };
  const fetchStorage2 = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/get-storage2");
      const data = await response.json();
      let sum2_storage = 0;
      let free2_storage = 2048;
      data.storageValues.forEach(storageValue => {
        // setTotalStorage1(totalStorage1+parseInt(storageValue))
        console.log(parseInt(storageValue))
        sum2_storage = sum2_storage + parseInt(storageValue)
        free2_storage=free2_storage-parseInt(storageValue);
       
      });
      console.log(sum2_storage)
      setTotalStorage2(sum2_storage) 
      setFreeStorage2(free2_storage);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching storage data:", error);
      setLoading(false);
    }
  };
  const fetchRam2 = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/get-ram2");
      const data = await response.json();

      let sum2_ram = 0;
      let free2_ram = 512;
      data.ramValues.forEach(ramValue => {
        console.log(parseInt(ramValue))
        sum2_ram = sum2_ram + parseInt(ramValue)
        free2_ram=free2_ram-parseInt(ramValue);
       
      });
      console.log(sum2_ram)
      setTotalRam2(sum2_ram) 
      setFreeRam2(free2_ram);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching storage data:", error);
      setLoading(false);
    }
  };
  
 
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="UI Elements" breadcrumbItem="Cards" />
        <br/><br/>
        <Row>
          <Col lg={6}>
            <Card outline color="primary" className="border">
              <CardHeader className="bg-transparent">
                <h2 className="my-0 text-primary">
                  <i className="mdi mdi-bullseye-arrow me-3"></i>SERVER I 
                </h2>
              </CardHeader>
              <CardBody>
                <CardTitle className="h2 mt-0"><strong><u>RAM :</u></strong><br/><br/>
                      Total: 256 GB<br/>
                      Used: {totalRam1} GB<br/>
                      Free: {freeRam1} GB</CardTitle>
                <CardTitle className="h2 mt-0"><strong><u>STORAGE :</u></strong><br/><br/>
                      Total: 1024 GB<br/>
                      Used: {totalStorage1} GB<br/>
                      Free: {freeStorage1} GB</CardTitle>
                <CardTitle className="h2 mt-0">VCPU :</CardTitle>
                <CardTitle className="h2 mt-0">IP :</CardTitle>

                <br/>
                <Link to="/server1" className="btn btn-primary">
                  Get data
                </Link>
              </CardBody>
            </Card>
          </Col>

          <Col lg={6}>
            <Card outline color="primary" className="border">
              <CardHeader className="bg-transparent">
                <h2 className="my-0 text-primary">
                  <i className="mdi mdi-bullseye-arrow me-3"></i>SERVER II
                </h2>
              </CardHeader>
              <CardBody>
                <CardTitle className="h2 mt-0 ml-3"><strong><u>RAM :</u></strong><br/><br/>
                      Total: 512 GB<br/>
                      Used: {totalRam2} GB<br/>
                      Free: {freeRam2} GB
                </CardTitle>
                <CardTitle className="h2 mt-0"><strong><u>STORAGE :</u></strong><br/><br/>
                      Total: 2048 GB<br/>
                      Used: {totalStorage2} GB<br/>
                      Free: {freeStorage2} GB
                </CardTitle>
                <CardTitle className="h2 mt-0">VCPU :</CardTitle>
                <CardTitle className="h2 mt-0">IP :</CardTitle>
                <br/>
                <Link to="/server2" className="btn btn-primary">
                  Get data
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ServerCards;