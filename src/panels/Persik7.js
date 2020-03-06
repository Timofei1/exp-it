import React from 'react';
import Icon16Chevron from '@vkontakte/icons/dist/16/chevron';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import { Link, Tabbar, TabbarItem, PanelHeader, Panel, Separator, Header, FixedLayout, FormStatus } from '@vkontakte/vkui';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import './style.css'
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';

const Persik7 = ({go, id}) => (

    <Panel id={id} bgcolor="#FFFFFF">
		<PanelHeader>Пример карточки</PanelHeader>
		 <Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28ArticleOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik8"
          ><Icon28PictureOutline/></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik6"
          ><Icon28FireOutline width={30} height={30}/></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik7"
          ><Icon28Profile width={30} height={30} fill="#4682B4"/></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon28HelpOutline width={30} height={30}/></TabbarItem>
        </Tabbar>
      
        <body bgcolor="#FFFFFF">
        <Group>
            <br/>
            <br/>
        <Div className="achievements-top">
            <div className="user-block">
                <div className="user-avatar" style={{ backgroundImage: 'url(https://sun9-35.userapi.com/c200828/v200828522/11d0f/mN53S7VCcvo.png)' }}>
                    <div className="user-rating">
                        <Icon24Favorite width={14} height={14} fill="ffc107" />
                        5.00
                    </div>
                </div>
                <div className="user-name">
                    <div className="user-name__name">
                        <Link style={{ display: 'none' }} href={'https://vk.com/id_123_12'} />
                        No Name
                    </div>
                    <div className="user-name__aside">
                        <Icon16Chevron fill="aaaeb3" />
                    </div>
                </div>
                <div className="type-category">IT</div>
                <div className="register-time">В экспертах с 22 мая 2019</div>
            </div>
            </Div>
                <Separator />
                <Header className="title-block">Достижения</Header>
                </Group>
                </body>
                   <iframe src="https://timofei1.github.io/Google1/" width="100%" height="400"/>
                   
           

            
        </Panel>
    );

export default Persik7;