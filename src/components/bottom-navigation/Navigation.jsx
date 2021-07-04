import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Wrapper from '../../pages/Wrapper';
import HomePage from '../../pages/HomePage';
import NewsPage from '../../pages/NewsPage';
import Header from '../header/Header';
import StudyPage from '../../pages/StudyPage';
import HeaderAction from '../header/HeaderAction';
import WatchPage from '../../pages/WatchPage';
import SearchHeader from '../header/SearchHeader';
import FavoritePage from '../../pages/FavoritePage';
import HeaderWatch from '../header/HeaderWatch';

const HomeRoute = (props) => {
    return (
        <Wrapper>
            <HeaderAction route={props} title='NEWS' />
            <Header></Header>
            <HomePage route={props}></HomePage>
        </Wrapper>
    );
};

const NewsRoute = (props) => {
    return (
        <Wrapper>
            <HeaderAction route={props} />
            {/* <Header></Header> */}
            <SearchHeader route={props}></SearchHeader>
            <HomePage route={props}></HomePage>
            {/* <NewsPage></NewsPage> */}
        </Wrapper>
    );
};

const StudyRoute = (props) => {
    return (
        <Wrapper>
            <HeaderAction route={props} title='STUDYING' />
            {/* <Header></Header> */}
            <FavoritePage route={props} />
            {/* <StudyPage route={props}></StudyPage> */}
            {/* <NewsPage></NewsPage> */}
        </Wrapper>
    );
};

const WatchingRoute = (props) => {
    return (
        <Wrapper>
            <HeaderAction route={props} title='WATCHING' />
            <HeaderWatch />
            <WatchPage route={props} />
        </Wrapper>
    );
};

const Navigation = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', icon: 'home' },
        { key: 'news', icon: 'magnify' },
        { key: 'study', icon: 'menu' },
        { key: 'watch', icon: 'video' },
    ]);

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case 'home':
                return <HomeRoute jumpTo={jumpTo} />;
            case 'news':
                return <NewsRoute jumpTo={jumpTo} />;
            case 'study':
                return <StudyRoute jumpTo={jumpTo} />;
            case 'watch':
                return <WatchingRoute jumpTo={jumpTo} />;
        }
    };

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{ backgroundColor: '#000000' }}
            activeColor='#FFF'
            inactiveColor='#868686'
            style={{ width: '100%' }}
        />
    );
};

export default Navigation;
