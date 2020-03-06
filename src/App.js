import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Game from '@vkontakte/icons/dist/28/game';
import Modal from './panels/Modal';
import Home from './panels/Home';
import Persik from './panels/Persik';
import Persik1 from './panels/Persik1';
import Persik2 from './panels/Persik2';
import Persik3 from './panels/Persik3';
import Persik5 from './panels/Persik5';
import Persik7 from './panels/Persik7';
import Persik6 from './panels/Persik6';
import Persik8 from './panels/Persik8';
import {ConfigProvider} from '@vkontakte/vkui';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);

	useEffect(() => {
		connect.send('VKWebAppSetViewSettings', { status_bar_style: 'dark', action_bar_color: '#FFFFFF' });
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};


	return (
		<ConfigProvider scheme='bright_light'>
		<View activePanel={activePanel} popout={popout} modal={<Modal/>}>
			<Home id='home' go={go} />
			<Persik id='persik' go={go} />
			<Persik1 id='persik1' go={go} />
			<Persik2 id='persik2' fetchedUser={fetchedUser} go={go} />
			<Persik3 id='persik3' go={go} />
			<Persik5 id='persik5' go={go} />
			<Persik6 id='persik6' go={go} />
			<Persik7 id='persik7' go={go} scheme='bright_light'/>
			<Persik8 id='persik8' go={go} />	
		</View>
		</ConfigProvider>
		
	);
	
	}

export default App;
