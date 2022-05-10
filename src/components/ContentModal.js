import { Button, Modal } from 'react-bootstrap';

const ContentModal = ({ popModal, closeModal, conData }) => {

    return (
        <div>
            <Modal show={popModal} onHide={closeModal} >
                <Modal.Header closeButton >Welcome</Modal.Header>
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