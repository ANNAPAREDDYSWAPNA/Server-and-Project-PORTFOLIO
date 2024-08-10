import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Label,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import axios from 'axios';

const axiosAPI = axios.create();

const AddDeveloper = () => {
  const [projectDetails, setProjectDetails] = useState([{ projectName: "", description: "" }]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [devName, setDevName] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append(`devName`, devName);
    formData.append(`role`, role);
    formData.append(`projectDetails`, JSON.stringify(projectDetails)); // Stringify projectDetails before appending
    formData.append('image', selectedFile);

    axiosAPI.post("http://localhost:5000/api/add-developer", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((response) => {
        console.log(response.data);
        window.location.href = "/developers";
    }).catch(error => {
        console.error('Error adding developer: ', error);
    });
}


  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleProjectChange(index, field, value) {
    const updatedprojectDetails = [...projectDetails];
    updatedprojectDetails[index][field] = value;
    setProjectDetails(updatedprojectDetails);
  }

  function addProject() {
    setProjectDetails([...projectDetails, { projectName: "", description: "" }]);
  }

  function removeProject(index) {
    const updatedprojectDetails = [...projectDetails];
    updatedprojectDetails.splice(index, 1);
    setProjectDetails(updatedprojectDetails);
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Form" breadcrumbItem="Form Validation" />
        <Row className="justify-content-center">
          <Col xl="6">
            <Card>
              <CardBody>
                <h4 className="card-title">ADD DEVELOPER</h4><br/>
                <AvForm className="needs-validation" onSubmit={handleSubmit}>
                  <Row>
                    <Col md="10">
                      <div className="mb-3">
                        <Label htmlFor="devName">Developer Name</Label>
                        <AvField
                          name="devName"
                          placeholder="Developer name"
                          type="text"
                          value={devName}
                          onChange={(e) => setDevName(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="10">
                      <div className="mb-3">
                        <Label htmlFor="role">Role </Label>
                        <AvField
                          name="role"
                          placeholder="role"
                          type="text"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  {projectDetails.map((project, index) => (
                    <React.Fragment key={index}>
                      <Row>
                        <Col md="10">
                          <div className="mb-3">
                            <Label htmlFor={`projectName${index}`}>Project Name</Label>
                            <AvField
                              name={`projectName${index}`}
                              placeholder="Project name"
                              type="text"
                              value={project.projectName}
                              onChange={(e) => handleProjectChange(index, 'projectName', e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="10">
                          <div className="mb-3">
                            <Label htmlFor={`description${index}`}>Project Description</Label>
                            <AvField
                              name={`description${index}`}
                              placeholder="Project description"
                              type="text"
                              value={project.description}
                              onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                        </Col>
                      </Row>
                      {index > 0 && (
                        <Button color="danger" onClick={() => removeProject(index)}>Remove Project</Button>
                      )}
                      <hr />
                    </React.Fragment>
                  ))}
                  <Button color="success" onClick={addProject}>Add Project</Button>
                  <Row>
                    <Col md="10">
                      <div className="mb-3">
                        <Label htmlFor="validationCustom02">Upload image</Label>
                        <input
                          type="file"
                          name="image"
                          className="form-control"
                          onChange={handleFileChange}
                          required
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
  );
}

export default AddDeveloper;