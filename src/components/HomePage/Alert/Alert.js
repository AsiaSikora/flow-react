import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import {useState} from 'react';

function Alert(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function stopMeasurement(){
        handleClose();
        props.hideMeasurement();
    }
  
    return (
      <div>
        <Button variant="danger" onClick={handleShow}>
          Stop measurement
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Stop measurement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Are you sure you want to finish the measurement?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={stopMeasurement}>Yes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default Alert;