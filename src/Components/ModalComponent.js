import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
    this.setState({modalIsOpen: true});
  }

  componentDidUpdate(){

  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
   // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    console.log('modalIsOpen',this.props.selectedcustvalues)
    let selectedcustvalues=[];
    if(this.props.selectedcustvalues){
      selectedcustvalues=this.props.selectedcustvalues
    }
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.handleCloseButton}
          style={customStyles}
          contentLabel="Example Modal"
        >

        
          <button onClick={this.props.handleCloseButton}>close</button>
         {
           selectedcustvalues.map(value =>{
           return (
             <div>
             <div>{value["attribute"]}</div>
             <div>{value["included_values"]}</div>
             <div>{value["excluded_values"]}</div>
             </div>
           );
         })}
          

        </Modal>
      </div>
    );
  }
}
