import { Modal, Button } from 'rsuite';

interface IProps {
    open: boolean,
    setOpen: (arg: boolean) => void,
    title: string,
    onOkClick: () => void,
    text?: string,
    okButtonText?: string,
    cancelButtonText?: string,
    dangerMode?: boolean
}

function ModalComponent({
    open,
    setOpen,
    title,
    onOkClick,
    text = "",
    okButtonText = "OK",
    cancelButtonText = "Cancel",
    dangerMode = false
}: IProps) {
    const handleClose = () => setOpen(false);


    const handleOkClick = () => {
        onOkClick();
    };

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {text}
                </Modal.Body>
                <Modal.Footer>
                    {dangerMode ?
                        <>
                            <Button onClick={handleClose} appearance="default">
                                {cancelButtonText}
                            </Button>

                            <Button onClick={handleOkClick} color="red" appearance="primary">
                                {okButtonText}
                            </Button>
                        </>
                    :
                        <>
                            <Button onClick={handleOkClick} color="green" appearance="primary">
                                {okButtonText}
                            </Button>

                            <Button onClick={handleClose} color="red" appearance="ghost">
                                {cancelButtonText}
                            </Button>
                        </>
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalComponent;
