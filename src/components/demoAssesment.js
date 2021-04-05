import React, { Component } from 'react';
import { Table, Container, Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import { Link }from 'react-router-dom';
import axios from 'axios';
import Chart from 'react-apexcharts';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  

class demoAssesment extends Component {

    state = {
        data: [],
        options : {
            series: [10,15],
            labels: ['Completed', 'Remaining'],
            colors:['#0000ff', '#ff0000']
        },
        options1: {
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {
              categories: ["Que 1", "Que 2", "Que 3"]
            }
        },
        series: [{
        name: 'series-1',
        data: [2,6,10]
        }]
    }

    componentDidMount = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        var data = JSON.stringify({
            name: "Shift Cipher"
        })

        axios.post("http://localhost:5000/assignment/get_data", data, config)
        .then(res => {
            this.setState({ data: res.data.data});
        }).catch(e => console.log(e));
    }


    render() {

        const data = this.state.data.map((student, index) => (
            <tr>
            <td>{index+1} </td>
            <td>{student.prn}</td>
            <td>{student.que1_ans}</td>
            <td>{student.que1_mark}</td>
            <td>{student.que2_ans}</td>
            <td>{student.que2_mark}</td>
            <td>{student.que3_ans}</td>
            <td>{student.que3_mark}</td>
        </tr>
        ))

        return (
            <Container>
                <Breadcrumb>
                        <BreadcrumbItem><Link to="/facultymain">Dashboard</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Shift Cipher Assesment</BreadcrumbItem>
                </Breadcrumb>
                <Row>
                    <Col>
                    <Chart options={this.state.options} series={this.state.options.series} type="pie" width={500} height={320} />
                    </Col>
                    <Chart options={this.state.options1} series={this.state.series} type="bar" width={500} height={320} />
                    <Col>
                    </Col>
                </Row>
                <ReactHTMLTableToExcel  className="btn btn-primary float-right" table="table" filename="Shift Ciper Assesment" sheet="Sheet" buttonText="Export excel" />
                <Table bordered striped hover id="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>PRN</th>
                            <th>Ques 1 Ans</th>
                            <th>Marks</th>
                            <th>Ques 2 Ans</th>
                            <th>Marks</th>
                            <th>Ques 3 Ans</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </Table>  
            </Container>
        );
    }
}

export default demoAssesment;