import React, { Component } from 'react';
import axios from 'axios';

class ImageUpload extends Component {

    state ={
        file: null
    }

    onChange = e =>{
        this.setState({ file: e.target.files[0] });
    }

    onSubmit = e => {
        e.preventDefault();
 
        const formData = new FormData();

        formData.append("img", this.state.file, "Bhagyaraj");
    
        fetch("http://localhost:5000/", {
            method: "POST",
            body: formData
        }).then(r => {
            console.log(r);
        });

    };

    render() {
        return (
            <div>
                <input type="file" id="file" name="file" onChange={this.onChange}></input>
                <button onClick={this.onSubmit}>Upload</button>
                <img id="image" src={`http://localhost:5000/Bhagyaraj`} className="img-fluid" />
            </div>
        );
    }
}

export default ImageUpload;