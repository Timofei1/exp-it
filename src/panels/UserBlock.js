import React, { Component } from 'react';
import Icon16Chevron from '@vkontakte/icons/dist/16/chevron';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import { Link, ModalCard, ModalRoot, Panel, PanelHeader, Group, Button, View, Root, Epic } from '@vkontakte/vkui';

const MODAL_CARD_NOTIFICATIONS = 'notifications';

class UserBlock extends Component {
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
      return(
        <Panel id="modals" modal={modal}>
          <Group>
              <Button size="xl" level="secondary" onClick={() => this.setActiveModal(MODAL_CARD_NOTIFICATIONS)}>
                  тест
              </Button>
          </Group>
        </Panel>
      )
        }
      }
      



export default UserBlock;