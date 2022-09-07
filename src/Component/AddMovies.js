import React from 'react'
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddMovies = (props) => {

    const [show, setShow] = useState(false);
    const [inputs,setInputs] = useState(
      {title : "" ,
      description:"" ,
      postURL:"",
      rating: ''}
    
    )
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setInputs({...inputs,[e.target.name]:e.target.value })
    }
    const handleSave=()=>{
        props.handleAddMovie(inputs)
        handleClose()
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          ADD MOVIE
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="put your movie title"
                  onChange={handleChange}
                  name = "title"
                  autoFocus
                  
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter your description"
                  onChange={handleChange}
                  name = "description"
                  autoFocus
                  
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="choose your rate"
                  onChange={handleChange}
                  name = "rating"
                  autoFocus
                  
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="PostURL"
                  placeholder="ENTER you url"
                  onChange={handleChange}
                  name = "postURL"
                  autoFocus
                  
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default AddMovies;