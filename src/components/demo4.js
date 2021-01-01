import React, { Component } from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItemHeading, ListGroupItem, ListGroupItemText, Input, Button, Form, FormGroup, Label, Breadcrumb, BreadcrumbItem, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/demo4_1.png';
import img2 from '../assets/images/demo4_2.png';
import img3 from '../assets/images/demo4_3.png';

class demo4 extends Component {
    render(){
        return(
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/studentmain">Dashboard</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/subjectassignments">Subject</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Data Encryption Standard DES</BreadcrumbItem>
                </Breadcrumb>
                <Jumbotron>
                    <h1 className="display-3">Data Encryption Standard DES</h1>
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
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>The most widely used encryption scheme is based on the Data Encryption Standard (DES) adopted in 1977 by the National Bureau of Standards, now the National Institute of Standards and Technology (NIST), as Federal Information Processing Standard 46 (FIPS PUB 46). The algorithm itself is referred to as the Data Encryption Algorithm (DEA).
                            <br/>For DES, data are encrypted in 64-bit blocks using a 56-bit key. The algorithm transforms 64-bit input in a series of steps into a 64-bit output. The same steps, with the same key, are used to reverse the encryption.
                            </p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>DES Encryption </ListGroupItemHeading>
                        <ListGroupItemText style={{ fontSize: "20px"}}>
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>As with any encryption scheme, there are two inputs to the encryption function: the plaintext to be encrypted and the key. In this case, the plaintext must be 64 bits in length and the key is 56 bits in length.
                            </p>
                            <img className="rounded mx-auto d-block" src={img1} alt=""  style={{height:"800px", width:"70%",marginLeft:"30px"}}/>
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>DES is based on the two fundamental attributes of cryptography: substitution (also called as confusion) and transposition (also called as diffusion). DES consists of 16 steps, each of which is called as a round. Each round performs the steps of substitution and transposition. 
                            <br/>Broad-level steps in DES :
                            <ol>
                                <li>In the first step, the 64 bit plain text block is handed over to an initial Permutation (IP) function.</li>
                                <li>The initial permutation performed on plain text.</li>
                                <li>Next the initial permutation (IP) produces two halves of the permuted block; says Left Plain Text (LPT) and Right Plain Text (RPT).</li>
                                <li>Now each LPT and RPT to go through 16 rounds of encryption process.</li>
                                <li>In the end, LPT and RPT are re-joined and a Final Permutation (FP) is performed on the combined block</li>
                                <li>The result of this process produces 64 bit cipher text.</li>
                            </ol>
                            </p>
                            <img className="rounded mx-auto d-block" src={img2} alt=""  style={{height:"500px", width:"70%",marginLeft:"30px"}}/>
                            <img className="rounded mx-auto d-block" src={img3} alt=""  style={{height:"500px", width:"70%",marginLeft:"30px"}}/>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Reference video</ListGroupItemHeading>
                        <ListGroupItemText>
                        <iframe width="100%" height="554" src="https://www.youtube.com/embed/8TET_mmwJaM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Reference ppt</ListGroupItemHeading>
                        <ListGroupItemText>
                        <iframe src="https://walchandsangliacin-my.sharepoint.com/personal/bhagyaraj_haranale_walchandsangli_ac_in/_layouts/15/Doc.aspx?sourcedoc={ff9bbf02-303e-4f05-9457-83f1539d1038}&amp;action=embedview&amp;wdAr=1.3333333333333333" width="100%" height="554" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) Explain the terms Confusion and Diffusion in your words with suitable example.</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Input type="textarea" rows="8"></Input>
                            <br/>
                            <Button color="primary">Submit Answer</Button>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) The DES Algorithm Cipher System consists of ____________rounds (iterations) each with a round key</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Form style={{ fontSize: "20px"}}   >
                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        12
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        18
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        9
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        16
                                    </Label>
                                    </FormGroup>
                                    <br/>
                                    <Button color="primary">Submit Answer</Button>
                                </FormGroup> 
                            </Form>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) In the DES algorithm, although the key size is 64 bits only 48bits are used for the encryption procedure, the rest are parity bits.</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Form style={{ fontSize: "20px"}}   >
                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        True
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        False
                                    </Label>
                                    </FormGroup>
                                    <br/>
                                    <Button color="primary">Submit Answer</Button>
                                </FormGroup> 
                            </Form>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) In the DES algorithm the round key is __________ bit and the Round Input is ____________bits.</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Form style={{ fontSize: "20px"}}   >
                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        48, 32
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        64,32
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        56, 24
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        32, 32
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

export default demo4;