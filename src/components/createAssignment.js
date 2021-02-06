import React, { Component } from 'react';
import { Col, Button, ButtonGroup, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class CreateAssignment extends Component {

    state = {
        list: []
    }

    AddText = e => {
        this.setState({
            list : this.state.list.concat(
                <FormGroup row>
                    <Label htnlFor="textarea" md={2}>Text</Label>
                    <Col md={10}>
                    <Input type="textarea" name="textarea" id="textarea" />
                    </Col>
                </FormGroup>
            )
        })
    }

    AddImage = e => {
        this.setState({
            list : this.state.list.concat(
                <FormGroup row>
                    <Label htnlFor="image" md={2}>Image</Label>
                    <Col md={10}>
                    <Input type="file" name="image" id="image" />
                    </Col>
                </FormGroup>
            )
        })
    }

    AddVideo = e => {
        this.setState({
            list : this.state.list.concat(
                <FormGroup row>
                    <Label htnlFor="video" md={2}>Video</Label>
                    <Col md={10}>
                    <Input type="text" name="video" id="video" placeholder="Please left click on the video and copy the Copy embed code and paste it here" />
                    </Col>
                </FormGroup>
            )
        })
    }

    AddPowerpoint = e => {
        this.setState({
            list : this.state.list.concat(
                <FormGroup row>
                    <Label htnlFor="video" md={2}>Power Point</Label>
                    <Col md={10}>
                    <Input type="text" name="video" id="video" placeholder="Please copy embed code and paste it here" />
                    </Col>
                </FormGroup>
            )
        })
    }

    render() {
        return (
            <Container>
                <Form>
                    <FormGroup row>
                        <Label htmlFor="name" md={2}>Assignment Name</Label>
                        <Col md={10}>
                        <Input type="text" name="name" id="name" placeholder="Enter assignment name here" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="duedate" md={2}>Due Date</Label>
                        <Col md={3}>
                        <Input type="date" name="duedate" id="duedate" placeholder="Choose due date"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 'auto', offset: 2 }}>
                            <ButtonGroup>
                                <Button color="primary" onClick={this.AddText}>Text</Button>
                                <Button color="primary" onClick={this.AddImage}>Image</Button>
                                <Button color="primary" onClick={this.AddVideo}>Video</Button>
                                <Button color="primary" onClick={this.AddPowerpoint}>Power Point</Button>
                            </ButtonGroup>
                        </Col>
                    </FormGroup>
                    {this.state.list}
                </Form>
            </Container>
        );
    }
}

export default CreateAssignment;