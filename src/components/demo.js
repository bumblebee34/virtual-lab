import React, { Component } from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItemHeading, ListGroupItem, ListGroupItemText, Input, Button, Form, FormGroup, Label, Breadcrumb, BreadcrumbItem, ButtonGroup } from 'reactstrap';
import imgd from '../shift.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

class demo extends Component {

    state = {
        text:"",
        cipher:"",
        key: 0,
        brute: [],
        bruteStr: "",
        sub1: "",
        obj1: "",
        sub2: "",
        submitted: true,
        que1: [],
        que3: []
    }

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        prn: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }

    componentDidMount = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        var data = JSON.stringify({
            name: "Shift Cipher",
            prn: this.props.prn
        })

        axios.post('http://localhost:5000/assignment/check_answer', data, config)
        .then(res => {
            if(res.data.msg == "Already Submitted")
                this.setState({ submitted: true});
            else if(res.data.msg == "Not Submitted")
            this.setState({ submitted: false});
        })
        .catch(e => console.log(e));
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    

    SubmitAnswer = () => {
        this.setState({ submitted: true});
        var name = "Shift Cipher";
        var keywords1 = {
            "shift": 2, "cipher": 1, "fixed": 0.5, "key": 0.25, "letter": 0.25
        }
        var mark1, mark2, mark3;
        var cnt = 0;
        var sub1 = this.state.sub1.toLowerCase();
        for(var key in keywords1) {
            if(sub1.includes(key))
                cnt += keywords1[key];
        };
        mark1 = cnt;
        cnt = 0;
        var sub2 = this.state.sub2.toLowerCase();
        var keywords2 = {"brute": 2, "force": 2};
        for(var key in keywords2) {
            if(sub2.includes(key))
                cnt += keywords2[key];
        };
        mark3 = cnt;
        mark2 = this.state.obj1 == "Hill Cipher" ? 2 : 0;
        var assignment = JSON.stringify({
            name: name,
            prn: this.props.prn,
            date: new Date().toLocaleString(),
            total_marks: (mark1+mark2+mark3).toString(),
            remark: "",
            questions: [
                {
                    que_ans: this.state.sub1,
                    student_mark: mark1.toString(),
                    marks: "4"
                },
                {
                    que_ans: this.state.obj1,
                    student_mark: mark2.toString(),
                    marks: "2"

                },
                {
                    que_ans: this.state.sub2,
                    student_mark: mark3.toString(),
                    marks: "4"

                }
            ]
        });

        console.log(assignment);

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post('http://localhost:5000/assignment/add_submission', assignment, config)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
    }

    caesarShift = function (str, amount) {
        // Wrap the amount
        if (amount < 0) {
            return this.caesarShift(str, amount + 26);
        }
        
        // Make an output variable
        var output = "";
        
        // Go through each character
        for (var i = 0; i < str.length; i++) {
            // Get the character we'll be appending
            var c = str[i];
        
            // If it's a letter...
            if (c.match(/[a-z]/i)) {
                // Get its code
                var code = str.charCodeAt(i);
            
                // Uppercase letters
                if (code >= 65 && code <= 90) {
                    c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
                }
            
                // Lowercase letters
                else if (code >= 97 && code <= 122) {
                    c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
                }
            }
    
        // Append
        output += c;
        }
        return output;
    }

    bruteForce = (str) => {

        for(var j = 1 ; j < 25 ; j++){

            var amount = j
            // Make an output variable
            var output = "";

            // Go through each character
            for (var i = 0; i < str.length; i++) {
                var c = str[i];
            
                // If it's a letter...
                if (c.match(/[a-z]/i)) {
                    // Get its code
                    var code = str.charCodeAt(i);
                
                    // Uppercase letters
                    if (code >= 65 && code <= 90) {
                        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
                    }
                
                    // Lowercase letters
                    else if (code >= 97 && code <= 122) {
                        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
                    }
                }
        
                // Append
                output += c;
            }
            console.log(output);
            this.setState({ brute: this.state.brute.concat(<h4>{output}</h4>) });
        }
    }

    render(){
        return(
            <Container>
                {
                    this.props.type == "Faculty" ? 
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/facultymain">Dashboard</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Shift Cipher</BreadcrumbItem>
                    </Breadcrumb>:
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/studentmain">Dashboard</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/subjectassignments">Subject Assignments</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Shift Cipher</BreadcrumbItem>
                    </Breadcrumb>
                }
                
                <Jumbotron>
                    <h1 className="display-3">Shift Cipher</h1>
                    <p className="lead"></p>
                    <hr className="my-2" />
                    <p className="lead">Created on : 20 November, 2020 <br/>  Last edit : 1 December, 2020 <br/>   Due date : 20 December, 2020</p>
                    <p className="lead">
                    </p>
                </Jumbotron>
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>Introduction</ListGroupItemHeading>
                        <ListGroupItemText style={{ fontSize: "20px"}}>
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.The encryption step performed by a Caesar cipher is often incorporated as part of more complex schemes, such as the Vigenère cipher, and still has modern application in the ROT13 system. As with all single-alphabet substitution ciphers, the Caesar cipher is easily broken and in modern practice offers essentially no communications security.
                            <br></br>The transformation can be represented by aligning two alphabets; the cipher alphabet is the plain alphabet rotated left or right by some number of positions. For instance, here is a Caesar cipher using a left rotation of three places, equivalent to a right shift of 23 (the shift parameter is used as the key):
                            <br></br> <br></br> Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                            <br></br>Cipher:   XYZABCDEFGHIJKLMNOPQRSTUVW
                            <br></br><br></br>When encrypting, a person looks up each letter of the message in the "plain" line and writes down the corresponding letter in the "cipher" line.
                            <br></br>Deciphering is done in reverse, with a right shift of 3.</p>
                            <br/>
                            <img className="rounded mx-auto d-block" src={imgd} alt=""  style={{height:"500px", width:"70%",marginLeft:"30px"}}/>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Reference video</ListGroupItemHeading>
                        <ListGroupItemText>
                        <iframe width="100%" height="554" src="https://www.youtube.com/embed/sbYhGEcqHCY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Reference ppt</ListGroupItemHeading>
                        <ListGroupItemText>
                        <iframe width="100%" height="554" src="https://walchandsangliacin-my.sharepoint.com/personal/bhagyaraj_haranale_walchandsangli_ac_in/_layouts/15/Doc.aspx?sourcedoc={b7dfd190-4c29-4f63-99c5-55a7b4ddab78}&amp;action=embedview&amp;wdAr=1.7777777777777777" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h4>Encrption</h4>
                        <ListGroupItemText>
                            Shift
                            <Input width="5px" type="select" id="key" name="key" onChange={this.handleChange}>
                            <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                            </Input>
                            <br/>
                            Plain text
                            <Input type="textarea" id="text" name="text" rows="2" onChange={this.handleChange}></Input>
                            <br/>
                            Cipher text
                            <br/>
                            <h3>{this.caesarShift(this.state.text,parseInt(this.state.key))}</h3>
                            <br/>
                        </ListGroupItemText>
                        <h4>Decrption</h4>
                        <ListGroupItemText>
                            Shift
                            <Input width="5px" type="select" id="key" name="key" onChange={this.handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                            </Input>
                            <br/>
                            Cipher text
                            <Input type="textarea" id="cipher" name="cipher" rows="2" onChange={this.handleChange}></Input>
                            <br/>
                            Plain text
                            <br/>
                            <h3>{this.caesarShift(this.state.cipher,parseInt(this.state.key)*-1)}</h3>
                            <br/>
                        </ListGroupItemText>
                    </ListGroupItem>
                    {/* <ListGroupItem>
                        <ListGroupItemHeading>Brute Force Attack</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Input type="textarea" id="bruteStr" name="bruteStr" onChange={this.handleChange}/>
                            <br/>
                            <Button color="primary" 
                                onClick={() => this.bruteForce(this.state.bruteStr)}>
                                Submit Answer
                            </Button>
                            {this.state.brute}
                        </ListGroupItemText>
                    </ListGroupItem> */}
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) Explain in brief the working of shift Cipher/Ceaser Cipher?</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Input type="textarea" rows="8" id="sub1" name="sub1" onChange={this.handleChange}></Input>
                            <br/>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) Shift Cipher is also Known as:</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Form style={{ fontSize: "20px"}}   >
                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" id="obj1" name="obj1" onChange={this.handleChange} value="Hill Cipher"/>
                                        Hill Cipher
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" id="obj1" name="obj1" onChange={this.handleChange} value="Rail Fence" />
                                        Rail Fence
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" id="obj1" name="obj1" onChange={this.handleChange} value="Ceaser Cipher" />
                                        Ceaser Cipher
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" id="obj1" name="obj1" onChange={this.handleChange} value="None of these"/>
                                        None of these
                                    </Label>
                                    </FormGroup>
                                    <br/>
                                </FormGroup> 
                            </Form>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) Is shift cipher breakable? if yes how? if not why not?</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Input type="textarea" rows="8" id="sub2" name="sub2" onChange={this.handleChange} spellCheck="true"></Input>
                            <br/>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemText>
                            {
                                this.state.submitted ? 
                                null :
                                <Button color="primary" onClick={this.SubmitAnswer} style={{marginLeft: "40%"}}>Submit Answer</Button>
                            }
                        </ListGroupItemText>
                    </ListGroupItem>
                    {/* <ListGroupItem>
                        <ListGroupItemText>
                            <iframe src="https://www.jdoodle.com/embed/v0/3a9X" width="100%" height="554"></iframe>
                        </ListGroupItemText>
                    </ListGroupItem> */}
                </ListGroup>
                <br />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return{
        id: state.login.id,
        name: state.login.name,
        email: state.login.email,
        prn: state.login.prn,
        type: state.login.type
    }
}

export default connect(mapStateToProps, {})(demo);