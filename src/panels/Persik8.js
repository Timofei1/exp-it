import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon24Game from '@vkontakte/icons/dist/24/game';
import Icon24Privacy from '@vkontakte/icons/dist/24/privacy';
import Icon24Send from '@vkontakte/icons/dist/24/send';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon24MusicMic from '@vkontakte/icons/dist/24/music_mic';
import Icon24Headphones from '@vkontakte/icons/dist/24/headphones';
import Icon24Followers from '@vkontakte/icons/dist/24/followers';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24VideoFillNone from '@vkontakte/icons/dist/24/video_fill_none';
import Icon24Chats from '@vkontakte/icons/dist/24/chats';
import Icon24LinkCircle from '@vkontakte/icons/dist/24/link_circle';
import Icon24Advertising from '@vkontakte/icons/dist/24/advertising';
import Icon24Discussions from '@vkontakte/icons/dist/24/discussions';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon24Palette from '@vkontakte/icons/dist/24/palette';
import Icon24PlaySpeed from '@vkontakte/icons/dist/24/play_speed';

const Persik8 = ({go, id}) => (

    <Panel id={id} bgcolor="#FFFFFF">
		<PanelHeader>Ресурсы</PanelHeader>
		 <Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28ArticleOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik8"
          ><Icon28PictureOutline width={30} height={30} fill="#4682B4"/></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik6"
          ><Icon28FireOutline width={30} height={30}/></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik7"
          ><Icon28Profile width={30} height={30}/></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon28HelpOutline width={30} height={30}/></TabbarItem>
        </Tabbar>
      
        <Group title="Посты и группы"> 
            <Div>
            <Button size="xl" level="2" component="a" href="https://vk.com/vkexperts?w=wall-182611749_2153" target="_blank" before={
                  <Icon24Followers width={30} height={30}/>}>
                   Частые вопросы
                </Button>
                <br/>
                
                <Button size="xl" level="2" component="a" href="https://vk.com/memes.experts" target="_blank" before={
                  <Icon24Palette width={30} height={30}/>}>
                    Expert Memes
                </Button>
                <br/>
                <Button size="xl" level="2" component="a" href="https://vk.com/vkexperts?w=wall-182611749_2" target="_blank" before={
                  <Icon24MusicMic width={30} height={30}/>}>
                    Кратко об экспертах
                </Button>
              </Div>
            </Group>
            <Group title="Обсуждения">
              <Div>
                <br/>
                <Button size="xl" level="2" component="a" href="https://vk.com/topic-182611749_40299333" target="_blank" before={
                  <Icon24Headphones width={30} height={30}/>}>
                    Идеи ачивок
                </Button>
                <br/>
                <Button size="xl" level="2" component="a" href="https://vk.com/topic-182611749_40299290" target="_blank" before={
                  <Icon24Send width={30} height={30}/>}>
                    Предложить тематику
                </Button>
                <br/>
                <Button size="xl" level="2" component="a" href="https://vk.com/topic-182611749_40299394" target="_blank" before={
                  <Icon24Advertising width={30} height={30}/>}>
                    Вопрос для VkTeam
                </Button>
                
                <br/>
                <Button size="xl" level="2" component="a" href="https://vk.com/topic-182611749_40470402" target="_blank" before={
                  <Icon24Chats width={30} height={30}/>}>
                  Вопрос-ответ
                </Button>
            </Div>
            <br/>
<br/>
        </Group>
            
        </Panel>
    );

export default Persik8;