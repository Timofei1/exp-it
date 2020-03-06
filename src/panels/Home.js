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
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24VideoFillNone from '@vkontakte/icons/dist/24/video_fill_none';
import Icon24RecentOutline from '@vkontakte/icons/dist/24/recent_outline';
import Icon24LinkCircle from '@vkontakte/icons/dist/24/link_circle';
import Icon24Pin from '@vkontakte/icons/dist/24/pin';
import Icon24Discussions from '@vkontakte/icons/dist/24/discussions';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon24Palette from '@vkontakte/icons/dist/24/palette';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';

const Home = ({go, id}) => (


<Panel id={id}>
		<PanelHeader>Эксперты IT</PanelHeader>
		 <Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28ArticleOutline fill="#4682B4" /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik8"
          ><Icon28PictureOutline/></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik6"
          ><Icon28FireOutline width={30} height={30} /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik7"
          ><Icon28Profile width={30} height={30}/></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon28HelpOutline width={30} height={30}/></TabbarItem>
        </Tabbar>
        <Group>
          <Div>
       <i>Приложение создано на основе приложения "Эксперты Игры". Сделано по просьбе экспертов IT тематики.</i>
       </Div>
       </Group>
        <Group title="Эксперты Игры FAQ">
            <Div>
                <Button size="xl" level="2" onClick={go} data-to="persik1" before={
                
                <Icon24Privacy width={30} height={30} /> }>
                    Правила беседы
                
                </Button>
                <br/>
                <Button size="xl" level="2" onClick={go} data-to="persik2" before={
                 <Icon24Newsfeed width={30} height={30}/>}>
                    Правила оценки постов
                
                </Button>
                <br/>
                <Button size="xl" level="2" onClick={go} data-to="persik3" before={
                  <Icon24CommentOutline width={30} height={30}/>}>
                    Частые вопросы
                </Button>
                <br/>
                <Button size="xl" level="2" onClick={go} data-to="persik5" before={
                  <Icon24RecentOutline width={30} height={30}/>}>
                    Достижения
                </Button>
                
              </Div>
              </Group>
                
                <Group title="Полезные ссылки">
                  <Div>
                <Button size="xl" level="secondary" component="a" href="https://vk.com/@vkexpertsit-instruction" target="_blank" before={
                  <Icon24Pin width={30} height={30}/>}>
                   FAQ IT 1
                </Button>
                <br/>
                <Button size="xl" level="secondary" component="a" href="https://vk.com/@it_experts_off-faq" target="_blank" before={
                  <Icon24Pin width={30} height={30}/>}>
                   FAQ IT 2
                </Button>
                <br/>
                <Button size="xl" level="secondary" component="a" href="https://vk.com/@vkexperts-kto-takie-eksperty-vkontakte" target="_blank" before={
                  <Icon24Flash width={30} height={30}/>}>
                  Общее FAQ
                </Button>
                <br/>
                <Button size="xl" level="secondary" component="a" href="https://vk.com/it_experts_off" target="_blank" before={
                  <Icon24Game width={30} height={30}/>}>
                    Группа "Эксперты IT"
                </Button>
                <br/>
                <Button size="xl" level="secondary" component="a" href="https://vk.com/vkexperts" target="_blank" before={
                  <Icon24Users width={30} height={30}/>}>
                    Группа "Эксперты ВКонтакте"
                </Button>
                <br/>
                <Button size="xl" level="secondary" component="a" href="https://vk.com/app7171491" target="_blank" before={
                  <Icon24Services width={30} height={30}/>}>
                    Карточка эксперта(mob)
                </Button>
                <br/>
                <Button size="xl" level="secondary" component="a" href="https://vk.com/experts" target="_blank" before={
                  <Icon24VideoFillNone width={30} height={30}/>}>
                    Карточка эксперта(desk)
                </Button>
            </Div>
            <br/>
            <br/>
          </Group>
	</Panel>
);



Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),

};

export default Home;