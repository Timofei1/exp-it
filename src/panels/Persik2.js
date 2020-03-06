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
import persik2 from '../img/persik2.png';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';

const osname = platform();

const Persik2 = ({go, id}) => (


<Panel id={id}>
		<PanelHeader
    left={<HeaderButton onClick={go} data-to="home">
    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
  </HeaderButton>}
>
    Оценка постов</PanelHeader>
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
          <center><img src="https://sun9-23.userapi.com/c206520/v206520175/98474/UL-eiIm0rN8.jpg" alt="Persik The Cat" width="100%"/></center>
          
<Separator style={{ margin: '12px 0' }} />
<h2>Плохой пост</h2><br/>
С определением хорошего поста вы уже ознакомились в официальной статье, здесь же опишем то, что заслуживает стрелочки вниз.<br/>
<center><img src="https://sun9-42.userapi.com/c856120/v856120160/1b3d73/q_RqwbbeU28.jpg" alt="Persik The Cat" width="100%"/></center><br/>
Картинка является иллюстрацией текста, однако некоторые сообщества умещают в картинку весь текст. Это плохо, поэтому ставим стрелку «вниз».<br/>
<center><img src="https://sun9-71.userapi.com/c856136/v856136368/1af74e/TDz7FhFAhQ8.jpg" alt="Persik The Cat" width="100%"/></center><br/>
<b>Эксперт, не путай!</b><br/>
<center><img src="https://sun9-23.userapi.com/c856136/v856136368/1af6d6/sFsqK5i2l2Y.jpg" alt="Persik The Cat" width="100%"/></center><br/>
Если кроме самой картинки с текстом есть и нормальный текст, то это не всегда подлежит даунвоуту. Здесь необходимо смотреть, не является ли картинка скриншотом со сторонних ресурсов или плагиатом. Также не нужно даунвоутить инфографику.<br/>
<center><img src="https://sun9-21.userapi.com/c858416/v858416368/1414d6/Q2tDpd_Bteo.jpg" alt="Persik The Cat" width="100%"/></center><br/>
<i>(На картинке выше видно, что люди старались над оформлением, присутствуют водяные знаки самого сообщества. Апвоут однозначно! :) )</i>
<br/><h4>Посты с байтом в ссылке</h4><br/>
Такие посты выводят вас из приложения ВКонтакте на другой сайт, а хорошая запись тематической ленты этого не делает.<br/>
<center><img src="https://sun9-43.userapi.com/c856120/v856120160/1b3dbc/R0mrl1sjFuM.jpg" alt="Persik The Cat" width="100%"/></center><br/>
Такие посты встречаются в порталах, имеющих свои филиалы в ВК.<br/>
<center><img src="https://sun9-57.userapi.com/c858324/v858324336/1431d5/JWwJ-tzPqPU.jpg" alt="Persik The Cat" width="100%"/></center><br/>
В ВК мы можем прочитать лишь небольшой кусочек информации, которого недостаточно для полного понимания, поэтому пользователь вынужден кликать по ссылке. Это и есть байт, таким постам не место в тематической ленте.<br/><br/>
Есть и явные кликбейты, где в посте не указана информация от слова совсем. Тут уже явное принуждение к переходу на сайт.
<center><img src="https://sun9-70.userapi.com/c858324/v858324336/14320d/raGB-hWWNZU.jpg" alt="Persik The Cat" width="100%"/></center><br/>
Однако существуют и хорошие посты со ссылками.
<center><img src="https://sun9-42.userapi.com/c856120/v856120160/1b3dda/CDLDAxmvf9I.jpg" alt="Persik The Cat" width="100%"/></center><br/>
<center><img src="https://sun9-46.userapi.com/c858324/v858324336/143214/T-iDx-c9wIY.jpg" alt="Persik The Cat" width="100%"/></center><br/>
<i>(На картинке выше изобращен пример хорошего поста)</i><br/><br/>
<h4>Слухи</h4><br/>
<center><img src="https://sun9-14.userapi.com/c858224/v858224704/14825f/kaZCjP-2Kd0.jpg" alt="Persik The Cat" width="100%"/></center><br/>
Рендеры, слухи, неподтверждённые инсайды — всё это не должно быть в тематической ленте.<br/>
<center><img src="https://sun9-9.userapi.com/c858224/v858224704/148278/4OAYUUuvi74.jpg" alt="Persik The Cat" width="100%"/></center><br/>
<i>(На картинке выше пример слухов. В тематической ленте им не мосто.)</i><br/><br/>
<h4>SMM</h4><br/>
<center><img src="https://sun9-36.userapi.com/c858224/v858224704/1482a9/eG_UvcPikJ0.jpg" alt="Persik The Cat" width="100%"/></center><br/>
SMM не относится к IT, все такие посты помечаются кнопкой «Неверная тематика» (но не минусуются и не плюсуются).<br/>
<center><img src="https://sun9-67.userapi.com/c858224/v858224704/1482bc/GbUCdc0v0eQ.jpg" alt="Persik The Cat" width="100%"/></center><br/>
<i>(Такое не будет интересно читателям тематической ленты IT.)</i><br/>
<h3>Простая истина</h3><br/>
<center><img src="https://sun9-43.userapi.com/c856120/v856120160/1b3e07/73zNF2iYIho.jpg" alt="Persik The Cat" width="100%"/></center><br/>
Мы — эксперты. Мы проверяем контент здесь и сейчас, а не рассуждаем из логики «это может отбить желание соответствовать критериям». Если пост не оптимизирован, будь это хоть паблик-миллионник — он не достоин быть в тематической ленте. Это проблема паблика, что его посты не соответствуют критериям.<br/>
Не нужно гнаться за рейтингом, рейтинговая система будет переделана и каждому воздастся по заслугам.<br/><br/>
<Separator style={{ margin: '12px 0' }} />
<h3>Если вы нашли интересные посты по игровой тематике и считаете их достойными для большего охвата — смело нажимайте стрелку вверх ⬆.
Также просим обратить ваше внимание на следующие критерии:</h3><br/><br/>

