import React, { Component } from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItemHeading, ListGroupItem, ListGroupItemText, Input, Button, Form, FormGroup, Label, Breadcrumb, BreadcrumbItem, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import img from '../assets/images/demo2_1.png';

class demo2 extends Component {

    step4 = "gcd(Φ(n), e)=1 and 1<e< Φ(n)";
    step5 = "d≡e-1 mod(Φ(n))";
    a = "{e, n}";
    b = "{d, n}";

    render(){
        return(
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/studentmain">Dashboard</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/subjectassignments">Subject</Link></BreadcrumbItem>
                    <BreadcrumbItem active>RSA Algorithm</BreadcrumbItem>
                </Breadcrumb>
                <Jumbotron>
                    <h1 className="display-3">RSA Algorithm</h1>
                    <p className="lead"></p>
                    <hr className="my-2" />
                    <p className="lead">Created on : 20 November, 2020 <br/>  Last edit : 1 December, 2020 <br/>   Due date : 20 December, 2020</p>
                    <p className="lead">
                        <Button color="success">Mark as done</Button>
                    </p>
                </Jumbotron>
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>Introduction</ListGroupItemHeading>
                        <ListGroupItemText style={{ fontSize: "20px"}}>
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>The pioneering paper by Diffie and Hellman introduced a new approach to cryptography and, in effect, challenged cryptologists to come up with a cryptographic algorithm that met the requirements for public-key systems. One of the first of the responses to the challenge was developed in 1977 by Ron Rivest, Adi Shamir, and Len Adleman at MIT and first published in 1978. The Rivest-Shamir-Adleman (RSA) scheme has since that time reigned supreme as the most widely accepted and implemented general-purpose approach to public-key encryption.
                                <br/>RSA is based on the fact that it is always easy to calculate the product of two prime numbers, but given the product it is very difficult and time consuming to find the two prime numbers.
                                <br/><br/>Steps of RSA Algorithm:
                                <br/><br/>Key Generation
                                <ul>
                                    <li>Step 1: Select two prime numbers p and q such that p!=q</li>
                                    <li>Step 2 : Calculate n=p*q</li>
                                    <li>Step 3 : Calculate Φ(n)=(p-1)*(q-1)</li>
                                    <li>Step 4 : Select integer e such that {this.step4}</li>
                                    <li>Step 5 : Calculate {this.step5}</li>
                                    <li>Step 6 : Public Key : PU={this.a}<br/>Private Key : PR={this.b}</li>
                                </ul>
                                <br/>Encryption
                                <ul>
                                    <li>Plaintext : M &lt; n</li>
                                    <li>Ciphertext : C=Me mod(n)</li>
                                </ul>
                                <br/>Decryption
                                <ul>
                                    <li>Ciphertext : C</li>
                                    <li>Plaintext : M=Cd mod(n)</li>
                                </ul>
                                <br/>
                                <img className="rounded mx-auto d-block" src={img} alt=""  style={{height:"200px", width:"70%",marginLeft:"30px"}}/>
                            </p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>The Security of RSA</ListGroupItemHeading>
                        <ListGroupItemText style={{ fontSize: "20px"}}>
                            <p>Four possible approaches to attacking the RSA algorithm are as follows:</p>
                            <ul>
                                <li><strong>Brute force:</strong> This involves trying all possible private keys.</li>
                                <li><strong>Mathematical attacks:</strong> There are several approaches, all equivalent in effort to factoring the product of two primes.</li>
                                <li><strong>Timing attacks:</strong>Timing attacks: These depend on the running time of the decryption algorithm.</li>
                                <li><strong>Chosen ciphertext attacks:</strong> This type of attack exploits properties of the RSA algorithm.</li>
                            </ul>
                            <br/>
                            <p>The defence against the brute-force approach is the same for RSA as for other cryptosystems, namely,
                            use a large key space. Thus, the larger the number of bits in d, the better. However, because the
                            calculations involved, both in key generation and in encryption/decryption, are complex, the larger the
                            size of the key, the slower the system will run.
                            </p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Reference video</ListGroupItemHeading>
                        <ListGroupItemText>
                        <iframe src="https://drive.google.com/file/d/1ualCijyOLMlnvdMQ6hRMdCdwZazQvla5/preview" width="100%" height="554"></iframe>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Reference ppt</ListGroupItemHeading>
                        <ListGroupItemText>
                        <iframe src="https://walchandsangliacin-my.sharepoint.com/personal/bhagyaraj_haranale_walchandsangli_ac_in/_layouts/15/Doc.aspx?sourcedoc={d09bc6e2-bdbb-4dd6-b0cb-65fe67b2eff6}&amp;action=embedview&amp;wdAr=1.3333333333333333" width="100%" height="554" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) For p = 11 and q = 19 and choose e=17. Apply RSA algorithm where message=5 and find the cipher text</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Input type="textarea" rows="8"></Input>
                            <br/>
                            <Button color="primary">Submit Answer</Button>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) In the RSA algorithm, we select 2 random large values ‘p’ and ‘q’. Which of the following is the property of ‘p’ and ‘q’?</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Form style={{ fontSize: "20px"}}   >
                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        p and q should be divisible by Ф(n)
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        p and q should be co-prime
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        p and q should be prime
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        p/q should give no remainder
                                    </Label>
                                    </FormGroup>
                                    <br/>
                                    <Button color="primary">Submit Answer</Button>
                                </FormGroup> 
                            </Form>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) In RSA, Ф(n) = ___ in terms of p and q.</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Form style={{ fontSize: "20px"}}   >
                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        (p)/(q)
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        (p)(q)
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        (p-1)(q-1)
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        (p+1)(q+1)
                                    </Label>
                                    </FormGroup>
                                    <br/>
                                    <Button color="primary">Submit Answer</Button>
                                </FormGroup> 
                            </Form>
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
                <br />
            </Container>
        )
    }
}

export default demo2;