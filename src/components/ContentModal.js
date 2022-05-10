import { Button, Modal } from 'react-bootstrap';

const ContentModal = ({ popModal, closeModal, conData }) => {
    const fullscreen = true;

    return (
        <div>
            <Modal show={popModal} fullscreen={fullscreen} onHide={closeModal} >
                <Modal.Header closeButton>Welcome</Modal.Header>
                <Modal.Body>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: conData
                        }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-danger' onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ContentModal;