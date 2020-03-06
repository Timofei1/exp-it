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
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';

const osname = platform();

const Persik5 = ({go, id}) => (


<Panel id={id}>
		<PanelHeader
        left={<HeaderButton onClick={go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>Достижения</PanelHeader>
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
         <b> — Фрешмен/Профи/Олдфаг:</b> вы нашли 10/100/1000 интересных записей.<br/><br/>
         <img src="https://sun9-24.userapi.com/c858328/v858328522/119d63/kbl3IvOg-Uo.png" width="20%"/>
         &nbsp; &nbsp;<img src="https://sun9-5.userapi.com/c857620/v857620522/123e58/4f4QGB8v-pc.png" width="20%"/>
         &nbsp; &nbsp;<img src="https://sun9-55.userapi.com/c857020/v857020522/875ef/BlH_4Q42njo.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Киборг (уровень 1, уровень 2):</b> вы голосовали за записи каждый день в течение недели (для уровня 1) или месяца (для уровня 2).<br/><br/>
         <img src="https://sun9-5.userapi.com/c857124/v857124522/70544/_7urMEl8BAw.png" width="20%"/>
         &nbsp; &nbsp;<img src="https://sun9-34.userapi.com/c858020/v858020522/126f44/E9yOXBu6kMo.png" width="20%"/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Ты пытался (уровень 1, уровень 2):</b> вы голосовали за записи 6 дней подряд, но на 7-й день решили отдохнуть (29 дней подряд, но на 30-й день перестали).<br/><br/>
         <img src="https://sun9-63.userapi.com/c856128/v856128522/1a1099/eRJSBYLqwg4.png" width="20%"/>
         &nbsp; &nbsp;<img src="https://sun9-63.userapi.com/c856128/v856128522/1a1099/eRJSBYLqwg4.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Продюсер:</b> вы помогли авторам собрать миллион охвата.<br/><br/>
         <img src="https://sun9-44.userapi.com/c855228/v855228522/1a2c27/Jc8iDb_FnN4.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Казанова:</b> вы помогли авторам собрать 100 000 отметок «Нравится».<br/><br/>
         <img src="https://sun9-5.userapi.com/c206620/v206620522/1166a/_QFqvdbO5LI.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Вокруг шум:</b> вы помогли авторам собрать 10 000 комментариев.<br/><br/>
         <img src="https://psv4.userapi.com/c856436/u19494137/docs/d17/5e8227b5b564/unknown_achievement.png?extra=tSP9W4aTIdhc-MGFxVJTAK-nJbhZeN4_kM6kyl0BmNUSGU1jOd1chfXFm-H_JC1iRNkDFlb3pwvHhLyEqdjtzqjHkog7TqTUng2LnY7gUbkni-Irk8YbOXMk0jFQbAz4jgE5bR1ZeIhlYJo_QzPCitc" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Двойное попадание:</b> вы получили две ачивки за один день.<br/><br/>
         <img src="https://sun9-70.userapi.com/c853516/v853516522/1a8cf7/vKB6uIvRtvE.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— 10 из 10:</b> вы получили десять ачивок.<br/><br/>
         <img src="https://sun9-30.userapi.com/c204520/v204520522/11976/XDjEEwDI-VE.png" width="20%" /><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Царь во дворца:</b> вы — самый активный эксперт! Ачивка выдаётся раз в месяц, держится месяц.<br/><br/>
         <img src="https://psv4.userapi.com/c856436/u19494137/docs/d17/5e8227b5b564/unknown_achievement.png?extra=tSP9W4aTIdhc-MGFxVJTAK-nJbhZeN4_kM6kyl0BmNUSGU1jOd1chfXFm-H_JC1iRNkDFlb3pwvHhLyEqdjtzqjHkog7TqTUng2LnY7gUbkni-Irk8YbOXMk0jFQbAz4jgE5bR1ZeIhlYJo_QzPCitc" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Сжечь их всех:</b> записи, за которые вы проголосовали, получили огонь Прометея (уровень 1 — 10 записей, уровень 2 — 50 записей, уровень 3 — 100 записей).<br/><br/>
         <img src="https://sun9-43.userapi.com/c857424/v857424522/12630c/GueVqgeyjMc.png" width="20%"/>
         &nbsp; &nbsp;<img src="https://sun9-35.userapi.com/c855220/v855220522/1a5472/rjFTSL6ZRIA.png" width="20%"/>
         &nbsp; &nbsp;<img src="https://psv4.userapi.com/c856436/u19494137/docs/d17/5e8227b5b564/unknown_achievement.png?extra=tSP9W4aTIdhc-MGFxVJTAK-nJbhZeN4_kM6kyl0BmNUSGU1jOd1chfXFm-H_JC1iRNkDFlb3pwvHhLyEqdjtzqjHkog7TqTUng2LnY7gUbkni-Irk8YbOXMk0jFQbAz4jgE5bR1ZeIhlYJo_QzPCitc" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Терминатор:</b> с возвращением в ряды экспертов!<br/><br/>
         <img src="https://psv4.userapi.com/c856436/u19494137/docs/d17/5e8227b5b564/unknown_achievement.png?extra=tSP9W4aTIdhc-MGFxVJTAK-nJbhZeN4_kM6kyl0BmNUSGU1jOd1chfXFm-H_JC1iRNkDFlb3pwvHhLyEqdjtzqjHkog7TqTUng2LnY7gUbkni-Irk8YbOXMk0jFQbAz4jgE5bR1ZeIhlYJo_QzPCitc" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Критик:</b> из 100 записей лишь одну вы посчитали интересной.<br/><br/>
         <img src="https://sun9-35.userapi.com/c200828/v200828522/11d0f/mN53S7VCcvo.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Гений:</b> ваш голос за запись совпал с голосом звезды!<br/><br/>
         <img src="https://sun9-34.userapi.com/c858124/v858124522/127895/kb2mQpkK6GE.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— В тренде:</b> в вашей тематике больше всего огненных записей! Ачивка временная, выдаётся раз в месяц.<br/><br/>
         <img src="https://sun9-63.userapi.com/c205516/v205516522/117a3/1R-c96__Xkg.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Водитель маршрутки:</b> ваша тематика — самая многочисленная, в ней больше всего экспертов. Ачивка временная, выдаётся раз в месяц.<br/><br/>
         <img src="https://sun9-69.userapi.com/c854324/v854324522/1a1ffe/njOeQLCdWCY.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Последний из могикан:</b> ваша тематика — самая малочисленная. Ачивка временная, выдаётся раз в месяц.<br/><br/>
         <img src="https://lh3.googleusercontent.com/MqYxSwGZdK5PqFNm6VFAqy6eaHHi3iq75BeEQbqpwYdAdCu-TyBT0SGs7_Y3wElKPRpeF7wqobH5r2ThhvsZKzG0HzTXL2x3KDi9G8hS4k-FDyHMq9pMMspy4HI_dKxU-E3DKx-aZS-MunGTwO0pKzmdpi_9FE-g1dgn1gJjSH6J52ZvuG74x4LVh7ksrMkD157Vsm-p2tfk27JHi8mdNGmg5Zk2BknTTJZ_lpYQNjZjb3wsVZUXoLsxLjQHsT4at1nmT0-c1TWX7cYv2b_kiibjFUmNRUPkKGljYeRHKImZsxir_34kRpwfjPx7M_njLVpwyYLCNV9VCp9E6A6jxJM4Ngx3P692AJGZIgQhrnpnM7QE-Uw8z-Dv5qwUUZJYqmSDykmH9i8Czy9h4Tb8AXj1rSua7jDW_m-wN5zMPqBmH-HSzzdL9rAd5aDTLox9ZWfd0hXBgsJe28J99plNnM-C62x5IDmcN7HyiJ8uV8-yTuDkOCsnBOI3dS1iEhmx1I5MwLfTDZWMgzExJENjqhW8pTJQk46svLbfAexH3UEhF9EkBpxtRUfDbl2G1LhvTRKnXrR8Q2Fa8i_AemZanUqiRHY6lyHvK5-mEJYc50O2w1Bft59ac5JiMVlHW45ZJNgi3dQmqOtDeguNvSJX7kiFoRq2AFUVETLVI0GIJpbHzGUTbqFScQ=s382-no" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Почёт и уважение:</b> вашу запись отметили другие эксперты.<br/><br/>
         <img src="https://sun9-36.userapi.com/c204524/v204524522/12ee2/W5bX5B-25q4.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Один в поле воин:</b> вы проголосовали против записи, которую одобрило большинство экспертов.<br/><br/>
         <img src="https://sun9-11.userapi.com/c858036/v858036522/11c899/2klWNjrFEho.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Копирайтер/Журналист/Главный редактор</b> — месяц/полгода/год в команде экспертов.<br/><br/>
         <img src="https://sun9-3.userapi.com/c857420/v857420442/11fe0c/i-EJpkG0XOw.png" width="20%"/>
         &nbsp; &nbsp;<img src="https://psv4.userapi.com/c856436/u19494137/docs/d17/5e8227b5b564/unknown_achievement.png?extra=tSP9W4aTIdhc-MGFxVJTAK-nJbhZeN4_kM6kyl0BmNUSGU1jOd1chfXFm-H_JC1iRNkDFlb3pwvHhLyEqdjtzqjHkog7TqTUng2LnY7gUbkni-Irk8YbOXMk0jFQbAz4jgE5bR1ZeIhlYJo_QzPCitc" width="20%"/>
         &nbsp; &nbsp;<img src="https://psv4.userapi.com/c856436/u19494137/docs/d17/5e8227b5b564/unknown_achievement.png?extra=tSP9W4aTIdhc-MGFxVJTAK-nJbhZeN4_kM6kyl0BmNUSGU1jOd1chfXFm-H_JC1iRNkDFlb3pwvHhLyEqdjtzqjHkog7TqTUng2LnY7gUbkni-Irk8YbOXMk0jFQbAz4jgE5bR1ZeIhlYJo_QzPCitc" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
         <b>— Эксперт:</b> добро пожаловать в команду экспертов!<br/><br/>
         <img src="https://sun9-14.userapi.com/c857436/v857436522/1295ec/2o5XWPGEKPY.png" width="20%"/><br/>
         <Separator style={{ margin: '12px 0' }} />
          <Button size="xl" onClick={go} data-to="home">Выйти</Button><br/><br/>
          </Div>
        </Group>
        
	</Panel>
);



Persik5.propTypes = {
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

export default Persik5;