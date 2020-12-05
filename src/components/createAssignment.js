import React,{useState} from "react";
import {Button, ButtonGroup, Form, Container} from 'react-bootstrap';

const CreateAssignment = () => {
  const [inputList, setInputList] = useState([]);

  const onAddtxtClick = event => {
    setInputList(inputList.concat(<><textarea 
      className="md-textarea form-control" 
      placeholder="Enter Description" 
      key={inputList.length} 
      /><br/></>));
  };

  const onAddimgClick = event => {
    setInputList(inputList.concat(<> <input
        type="file"
        className="md-textarea form-control"        
        key={inputList.length} 
        /><br/></>));
  };

  const onAddvidClick = event => {
    setInputList(inputList.concat(<> <input
        type="url" placeholder="Enter url"
        className="md-textarea form-control"     
        key={inputList.length} 
        /><br/></>));
  };

  const date=Date().toLocaleString();

  return (
        <Container  className="cont-createassignment">
            <h2>Create Assigment</h2> 
            <Form.Label>Assigment Name: </Form.Label>
            <Form.Control type="text" placeholder="Enter Assigment Name" />
            <Form.Label>Due Date: </Form.Label>
            <Form.Control type="date" value={date}/>
            <ButtonGroup style={{margin: "10px"}}>
                <Button onClick={onAddtxtClick}>Add Descrption</Button>
                <Button onClick={onAddimgClick}>Add Image</Button>
                <Button onClick={onAddvidClick}>Add Video</Button>
            </ButtonGroup>
            {inputList}
            <Button style={{margin: "10px"}}>Genrate</Button>
            <Button style={{margin: "10px"}}>Cancel</Button>
        </Container>
    );
};

export default CreateAssignment;