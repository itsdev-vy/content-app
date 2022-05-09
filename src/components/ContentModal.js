import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const ContentModal = ({ conData }) => {
    const [conModal, setConModal] = useState(false);

    return (
        <div>
            <Button onClick={() => setConModal(true)}>Custom Button</Button>
            <Modal show={conModal} onHide={() => setConModal(false)} >
                <Modal.Header closeButton >Welcome</Modal.Header>
                <Modal.Body>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: conData
                        }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-danger' onClick={() => setConModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ContentModal;