— оформление и качество работы;<br/>
— наличие внутренних ссылок в посте (если указан первоисточник, то одобряем, если новостной посредник— игнорируем);<br/>
— информативность (следите, чтобы информация была полезной, структурированной и доступной для большинства пользователей);<br/>
— оригинальность (отслеживайте уникальность публикации, приоритет авторским начинаниям, если в подборках много записей-клонов, это значит, что эксперты работают плохо);<br/>
— актуальность (важно, чтобы пост был релевантным, к примеру посты с распродаж, которые завершились днём ранее одобрять не стоит).<br/>
<br/>
Если вы считаете пост недостойным для большего охвата, если он не придерживается и половины критериев выше - стрелка вниз ⬇.<br/>
Если вам пост не интересен - лучше пропустите публикацию!<br/><br/>
<h3>👍 Какие посты можно оценивать «положительно» — ⬆:</h3><br/>
Любой пост, который так или иначе подразумевает в себе тематику IT — это IT-пост. (Будь он даже смежно связан с тематикой Арт, Юмор, Стиль, Игры и т.д.);<br/><br/>

Старайтесь помогать развиваться мелким ресурсам. Для этого придётся вылезти из зоны комфорта (ленты рекомендаций) и отправиться в поиск ВК (или вашу личную ленту при присутствии там таковых). Там находим игровые группы и из них уже пытаемся поднимать посты;<br/>

Статьи, написанные в самом ВК, можно и нужно поднимать. При условиях, что она: выполнена качественно, является оригиналом.<br/><br/>
<center><h2>IT-эксперты — на страже тематической ленты!</h2></center>

<Separator style={{ margin: '12px 0' }} />
<Button size="xl" onClick={go} data-to="persik3">Далее</Button><br/><br/>
          </Div>
        </Group>
        
	</Panel>
);



Persik2.propTypes = {
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

export default Persik2;