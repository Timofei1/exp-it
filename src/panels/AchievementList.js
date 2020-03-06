import React, { Component } from 'react';
import Achievement from './Achievement';
import { setModalActive } from './actions';
import './style.css';
import {Button} from '@vkontakte/vkui';

class AchievementList extends Component {
    clickAchievement = (avatar, description, title) => {
        this.props.dispatch(
            setModalActive({ avatar, description, title })
        );
    };

    renderList = () => {
        const achievements = this.props.achievements;
        
            return (
                <div className="achievements-box">
                             <Achievement
                                img="https://sun3-10.userapi.com/c855136/v855136589/18636c/1_D877Mj2bE.jpg?ava=1"
                                title="типо того"
                                desc="бла бла бла"
                                click={() => this.clickAchievement('noftications')}
                            />
                
                        
                    
                </div>
            );
         
    };

    render() {
        return this.renderList();
    }
}


export default AchievementList;