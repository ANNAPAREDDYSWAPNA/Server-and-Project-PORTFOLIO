import React from "react"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Charts"
import Storagechart1 from "./Storagechart1"
import Storagechart2 from "./Storagechart2"
import Ramchart1 from "./Ramchart1"
import Ramchart2 from "./Ramchart2"
const Allchart = () => {
  return (
    <React.Fragment>
      <div className="page-content">
       
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Charts" breadcrumbItem="E-Charts" />
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <CardTitle><b>Storage Chart for SERVER I</b></CardTitle>
                  <div id="doughnut-chart" className="e-chart">
                    <Storagechart1 />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <CardTitle><b>RAM Chart</b></CardTitle>
                  <div id="pie-chart" className="e-chart">
                    <Ramchart1/>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <CardTitle><b>Storage Chart for SERVER II</b></CardTitle>
                  <div id="doughnut-chart" className="e-chart">
                    <Storagechart2 />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <CardTitle><b>RAM Chart</b></CardTitle>
                  <div id="pie-chart" className="e-chart">
                    <Ramchart2 />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    </React.Fragment>
  )
}

export default Allchart;