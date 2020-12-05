import React, { Component } from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItemHeading, ListGroupItem, ListGroupItemText, Input, Button, Form, FormGroup, Label } from 'reactstrap';
import imgd from '../logo.jpeg'

class demo extends Component {
    render(){
        return(
            <Container>
                <Jumbotron>
                    <h1 className="display-3">Understanding Shift Cipher</h1>
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
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.The encryption step performed by a Caesar cipher is often incorporated as part of more complex schemes, such as the Vigenère cipher, and still has modern application in the ROT13 system. As with all single-alphabet substitution ciphers, the Caesar cipher is easily broken and in modern practice offers essentially no communications security.
                            <br></br>The transformation can be represented by aligning two alphabets; the cipher alphabet is the plain alphabet rotated left or right by some number of positions. For instance, here is a Caesar cipher using a left rotation of three places, equivalent to a right shift of 23 (the shift parameter is used as the key):
                            <br></br> <br></br> Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                            <br></br>Cipher:   XYZABCDEFGHIJKLMNOPQRSTUVW
                            <br></br><br></br>When encrypting, a person looks up each letter of the message in the "plain" line and writes down the corresponding letter in the "cipher" line.
                            <br></br>Deciphering is done in reverse, with a right shift of 3.</p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                            <ListGroupItemHeading>Figure/Diagram/Image</ListGroupItemHeading>
                            <ListGroupItemText>
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
                        <ListGroupItemHeading>Explain in brief the working of shift Cipher/Ceaser Cipher?</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Input type="textarea" rows="8"></Input>
                            <br/>
                            <Button color="primary">Submit Answer</Button>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Shift Cipher is also Known as:</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Form style={{ fontSize: "20px"}}   >
                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Hill Cipher
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Rail Fence
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Ceaser Cipher
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        None of these
                                    </Label>
                                    </FormGroup>
                                    <br/>
                                    <Button color="primary">Submit Answer</Button>
                                </FormGroup> 
                            </Form>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Is shift cipher breakable? if yes how? if not why not?</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Input type="textarea" rows="8"></Input>
                            <br/>
                            <Button color="primary">Submit Answer</Button>
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
                <br />
            </Container>
        )
    }
}

export default demo;