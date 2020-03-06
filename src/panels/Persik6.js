import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import {Separator} from '@vkontakte/vkui';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';

const Persik6 = ({go, id}) => (


<Panel id={id}>
		<PanelHeader>Новости</PanelHeader>
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
          ><Icon28FireOutline width={30} height={30} fill="#4682B4"/></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik7"
          ><Icon28Profile width={30} height={30}/></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon28HelpOutline width={30} height={30}/></TabbarItem>
        </Tabbar>
        
        <Group title="О разделе">
          <Div>
          <i>В этот раздел будут выкладываться все посты из группы "Эксперты: IT".</i>
          </Div>
        </Group>
         <iframe src="https://timofei1.github.io/news-it" height="450" width="100%" />
        
        
	</Panel>
);



Persik6.propTypes = {
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

export default Persik6;