import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
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

const ProjectForm = () => {
  const [data, setData] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    console.log(data)

    axiosAPI.post("http://localhost:5000/api/add-project", data).then((response)=>{
        console.log(response.data)
    })
    window.location.href = "/listofprojects";

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
                  <h4 className="card-title">ADD PROJECT</h4><br/>
                 
                  <AvForm className="needs-validation" onSubmit={handleSubmit}>
                    <Row>
                      <Col md="10">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom01">Application Name</Label>
                          <AvField
                            name="application-name"
                            placeholder="app-name"
                            type="text"
                            errorMessage="Enter App Name"
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom01"
                            onChange={(e)=>setData({...data,application_name:e.target.value})}
                          />
                        </div>
                      </Col>
                      </Row>

                      <Row>
                      <Col md="10">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom02">Developers</Label>
                          <AvField
                            name="developers"
                            placeholder="developers"
                            type="text"
                            errorMessage="Enter developers name"
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom02"
                            onChange={(e)=>setData({...data,developers:e.target.value})}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="10">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom02">App Url</Label>
                          <AvField
                            name="app-url"
                            placeholder="url"
                            type="url"
                            errorMessage="Enter App Url"
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom02"
                            onChange={(e)=>setData({...data,app_url:e.target.value})}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="10">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom02">Database Name</Label>
                          <AvField
                            name="db-name"
                            placeholder="db-name"
                            type="text"
                            errorMessage="Enter database name"
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom02"
                            onChange={(e)=>setData({...data,db_name:e.target.value})}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="10">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom02">Status</Label>
                          <AvField
                            name="status"
                            placeholder="status"
                            type="text"
                            errorMessage="Enter status"
                            className="form-control"
                            // validate={{ required: { value: true } }}
                            id="validationCustom02"
                            onChange={(e)=>setData({...data,status:e.target.value})}
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

export default ProjectForm;
