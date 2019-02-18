import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#app')

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  state = {

  };

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  componentDidUpdate() {

  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    console.log('modalIsOpen', this.props.selectedcustvalues)
    let selectedcustvalues = [];
    if (this.props.selectedcustvalues) {
      selectedcustvalues = this.props.selectedcustvalues
    }
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.handleCloseButton}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.props.handleCloseButton}>close</button>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Col1</th>
                <th scope="col">Col2</th>
                <th scope="col">Col3</th>
              </tr>
            </thead>
            <tbody>
            {
              selectedcustvalues.map( (value, i) => {
                return (
                  <tr key={i}>
                    <td>{value["attribute"]}</td>
                    <td>{value["included_values"]}</td>
                    <td>{value["excluded_values"]}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>


        </Modal>
      </div>
    );
  }
}
