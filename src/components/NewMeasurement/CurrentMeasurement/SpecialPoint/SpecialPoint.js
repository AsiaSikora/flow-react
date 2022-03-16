import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import {useState} from 'react';

function SpecialPoint() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Special point!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            The flow value has risen sharply, take a water sample for analysis.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default SpecialPoint;