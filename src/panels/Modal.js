import React, { Component } from 'react';
import { ModalRoot, ModalCard, Avatar } from '@vkontakte/vkui';

const MODAL_CARD_NOTIFICATIONS = 'notifications';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeModal: null,
      modalHistory: []
    };

    this.modalBack = () => {
      this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
    };
  }

  setActiveModal(activeModal) {
    activeModal = activeModal || null;
    let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

    if (activeModal === null) {
      modalHistory = [];
    } else if (modalHistory.indexOf(activeModal) !== -1) {
      modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
    } else {
      modalHistory.push(activeModal);
    }

    this.setState({
      activeModal,
      modalHistory
    });
  };

  render() {
    const modal = (
      <ModalRoot activeModal={this.state.activeModal}>
        <ModalCard
          id={MODAL_CARD_NOTIFICATIONS}
          onClose={() => this.setActiveModal(null)}
          title="Приложение запрашивает разрешение на отправку Вам уведомлений"
          actions={[{
            title: 'Запретить',
            type: 'secondary',
            action: () => this.setActiveModal(null)
          }, {
            title: 'Разрешить',
            type: 'primary',
            action: () => this.setActiveModal(null)
          }]}
        />
      </ModalRoot>
    );

    return (modal)
    
  }
}

export default Modal;
