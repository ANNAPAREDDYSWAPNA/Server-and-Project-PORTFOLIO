// FILENAME: SERVERFORM
import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Label,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import axios from 'axios';
const axiosAPI = axios.create();
const ServerForm1 = () => {
  const [data1, setData1] = useState({})
  function handleSubmit(e) {
    e.preventDefault()
    console.log(data1)

    axiosAPI.post("http://localhost:5000/api/add-server1", data1).then((response)=>{
        console.log(response.data1)
    })
    window.location.href = "/server2";
  }
  //for change tooltip display propery
  function changeHandeler(event, eleId) {
    if (event.target.value !== "")
      document.getElementById(eleId).style.display = "none"
    else document.getElementById(eleId).style.display = "block"
  }
  return (
    <React.Fragment>
      <div className="page-content">
        
          <Breadcrumbs title="Form" breadcrumbItem="Form Validation" />
          <Row className="justify-content-center">
            <Col xl="6">
              <Card>
                <CardBody>
                  <h4 className="card-title">ADD SERVER</h4>
                 
                  <AvForm className="needs-validation" onSubmit={handleSubmit}>
                    <Row>
                      <Col md="6">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom01">VM-Name</Label>
                          <AvField
                            name="vm-name"
                            placeholder="vm-name"
                            type="text"
                            errorMessage="Enter vm Name"
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom01"
                            onChange={(e)=>setData1({...data1,vm_name:e.target.value})}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom02">OS</Label>
                          <AvField
                            name="os name"
                            placeholder="os name"
                            type="text"
                            errorMessage="Enter Os name"
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom02"
                            onChange={(e)=>setData1({...data1,os:e.target.value})}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom03">Version</Label>
                          <AvField
                            name="city"
                            placeholder="version name"
                            type="tel"
                            errorMessage=" Please provide a valid ."
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom03"
                            onChange={(e)=>setData1({...data1,version:e.target.value})}

                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom04">RAM</Label>
                          <AvField
                            name="ram"
                            placeholder="ram"
                            type="tel"
                            errorMessage="Please provide a valid ram."
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom04"
                            onChange={(e)=>setData1({...data1,ram:e.target.value})}

                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom05">Storage</Label>
                          <AvField
                            name="zip"
                            placeholder="storage"
                            type="text"
                            errorMessage=" Please provide storage information."
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom05"
                            onChange={(e)=>setData1({...data1,storage:e.target.value})}

                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom03">VCPU</Label>
                          <AvField
                            name="city"
                            placeholder="vcpu name"
                            type="text"
                            errorMessage=" Please provide a valid name."
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom03"
                            onChange={(e)=>setData1({...data1,vcpu:e.target.value})}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom04">Public</Label>
                          <AvField
                            name="state"
                            placeholder=""
                            type="text"
                            errorMessage="Please provide a valid public."
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom04"
                            onChange={(e)=>setData1({...data1,public:e.target.value})}

                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom05">Private</Label>
                          <AvField
                            name="zip"
                            placeholder=""
                            type="text"
                            errorMessage=" Please provide storage private."
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom05"
                            onChange={(e)=>setData1({...data1,private:e.target.value})}

                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom03">AssignedTo</Label>
                          <AvField
                            name="city"
                            placeholder="email"
                            type="email"
                            errorMessage=" Please provide a valid email."
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom03"
                            onChange={(e)=>setData1({...data1,assigned_to:e.target.value})}

                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom04">Purpose</Label>
                          <AvField
                            name="purpose"
                            placeholder=""
                            type="text"
                            errorMessage="Please provide a valid purpose."
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom04"
                            onChange={(e)=>setData1({...data1,purpose:e.target.value})}

                          />
                        </div>
                      </Col>
                
                    </Row>

                    <Button color="primary" type="submit">
                      Submit form
                    </Button>
                  </AvForm>
                </CardBody>
              </Card>
            </Col>
          </Row>
        
      </div>
    </React.Fragment>
  )
}

export default ServerForm1;
