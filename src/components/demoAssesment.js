import React, { Component } from 'react';
import { Table, Container, Breadcrumb, BreadcrumbItem, Row, Col, Input, Button } from 'reactstrap';
import { Link }from 'react-router-dom';
import axios from 'axios';
import Chart from 'react-apexcharts';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 
import Highlighter from "react-highlight-words";

class demoAssesment extends Component {

    state = {
        data: {
            answered_by: []
        },
        edit_mark1: "",
        edit_mark3: "",
        remark: "",
        sum_1: 0,
        total1: 0,
        sum_2: 0,
        total2: 0,
        sum_3: 0,
        total3: 0,
        donut_data: {
            options: {
                series: [],
                labels: []
            }
        },
        bar_data: {
            series: [{
                name: 'Average',
                data: [8, 7, 9]
              }, {
                name: 'Out of',
                data: [10, 10, 10]
              }],
            options: {
                xaxis: {
                    categories: ['Que1', 'Que2', 'Que3'],
                  }
            }
        }
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
            this.setState({ data: res.data.data, donut_data: {
                options: {
                    series: [3, 4],
                    labels: ['Completed', 'Remaining'],
                    colors:['#00E396', '#FF4560'],
                    plotOptions: {
                        pie: {
                          donut: {
                            size: '60%'
                          }
                        }
                      }
                  }}});
        }).catch(e => console.log(e));
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        const exportData = this.state.data.answered_by.map((student, index) => (
            <tr>
                <td>{index+1} </td>
                <td>{student.prn}</td>
                <td>{student.questions[0].que_ans}</td>
                <td>{student.questions[0].student_mark}</td>
                <td>{student.questions[1].que_ans}</td>
                <td>{student.questions[1].student_mark}</td>
                <td>{student.questions[2].que_ans}</td>
                <td>{student.questions[2].student_mark}</td>
                <td>{student.total_marks}</td>
                <td>{student.remark}</td>
            </tr>
        ))

        const data = this.state.data.answered_by.map((student, index) => (
            <tr>
                <td>{index+1} </td>
                <td>{student.prn}</td>
                <td style={{width: "500px !important"}}><Highlighter
                        searchWords={["shift", "cipher", "fixed", "key", "letter"]}
                        autoEscape={true}
                        textToHighlight={student.questions[0].que_ans}
                        highlightStyle={{ backgroundColor: '#66ff66'}}
                    />
                </td>
                <td>{student.questions[0].student_mark}</td>
                <td><Input style={{ width: "60px" }} name="edit_mark1" onChange={this.handleChange}/></td>
                <td>{student.questions[1].que_ans}</td>
                <td>{student.questions[1].student_mark}</td>
                <td><Highlighter
                        searchWords={["brute", "force"]}
                        autoEscape={true}
                        textToHighlight={student.questions[2].que_ans}
                        highlightStyle={{ backgroundColor: '#66ff66'}}
                    /></td>
                <td>{student.questions[2].student_mark}</td>
                <td><Input style={{ width: "60px" }} type="text" name="edit_mark3" onChange={this.handleChange}/></td>
                <td>{student.total_marks}</td>
                <td>{student.remark}</td>
                <td><Input style={{ width: "500px" }} type="textarea" name="remark" onChange={this.handleChange}/><br/></td>
                <td><Button color="primary" onClick={() => {
                    const config = {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }

                    console.log(this.state.edit_mark1 , this.state.edit_mark3)

                    if(this.state.edit_mark1 !== "")
                    {
                        var data = JSON.stringify({
                            name: "Shift Cipher",
                            prn: student.prn,
                            que_no: "0",
                            marks: this.state.edit_mark1,
                            remark: this.state.remark
                        })
                        axios.post("http://localhost:5000/assignment/update_data", data, config)
                        .then(res => {
                            
                        }).catch(e => console.log(e));
                    }

                    if(this.state.edit_mark3 !== "")
                    {
                        var data = JSON.stringify({
                            name: "Shift Cipher",
                            prn: student.prn,
                            que_no: "2",
                            marks: this.state.edit_mark3,
                            remark: this.state.remark
                        })
                        axios.post("http://localhost:5000/assignment/update_data", data, config)
                        .then(res => {
                            
                        }).catch(e => console.log(e));
                    }
                    //window.location.reload()
                }}>Save</Button></td>
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
                    <Chart options={this.state.donut_data.options} series={this.state.donut_data.options.series} type="donut" width={500} height={320} />
                    </Col>
                    <Col>
                    <Chart options={this.state.bar_data.options} series={[
                                                                        {
                                                                            name: 'Average',
                                                                            data: [3, 1, 2]
                                                                        }, 
                                                                        {
                                                                            name: 'Out of',
                                                                            data: [4, 2, 4]
                                                                        }
                                                                        ]} 
                                                                        type="bar" height={350} />
                    </Col>
                </Row>
                <ReactHTMLTableToExcel  className="btn btn-primary float-right" table="table" filename="Shift Ciper Assesment" sheet="Sheet" buttonText="Export excel" />
                <Table striped responsive bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>PRN</th>
                            <th>Ques 1 Ans</th>
                            <th>Marks /4</th>
                            <th>Edit</th>
                            <th>Ques 2 Ans</th>
                            <th>Marks /2</th>
                            <th>Ques 3 Ans</th>
                            <th>Marks /4</th>
                            <th>Edit</th>
                            <th>Total Marks /10</th>
                            <th>Remark</th>
                            <th>Edit</th>
                            <th>Submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </Table> 
                <Table responsive bordered striped hover id="table" style={{ display: "none" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>PRN</th>
                            <th>Ques 1 Ans</th>
                            <th>Marks /4</th>
                            <th>Ques 2 Ans</th>
                            <th>Marks /2</th>
                            <th>Ques 3 Ans</th>
                            <th>Marks /4</th>
                            <th>Total Marks /10</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exportData}
                    </tbody>
                </Table> 
            </Container>
        );
    }
}

export default demoAssesment;