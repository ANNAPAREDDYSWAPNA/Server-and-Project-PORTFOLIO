import React, { useState, useEffect } from "react";
import { Col, Row, Card, CardImg, CardText, CardBody, CardTitle,Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
// import img1 from "../../assets/images/small/img-1.jpg";

const ProjectCards = (props) => {
  const [developerData, setDevelopers] = useState([]);

  const fetchDeveloperData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/get-developers");
      const data = await response.json();
      setDevelopers(data);
    } catch (error) {
      console.error("Error fetching server data:", error);
    }
  };

  const handleDelete = async (developerId) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this developer?");
      if (!confirmed) return;
  
      const response = await fetch(`http://localhost:5000/api/delete-developer/${developerId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        // If server deletion is successful, fetch server data again to update the table
        fetchDeveloperData();
      } else {
        console.error("Failed to delete server");
      }
    } catch (error) {
      console.error("Error deleting server:", error);
    }
  };

  useEffect(() => {
    fetchDeveloperData();
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="UI Elements" breadcrumbItem="Cards" />
        <Row>
          <Col lg={10}></Col>
          <Col lg={2}>
            <Link
              to="/AddDeveloper"
              className="btn btn-primary waves-effect waves-light"
            >
              Add Developer
            </Link>
          </Col>
        </Row>
        <br/>
        <Row>
          {developerData.map((developerItem, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <Card>
                <CardImg
                  top
                  className="img-fluid"
                  src={`http://localhost:5000/uploads/images/${developerItem.image}`}
                  alt="Card image cap"
                  height={50}
                />
                <CardBody>
                  <CardTitle className="h5">
                    <center>
                      <strong>{developerItem.devName}</strong>
                    </center>
                  </CardTitle>
                  <CardText>
                    <center>{developerItem.role}</center>
                  </CardText>
                  <strong>
                    <u>projects:</u>
                  </strong>
                  <br />
                  {developerItem.projectDetails.map((project, projectIndex) => (
                    <span key={projectIndex}>
                      {project.projectName}
                      <br />
                    </span>
                  ))}
                
                </CardBody>
                <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
            onClick={() => handleDelete(developerItem._id)}
          >
            {/* Delete */}
            <i className="bx bx-trash"></i>
          </Button>
              </Card>
            </Col>
          ))}
        </Row>

      </div>
    </React.Fragment>
  );
};

export default ProjectCards;