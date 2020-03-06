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
import {platform, IOS, HeaderButton, Separator} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import persik from '../img/persik.png';
import persik1 from '../img/persik1.png';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import { Link } from '@vkontakte/vkui';


const osname = platform();

const Persik1 = ({go, id}) => (


<Panel id={id}>
		<PanelHeader
        left={<HeaderButton onClick={go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
         
           Правила беседы</PanelHeader>
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
          <center><img src={persik1} alt="Persik The Cat" width="100%"/></center>
          <h3>📔 У каждой официальной беседы есть свои правила, они нужны для поддержания порядка, с них и начнем:</h3>

1.Мы не оскорбляем друг друга<br/>
2.Мы не используем нецензурную лексику<br/>
3.Мы не флудим<br/>
4.Мы не используем голосовые сообщения<br/>
5.Запрещен оверпостинг<br/>
6.Мы не используем нечитабельные символы<br/>
7.Мы не используем хештеги не по назначению<br/>
8.Мы не ставим фото группы эксперта на аватарку<br/>
9.Мы не просим ставить стрелочки на посты<br/>
10.Неадекватное, агрессивное поведение<br/>
11.Запрещены провокации на споры, а так же активное участие в них<br/>
12.Запрещено размещение любых ссылок на сторонние ресурсы, которые не имеют прямого отношения к системе «Эксперты»<br/>
13.Выдача себя за Администрацию в любой форме<br/>
14.Нарушение правил, будучи экспертом другой тематики<br/>
15.Мы не нарушаем правил сайта<br/><br/>
<center><img src={persik} alt="Persik The Cat" width="100%"/></center>
<Separator style={{ margin: '12px 0' }} />
<h3>🔍 Определения:</h3>
<Div style={{ background: '#edeef0' }}>
<font color="#008000">• Пред / Кик / Бан — предупреждение / исключение из беседы / исключение из экспертов.<br/><br/>
• Апвоут — Ваша положительная оценка — стрелка вверх.<br/><br/>
• Даунвоут — Ваша отрицательная оценка — стрелка вниз.<br/><br/>
• Ачивка — достижение, которое дают эксперту в его карточку.<br/><br/>
• Буст, бустить — накрутка апвоутов в корыстных целях или по чьей-то просьбе.<br/><br/>
• Оверпостинг — несколько коротких сообщений подряд от одного пользователя за короткий промежуток времени. Во избежание этого рекомендуется редактировать первоначальное сообщение.<br/><br/>
• Флуд — размещение однотипной информации, одной повторяющейся фразы, одинаковых графических файлов.<br/><br/>
• Спам — сообщения с оттенком нежелательного для беседы, зачастую, рекламного характера.</font><br/>
</Div>
<Separator style={{ margin: '12px 0' }} />
<h3>🔔 Дополнительно:</h3>
<b>⚠</b> <i>После получения <b>преда</b> следует <b>кик</b> из беседы;</i><br/>
<b>⚠</b> <i>За исключительный флуд, за флуд с провокацией и оскорблениями — <b>бан.</b></i><br/>
<Separator style={{ margin: '12px 0' }} />
<Button size="xl" onClick={go} data-to="persik2">Далее</Button>
<br/>
<br/>
          </Div>
        </Group>

	</Panel>
);



Persik1.propTypes = {
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

export default Persik1;