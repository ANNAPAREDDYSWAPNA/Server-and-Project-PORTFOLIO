import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../Tables/datatables.scss";

const ProjectTable = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editableRow, setEditableRow] = useState(null); // State to keep track of the editable row index

  useEffect(() => {
    fetchprojectData();
  }, []);

  const fetchprojectData = async () => {
    try {
      // Replace this URL with your backend API endpoint to fetch project data
      const response = await fetch("http://localhost:5000/api/get-project");
      const data = await response.json();
      setProjectData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching project data:", error);
      setLoading(false);
    }
  };

  const handleEdit = (index) => {
    // Set the editable row index
    setEditableRow(index);
  };

  const handleSave = async (projectId) => {
    try {
      const projectToUpdate = projectData.find((project) => project._id === projectId);
      const response = await fetch(`http://localhost:5000/api/update-project/${projectId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectToUpdate),
      });

      if (response.ok) {
        // If project update is successful, fetch project data again to update the table
        fetchprojectData();
      } else {
        console.error("Failed to update project");
      }
    } catch (error) {
      console.error("Error updating project:", error);
    }
    window.location.href="/listofprojects";
  };

  
        const handleDelete = async (projectId) => {
          try {
            const confirmed = window.confirm("Are you sure you want to delete this project?");
            if (!confirmed) return;
        
            const response = await fetch(`http://localhost:5000/api/delete-project/${projectId}`, {
              method: "DELETE",
            });
        
            if (response.ok) {
              // If server deletion is successful, fetch server data again to update the table
              fetchprojectData();
            } else {
              console.error("Failed to delete server");
            }
          } catch (error) {
            console.error("Error deleting server:", error);
          }
        };
        
  const tableData = {
    columns: [
      {
        label: "Application Name",
        field: "application_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Developers",
        field: "developers",
        sort: "asc",
        width: 100,
      },
      {
        label: "App Url",
        field: "app_url",
        sort: "asc",
        width: 100,
      },
      {
        label: "Database Name",
        field: "db_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: projectData.map((project, index) => ({
      application_name: editableRow === index ? (
        <input
          type="text"
          value={project.application_name}
          onChange={(e) => handleInputChange(e, index, "application_name")}
        />
      ) : project.application_name,
      developers: editableRow === index ? (
        <input
          type="text"
          value={project.developers}
          onChange={(e) => handleInputChange(e, index, "developers")}
        />
      ) : project.developers,
      app_url: editableRow === index ? (
        <input
          type="url"
          value={project.app_url}
          onChange={(e) => handleInputChange(e, index, "app_url")}
        />
      ) : project.app_url,
      db_name: editableRow === index ? (
        <input
          type="text"
          value={project.db_name}
          onChange={(e) => handleInputChange(e, index, "db_name")}
        />
      ) : project.db_name,
      status: editableRow === index ? (
        <input
          type="text"
          value={project.status}
          onChange={(e) => handleInputChange(e, index, "status")}
        />
      ) : project.status,
      action: (
        <div style={{width:100}}>
          {editableRow === index ? (
            <Button
              color="success"
              className="btn btn-success width-xs waves-effect waves-light mr-1"
              onClick={() => handleSave(project._id)}
            >
              <i className="bx bx-check-double"></i>
            </Button>
          ) : (
            <Button
              color="primary"
              className="btn btn-primary width-xs waves-effect waves-light mr-1"
              onClick={() => handleEdit(index)}
            >
              <i className="bx bx-edit-alt"></i>
            </Button>
          )}&nbsp;
          <Button
            color="danger"
            className="btn btn-danger width-xs waves-effect waves-light"
            onClick={() => handleDelete(project._id)}
          >
           <i className="bx bx-trash"></i>
          </Button>
        </div>
      ),
    })),
  };

  const handleInputChange = (e, index, field) => {
    const newData = [...projectData];
    newData[index][field] = e.target.value;
    setProjectData(newData);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle>
                  Default Datatable
                  <Link to="/projectform">
                    <Button
                      color="primary"
                      className="ml-1 btn btn-primary waves-effect waves-light"
                      style={{ marginLeft: 700 }}
                    >
                      Add Project
                    </Button>
                  </Link>{" "}
                </CardTitle>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <MDBDataTable responsive striped bordered data={tableData} noBottomColumns />
                    )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ProjectTable;