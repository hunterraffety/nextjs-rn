import React from 'react'
import { render } from 'node-sass'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.closeButton = null
  }

  closeModal() {
    this.closeButton.click()
  }

  submitModal = () => {
    this.closeModal()
  }

  render() {
    return (
      <>
        <button
          type="button"
          // className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create Movie
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{props.children}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  ref={el => (closeButton = el)}
                  data-dismiss="modal"
                >
                  Close
                </button>
                {props.hasSubmit && (
                  <button type="button" onClick={submitModal}>
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Modal
