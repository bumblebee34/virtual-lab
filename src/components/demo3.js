import React, { Component } from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItemHeading, ListGroupItem, ListGroupItemText, Input, Button, Form, FormGroup, Label, Breadcrumb, BreadcrumbItem, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import img from '../assets/images/demo3_1.png';

class demo3 extends Component {
    render(){
        return(
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/studentmain">Dashboard</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/subjectassignments">Subject</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Steganography</BreadcrumbItem>
                </Breadcrumb>
                <Jumbotron>
                    <h1 className="display-3">Steganography</h1>
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
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}><strong>What is Steganography?</strong>
                            <br/>Steganography is the art and science of embedding secret messages in a cover message in such a way that no one, apart from the sender and intended recipient, suspects the existence of the message 
                            <br/><br/>The diagram below depicts a basic steganographic model.
                            </p>
                            <img className="rounded mx-auto d-block" src={img} alt=""  style={{height:"350px", width:"70%",marginLeft:"30px"}}/>
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>As the image depicts, both cover file(X) and secret message(M) are fed into steganographic encoder as input. Steganographic Encoder function, f(X,M,K) embeds the secret message into a cover file. Resulting Stego Object looks very similar to your cover file, with no visible changes. This completes encoding. To retrieve the secret message, Stego Object is fed into Steganographic Decoder.

                            </p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Historical Background</ListGroupItemHeading>
                        <ListGroupItemText style={{ fontSize: "20px"}}>
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>Steganography is the practice of concealing a secret message behind a normal message. It stems from two Greek words, which are steganos, means covered and graphia, means writing. Steganography is an ancient practice, being practiced in various forms for thousands of years to keep communications private. 
                            <br/><br/>For Example:
                            <ul>
                                <li>The first use of steganography can be traced back to 440 BC when ancient Greece, people wrote messages on wood and covered it with wax, that acted as a covering medium</li>
                                <li>Romans used various forms of Invisible Inks, to decipher those hidden messages light or heat were used</li>
                                <li>During World War II the Germans introduced microdots, which were complete documents, pictures, and plans reduced in size to the size of a dot and were attached to normal paperwork</li>
                                <li>Null Ciphers were also used to hide unencrypted secret messages in an innocent looking normal message</li>
                            </ul>
                            <br/>Now, we have a lot of modern steganographic techniques and tools to make sure that knows our data remains secret. Now you might be wondering if steganography is same as cryptography. No, they are two different concepts.
                            </p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>HOW STEGANOGRAPHY WORKS</ListGroupItemHeading>
                        <ListGroupItemText style={{ fontSize: "20px"}}>
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>Steganography replaces unneeded or unused bits in regular computer files (Graphics, sound, text) with bits of different and invisible information. Hidden information can be any other regular computer file or encrypted data.
                            <br/>Steganography differs from cryptography in a way that it masks the existence of the message where cryptography works to mask the content of the message.
                            <br/>Steganography sometimes used in conjunction with encryption. An encrypted file may still hide information using steganography, so even if the encrypted file is deciphered,the hidden information is not seen.
                            </p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Steganography Techniques</ListGroupItemHeading>
                        <ListGroupItemText style={{ fontSize: "20px"}}>
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>Depending on the nature of the cover object(actual object in which secret data is embedded), steganography can be divided into five types:
                            <ol>
                                <li>
                                    <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>
                                    Image Steganography
                                    <br/>Hiding the data by taking the cover object as the image is known as image steganography.  In digital steganography, images are widely used cover source because there are a huge number of bits present in the digital representation of an image. There are a lot of ways to hide information inside an image. Common approaches include:
                                        <ul>
                                            <li>Least Significant Bit Insertion</li>
                                            <li>Masking and Filtering</li>
                                            <li>Redundant Pattern Encoding</li>
                                            <li>Encrypt and Scatter</li>
                                            <li>Coding and Cosine Transformation</li>
                                        </ul>
                                    </p>
                                </li>
                                <li>
                                    <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>
                                    Audio Steganography
                                    <br/>In audio steganography, the secret message is embedded into an audio signal which alters the binary sequence of the corresponding audio file. Hiding secret messages in digital sound is a much more difficult process when compared to others, such as Image Steganography. Different methods of audio steganography include:
                                        <ul>
                                            <li>Least Significant Bit Insertion</li>
                                            <li>Parity Encoding	</li>
                                            <li>Phase Coding</li>
                                            <li>Spread Spectrum</li>
                                        </ul>
                                    This method hides the data in WAV, AU, and even MP3 sound files.
                                    </p>
                                </li>
                                <li>
                                    <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>
                                    Video Steganography
                                    <br/>In Video Steganography you can hide kind of data into digital video format. The advantage of this type is a large amount of data can be hidden inside and the fact that it is a moving stream of images and sounds. You can think of this as the combination of Image Steganography and Audio Steganography. Two main classes of Video Steganography include:
                                        <ul>
                                            <li>Embedding data in uncompressed raw video and compressing it later</li>
                                            <li>Embedding data directly into the compressed data stream</li>
                                        </ul>
                                    </p>
                                </li>
                                <li>
                                    <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>
                                    Network Steganography (Protocol Steganography)
                                    <br/>It is the technique of embedding information within network control protocols used in data transmission such TCP, UDP, ICMP etc. You can use steganography in some covert channels that you can find in the OSI model. For Example, you can hide information in the header of a TCP/IP packet in some fields that are either optional.
                                    </p>
                                </li>
                            </ol>
                            </p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Best Tools to Perform Steganography</ListGroupItemHeading>
                        <ListGroupItemText style={{ fontSize: "20px"}}>
                            <p class="card-text" style={{margin: "20px 20px 20px 20px"}}>There are many software available that offer steganography. Some offer normal steganography, but a few offer encryption before hiding the data. These are the steganography tools which are available for free:
                            <ul>
                                <li>Stegosuite is a free steganography tool which is written in Java. With Stegosuite you can easily hide confidential information in image files.</li>
                                <li>Steghide is an open source Steganography software that lets you hide a secret file in image or audio file.</li>
                                <li>Xiao Steganography is a free software that can be used to hide data in BMP images or in WAV files.</li>
                                <li>SSuite Picsel is another free portable application to hide text inside an image file but it takes a different approach when compared to other tools.</li>
                                <li>OpenPuff is a professional steganographic tool where you can store files in image, audio, video or flash files</li>
                            </ul>
                            Well, these are few tools to perform steganography. There are many other different tools with different capabilities. However, you will get the desired results from these tools.
                            </p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Reference video</ListGroupItemHeading>
                        <ListGroupItemText>
                        <iframe width="100%" height="554" src="https://www.youtube.com/embed/rrl36aoWq0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Reference ppt</ListGroupItemHeading>
                        <ListGroupItemText>
                        <iframe src="//www.slideshare.net/slideshow/embed_code/key/K3WSSQz7X8SgVX"  width="100%" height="554" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) How is Steganography different from Cryptography?</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Input type="textarea" rows="8"></Input>
                            <br/>
                            <Button color="primary">Submit Answer</Button>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) Is another data hiding technique which can be used in conjunction with cryptography for the extra-secure method of protecting data.</ListGroupItemHeading>
                        <ListGroupItemText>
                            <Form style={{ fontSize: "20px"}}   >
                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Cryptography
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Steganography (ANS)
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Tomography
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Chorography
                                    </Label>
                                    </FormGroup>
                                    <br/>
                                    <Button color="primary">Submit Answer</Button>
                                </FormGroup> 
                            </Form>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Q) Steganography follows the concept of security through obscurity.</ListGroupItemHeading>
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
                </ListGroup>
                <br />
            </Container>
        )
    }
}

export default demo3;