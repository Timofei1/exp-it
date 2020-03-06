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
import persik3 from '../img/persik3.png';
import persik4 from '../img/persik4.png';
import persik5 from '../img/persik5.png';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';

const osname = platform();

const Persik3 = ({go, id}) => (


<Panel id={id}>
		<PanelHeader
    left={<HeaderButton onClick={go} data-to="home">
    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
  </HeaderButton>}
>
    Частые вопросы</PanelHeader>
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
          <center><img src={persik3} alt="Persik The Cat" width="100%"/></center>
          Многие задают вопросы про рейтинг, достижения и в целом о системе экспертов. Если у Вас остались вопросы на счет этого, то советуем перечитать <a href="https://vk.com/@vkexperts-kto-takie-eksperty-vkontakte" target="_blank">Базовый F.A.Q.</a>, в нем уже имеются ответы на эти вопросы.

<h3>— Как мне найти свою карточку эксперта?</h3>
Перейдите <a href="https://vk.com/id0" target="_blank">на свою страницу</a> и нажмите на три точки в правом верхнем углу экрана.<br/>
Обратите внимание! Если вы только что вступили в эксперты, то Вам необходимо подождать несколько минут для отображения данного раздела. Если «карточка эксперта» не отображается в меню:<br/>
1) убедитесь, что у Вас последняя версия приложения;<br/>
2) попробуйте перезапустить приложение.<br/><br/>
<center><img src={persik4} alt="Persik The Cat" width="100%"/></center>
<center><img src={persik5} alt="Persik The Cat" width="100%"/></center>

<h3>— Хочу стать Модератором беседы / группы / сообщества. Кому писать?</h3>
В настоящее время набор в Модераторы не ведется.<br/><br/>

<h3>— Я не могу оценивать посты через компьютер. Как быть?</h3>
Кнопки голосования доступны пока что только в мобильных приложениях. Зайдите в рекомендации, выберите Вашу тематику и Вы увидите под постами стрелочки.<br/>
Если у Вас старый дизайн, то это иконка «лупы» в нижнем баре.<br/>
Если у Вас новый дизайн, то это иконка «компаса».<br/><br/>

<h3>— Почему под моим постом нет стрелочек?</h3>
Под Вашими постами ВК не показывает стрелочки. Пожалуйста, не спрашивайте в чате других людей «есть ли там стрелки?». Это легко проверить другим способом: посмотрите с мобильного приложения, указана ли тематика у поста. Если тематика присутствует, то стрелки есть.<br/><br/>

<h3>— Вижу в ленте рекомендаций лишнее. Что делать?</h3>
У Вас есть возможность менять тематику неверно выбранным нейросетью постам. Нажмите «Выбрать тематику» или «Неверная тематика».

<h3>— У меня не загружается карточка эксперта, что делать?</h3>
Пожалуйста, перезагрузите Ваше приложение. Если это не помогло, то подождите некоторое время, функционал восстановится автоматически.<br/>
Также Вы можете перейти по ссылке: <a href="https://vk.com/experts" target="_blank">https://vk.com/experts</a>.<br/><br/>

<h3>— Я вынужден отсутствовать в течении 2-3 недель. Повлияет ли это на мое место среди экспертов?</h3>
Вы не должны потерять права эксперта за отсутствие активности.<br/>
<Separator style={{ margin: '12px 0' }} />

<h3>Дополнительная информация:</h3>

<i>— Раздел «Правила чата» может быть дополнен новыми правилами, в любое время, без предупреждения. Будьте внимательны.<br/>
— Если Вы ошибочно вступили в тематику Игр, пока что её сменить нельзя. Выбор за Вами — курировать её или нет.</i><br/>
<Separator style={{ margin: '12px 0' }} />
<Button size="xl" onClick={go} data-to="persik5">Далее</Button><br/><br/>
          </Div>
        </Group>
        
	</Panel>
);



Persik3.propTypes = {
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

export default Persik3;