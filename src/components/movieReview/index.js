import React from "react";
import { Button, Modal, ModalDescription } from 'semantic-ui-react'

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
                    <Button id="show-rev">Show Review</Button>
                }>
                <Modal.Header className="rev-author">Review By: <b>{review.author}</b></Modal.Header>
                <Modal.Content scrolling>
                    <ModalDescription className="rev-content">
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