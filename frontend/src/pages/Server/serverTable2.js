import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../Tables/datatables.scss";

const ServerTable2 = () => {
  const [serverData, setServerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editableRow, setEditableRow] = useState(null); // State to keep track of the editable row index

  useEffect(() => {
    fetchServerData();
  }, []);
  const fetchServerData = async () => {
    try {
      // Replace this URL with your backend API endpoint to fetch server data
      const response = await fetch("http://localhost:5000/api/get-server1");
      const data = await response.json();
      setServerData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching server data:", error);
      setLoading(false);
    }
  };
  const handleEdit = (index) => {
    // Set the editable row index
    setEditableRow(index);
  };
  const handleSave = async (serverId) => {
    try {
      const serverToUpdate = serverData.find((server) => server._id === serverId);
      const response = await fetch(`http://localhost:5000/api/update-server1/${serverId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serverToUpdate),
      });

      if (response.ok) {
        // If server update is successful, fetch server data again to update the table
        fetchServerData();
      } else {
        console.error("Failed to update server");
      }
    } catch (error) {
      console.error("Error updating server:", error);
    }
    window.location.href="/server2";
  };

  const handleDelete = async (serverId) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this server?");
      if (!confirmed) return;
  
      const response = await fetch(`http://localhost:5000/api/delete-server1/${serverId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        // If server deletion is successful, fetch server data again to update the table
        fetchServerData();
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
        label: "VName",
        field: "vm_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "OS",
        field: "os",
        sort: "asc",
        width: 100,
      },
      {
        label: "Version",
        field: "version",
        sort: "asc",
        width: 100,
      },
      {
        label: "RAM",
        field: "ram",
        sort: "asc",
        width: 100,
      },
      {
        label: "Storage",
        field: "storage",
        sort: "asc",
        width: 100,
      },
      {
        label: "VCPU",
        field: "vcpu",
        sort: "asc",
        width: 100,
      },
      {
        label: "Public",
        field: "public",
        sort: "asc",
        width: 100,
      },
      {
        label: "Private",
        field: "private",
        sort: "asc",
        width: 100,
      },
      {
        label: "AssignedTo",
        field: "assigned_to",
        sort: "asc",
        width: 100,
      },
      {
        label: "Purpose",
        field: "purpose",
        sort: "asc",
        width: 100,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 200,
      },
    ],
    rows: serverData.map((server, index) => ({
      vm_name: editableRow === index ? (
        <input
          type="text"
          value={server.vm_name}
          onChange={(e) => handleInputChange(e, index, "vm_name")}
        />
      ) : server.vm_name,
      os: editableRow === index ? (
        <input
          type="text"
          value={server.os}
          onChange={(e) => handleInputChange(e, index, "os")}
        />
      ) : server.os,
      version: editableRow === index ? (
        <input
          type="text"
          value={server.version}
          onChange={(e) => handleInputChange(e, index, "version")}
        />
      ) : server.version,
      ram: editableRow === index ? (
        <input
          type="text"
          value={server.ram}
          onChange={(e) => handleInputChange(e, index, "ram")}
        />
      ) : server.ram,
      storage: editableRow === index ? (
        <input
          type="text"
          value={server.storage}
          onChange={(e) => handleInputChange(e, index, "storage")}
        />
      ) : server.storage,
      vcpu: editableRow === index ? (
        <input
          type="text"
          value={server.vcpu}
          onChange={(e) => handleInputChange(e, index, "vcpu")}
        />
      ) : server.vcpu,
      public: editableRow === index ? (
        <input
          type="text"
          value={server.public}
          onChange={(e) => handleInputChange(e, index, "public")}
        />
      ) : server.public,
      private: editableRow === index ? (
        <input
          type="text"
          value={server.private}
          onChange={(e) => handleInputChange(e, index, "private")}
        />
      ) : server.private,
      assigned_to: editableRow === index ? (
        <input
          type="text"
          value={server.assigned_to}
          onChange={(e) => handleInputChange(e, index, "assigned_to")}
        />
      ) : server.assigned_to,
      purpose: editableRow === index ? (
        <input
          type="text"
          value={server.purpose}
          onChange={(e) => handleInputChange(e, index, "purpose")}
        />
      ) : server.purpose,
      action: (
        <div style={{width:100}}>
          {editableRow === index ? (
            <Button
              color="success"
              className="btn btn-success width-xs waves-effect waves-light mr-1"
              onClick={() => handleSave(server._id)}
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
            onClick={() => handleDelete(server._id)}
          >
           <i className="bx bx-trash"></i>
          </Button>
        </div>
      ),
    })),
  };

  const handleInputChange = (e, index, field) => {
    const newData = [...serverData];
    newData[index][field] = e.target.value;
    setServerData(newData);
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
                  <Link to="/serverform1">
                    <Button
                      color="primary"
                      className="ml-1 btn btn-primary waves-effect waves-light"
                      style={{ marginLeft: 700 }}
                    >
                      Add server
                    </Button>
                  </Link>
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

export default ServerTable2;