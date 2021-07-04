import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Wrapper from '../../pages/Wrapper';
import HomePage from '../../pages/HomePage';
import NewsPage from '../../pages/NewsPage';
import Header from '../header/Header';
import StudyPage from '../../pages/StudyPage';
import HeaderAction from '../header/HeaderAction';
import WatchPage from '../../pages/WatchPage';

const HomeRoute = (props) => {
    return (
        <Wrapper>
            <Header>WELCOME GENIOUS</Header>
            <HomePage></HomePage>
        </Wrapper>
    );
};

const NewsRoute = (props) => {
    return (
        <Wrapper>
            <HeaderAction title='NEWS' />
            <Header></Header>
            <NewsPage></NewsPage>
        </Wrapper>
    );
};

const StudyRoute = (props) => {
    return (
        <Wrapper>
            <HeaderAction title='STUDYING' />
            <Header></Header>
            <StudyPage route={props}></StudyPage>
            {/* <NewsPage></NewsPage> */}
        </Wrapper>
    );
};

const WatchingRoute = (props) => {
    return (
        <Wrapper>
            <HeaderAction title='WATCHING' />
            <Header></Header>
            <WatchPage route={props}/>
            {/* <NewsPage></NewsPage> */}
        </Wrapper>
    );
};

const Navigation = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'news', title: 'News', icon: 'album' },
        { key: 'study', title: 'Studying', icon: 'book' },
        { key: 'watch', title: 'Watch', icon: 'book' },
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
            barStyle={{ backgroundColor: '#FAFAFA' }}
            activeColor='#2F80ED'
            inactiveColor='#E8E8E8'
            style={{ width: '100%' }}
        />
    );
};

export default Navigation;
