import React from "react";
import { Button,Image, Modal, ModalDescription } from 'semantic-ui-react'

export default ({ review }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Modal
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "800px",
                }}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}

                trigger={
                    <Button>Show Review</Button>
                }>
                <Modal.Header>{review.author}</Modal.Header>
                <Modal.Content scrolling>
                    <ModalDescription>
                        <p>Review By: {review.author} </p>
                        <p>{review.content} </p>
                    </ModalDescription>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        content="Close"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpen(false)}
                        positive
                    />
                </Modal.Actions>
            </Modal>
    </>
  );
};