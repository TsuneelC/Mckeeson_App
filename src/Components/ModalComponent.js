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
    this.handleRemove= this.handleRemove.bind(this);
  }

  state = {

  };

  handleRemove(val,type){
    this.props.handleDelete(val,type,this.props.selectedOption);
  }

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
    console.log('this.props.selectedcustvalues', this.props.selectedcustvalues)
    console.log('selectedOption', this.props.selectedOption)
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
          <table className="table" border="1">
            {
              selectedcustvalues.map((value, i) => {
                if (value["attribute"] == this.props.selectedOption) {
                  return (
                    <caption>{value["attribute"].toUpperCase()}</caption>
                  );
                }


              })
            }
            <tr>
              <th>Included</th>
              <th>Excluded</th>
            </tr>
            <tbody>
              {
                selectedcustvalues.map((value, i) => {
                  if (value["attribute"] == this.props.selectedOption) {
                    var included_values = value["included_values"];
                    var excluded_values = value["excluded_values"];
                    return (
                      <tr>
                        <td>
                          <ul>
                            {included_values.map((val) => {
                              return <li>{val}
                                <a href="#" onClick={() => this.handleRemove(val,'included')}>
                                  <span className="glyphicon glyphicon-remove-sign"></span>
                                </a></li>
                            })}
                          </ul>
                        </td>
                        <td>
                          <ul>
                            {excluded_values.map((val) => {
                              return <li>{val}
                                <a href="#"  onClick={() => this.handleRemove(val,'excluded')}>
                                  <span className="glyphicon glyphicon-remove-sign"></span>
                                </a></li>
                            })}
                          </ul>
                        </td>
                      </tr>

                    );
                  }

                })
              }
            </tbody>
          </table>


        </Modal>
      </div>
    );
  }
}
