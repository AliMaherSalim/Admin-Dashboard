import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmDel({id, del, delID, setDel}) {
  return (
    <>
    {delID===id&&del&&<Modal.Dialog className='fixed-top bg-white top-50 start-50 translate-middle' >
      <Modal.Header closeButton onClick={()=>setDel(false)}>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={()=>setDel(false)}>Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>}
    </>
  );
}

export default ConfirmDel;

