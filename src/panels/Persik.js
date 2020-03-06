import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import { Group, Avatar, Cell, Separator } from '@vkontakte/vkui';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';

const Persik = ({go, id}) => (


<Panel id={id}>
		<PanelHeader>Информация</PanelHeader>
		 <Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28ArticleOutline  /></TabbarItem>
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
          ><Icon28HelpOutline fill="#4682B4" width={30} height={30} /></TabbarItem>
        </Tabbar>
        
    <Group title="ВАжно">
      <Div>
        <i>Привет, эксперт! Данный сервис разработан для помощи участникам программы "Эксперты ВКонтакте" в тематике "IT". Не стоит делиться им с посторонними людьми.</i>
	     </Div>
    </Group>
	 <Group>
		 <Div>
			 <b>Если вы нашли ошибку, баг, хотите дать правки, или сделать предложение по поводу этого приложения.<br/>Так же стоит отметить, что приложение сделано по заказу эксперта IT и сделано на основе приложения Эксперты Игры.</b>
			 <Separator style={{ margin: '12px 0' }} />
			 <Cell
                  before={<Avatar size={72}
                  src="https://sun9-35.userapi.com/c200828/v200828522/11d0f/mN53S7VCcvo.png" />}
                  size="l"
                  description="Разработчик"
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m" component="a" href="https://vk.me/id288498260" target="_blank">Написать</Button>
                      <Button size="m" level="secondary" style={{ marginLeft: 8 }} component="a" href="https://vk.com/id288498260" target="_blank">Перейти</Button>
                    </div>
                  }
                >
                  Тимофей Рылов</Cell>
                 
		 </Div>
	 </Group>
	 <Group title="Актуальные версии">
         <Div>
         <Separator style={{ margin: '12px 0' }} />
		 <div style={{ display: 'flex' }}>
        <b>Версия 1.0</b><h> </h><div className="Cell__description">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 07.03.2020</div>
        
        </div>
        </Div>
        <Div>
        <i>Релиз приложения.</i>
        </Div>
		 <br/>
		 <br/>
	
	 </Group>
        
	</Panel>
);



Persik.propTypes = {
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

export default Persik;