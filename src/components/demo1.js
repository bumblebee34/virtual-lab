import React, { Component } from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItemHeading, ListGroupItem, ListGroupItemText, Input, Button, Form, FormGroup, Label, Breadcrumb, BreadcrumbItem, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/demo1_1.png';
import img2 from '../assets/images/demo1_2.png';
import img3 from '../assets/images/demo1_3.png';
import img4 from '../assets/images/demo1_4.png';
import img5 from '../assets/images/demo1_5.png';

class demo1 extends Component {
    render(){
        return(
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/studentmain">Dashboard</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/subjectassignments">Subject</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Hill Cipher</BreadcrumbItem>
                </Breadcrumb>
                <Jumbotron>
                    <h1 className="display-3">Hill Cipher</h1>
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
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>The Hill cipher is a polygraphic substitution cipher built on concepts from Linear Algebra. The Hill cipher makes use of modulo arithmetic, matrix multiplication, and matrix inverses; hence, it is a more mathematical cipher than others. The Hill cipher is also a block cipher, so, theoretically, it can work on arbitrary sized blocks.
                            <br/>Since the Hill cipher is fairly complex, let’s encrypt the text “CODE” and, later, decrypt the resulting ciphertext to understand how the Hill cipher works. To keep the example simple, we will use a straightforward substitution scheme where the letter A is mapped to 0, B is mapped to 1, etc. to stick to a 2x2 key matrix. The complexity of the Hill cipher increases with the size of the key matrix.
                            </p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Encryption</ListGroupItemHeading>
                        <ListGroupItemText style={{ fontSize: "20px"}}>
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>Encrypting with the Hill cipher is built on the following operation:
                                <br/><strong>E(K, P) = (K*P) mod 26</strong>
                                <br/>Where K is our key matrix and P is the plaintext in vector form. Matrix multiplying these two terms produces the encrypted ciphertext. <br/>Let's do so step by step:
                                <ol>
                                    <li>
                                        <p>
                                        Pick a keyword to encrypt your plaintext message. Let’s work with the random keyword “DCDF”. Convert this keyword to matrix form using your substitution scheme to convert it to a numerical 2x2 key matrix.
                                        <br/><img className="rounded mx-auto d-block" src={img1} alt=""  style={{height:"200px", width:"70%",marginLeft:"30px"}}/>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                        Next, we will convert our plaintext message to vector form. Since our key matrix is 2x2, the vector needs to be 2x1 for matrix multiplication to be possible. In our case, our message is four letters long so we can split it into blocks of two and then substitute to get our plaintext vectors.
                                        <br/><img className="rounded mx-auto d-block" src={img2} alt=""  style={{height:"200px", width:"70%",marginLeft:"30px"}}/>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                        Now, we can matrix multiply the key matrix with each 2x1 plaintext vector, take the moduli of the resulting 2x1 vectors by 26, and concatenate the results to get “WWVA”, the final ciphertext.
                                        <br/><img className="rounded mx-auto d-block" src={img3} alt=""  style={{height:"200px", width:"70%",marginLeft:"30px"}}/>
                                        </p>
                                    </li>
                                </ol>
                            </p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Decryption</ListGroupItemHeading>
                        <ListGroupItemText style={{ fontSize: "20px"}}>
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>Decrypting with the Hill cipher is built on the following operation:
                                <br/><strong style={{textAlign: "center"}}>D(K, C) = (K-1 *C) mod 26</strong>
                                <br/>Where K is our key matrix and C is the ciphertext in vector form. Matrix multiplying the inverse of the key matrix with the ciphertext produces the decrypted plaintext. <br/>Let's do this step by step with our ciphertext, "WWVA":
                                <ol>
                                    <li>
                                        <p>
                                        First, we calculate the inverse of the key matrix. In doing so, we must keep the result between 0-25 using modulo 26. For this reason, the Extended Euclidean algorithm is used to find the modular multiplicative inverse of the key matrix determinant.
                                        <br/><img className="rounded mx-auto d-block" src={img4} alt=""  style={{height:"200px", width:"70%",marginLeft:"30px"}}/>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                        2.	Next, we will multiply 2x1 blocks of the ciphertext with the inverse of the key matrix to get our original plaintext message, “CODE,” back.
                                        <br/><img className="rounded mx-auto d-block" src={img5} alt=""  style={{height:"400px", width:"70%",marginLeft:"30px"}}/>
                                        </p>
                                    </li>
                                </ol>
                            </p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Reference video</ListGroupItemHeading>
                        <ListGroupItemText>
                        <iframe width="100%" height="554" src="https://www.youtube.com/embed/qe8RZH2SX14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ListGroupItemText>
                    </ListGroupItem>
                    {/* <ListGroupItem>
                        <ListGroupItemHeading>Reference ppt</ListGroupItemHeading>
                        <ListGroupItemText>
                        <iframe width="100%" height="554" src="https://walchandsangliacin-my.sharepoint.com/personal/bhagyaraj_haranale_walchandsangli_ac_in/_layouts/15/Doc.aspx?sourcedoc={b7dfd190-4c29-4f63-99c5-55a7b4ddab78}&amp;action=embedview&amp;wdAr=1.7777777777777777" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                        </ListGroupItemText>
                    </ListGroupItem> */}
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) What are the limitations of  Hill’s cipher?</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Input type="textarea" rows="8"></Input>
                            <br/>
                            <Button color="primary">Submit Answer</Button>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) Polygraphic substitution is a _________ substitution where a block of letters is substituted by a word, character, number, etc.</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Form style={{ fontSize: "20px"}}   >
                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Uniform. (ANS)
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Non Uniform.
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Arbitrary
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        None of the above.
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

export default demo1;