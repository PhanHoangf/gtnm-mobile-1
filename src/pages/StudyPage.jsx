import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

// const LeftContent = (props) => <Avatar.Icon {...props} icon='folder' />;
const courseVideo = [
    {
        thumbNail: 'http://trisectinstitute.com/images/courses/best-react-js-training-institute.png',
        title: 'ReactJs',
        subTitle: 'Subtitle course 1',
    },
    {
        thumbNail: 'https://i.ytimg.com/vi/Txx2cv_fo9s/maxresdefault.jpg',
        title: 'NestJs',
        subTitle: 'Subtitle course 2',
    },
    {
        thumbNail: 'https://i.morioh.com/2019/12/10/a00a4a91dc58.jpg',
        title: 'Angular',
        subTitle: 'Subtitle course 3',
    },
    {
        thumbNail: 'https://ultimatecourses.com/assets/share/share-rxjs-a8a6c5d3801226cc7c5bae6c125e852e15782da311418e6b475db44a13eebcd0.jpg',
        title: 'RxJs',
        subTitle: 'Subtitle course 4',
    },
    {
        thumbNail: 'https://ga-shop-production-herokuapp-com.global.ssl.fastly.net/assets/images/logo_1200_by_627_1QIVL.jpg',
        title: 'Assembly',
        subTitle: 'Subtitle course 5',
    },
];

const StudyPage = (props) => {
    const onPress = () => {
        props.route.jumpTo('watch')
    }
    const viewCourses = courseVideo.map((c, index) => {
        return (
            <TouchableOpacity onPress={onPress} key={index}>
                <Card mode='outlined' style={styles.cardContainer}>
                    <Card.Cover source={{ uri: c.thumbNail }} />
                    <Card.Content>
                        <Title>{c.title}</Title>
                        <Paragraph>{c.subTitle}</Paragraph>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    });
    return <ScrollView>{viewCourses}</ScrollView>;
};

const styles = StyleSheet.create({
    studyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        alignSelf: 'stretch',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // width: '100%',
    },
    mainContent: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 20,
        width: '100%',
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5
    },
});

export default StudyPage;
