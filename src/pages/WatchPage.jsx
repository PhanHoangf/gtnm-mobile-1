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
import { TextInput } from 'react-native-paper';
// const LeftContent = (props) => <Avatar.Icon {...props} icon='folder' />;
const courseVideo = [
    {
        thumbNail:
            'http://trisectinstitute.com/images/courses/best-react-js-training-institute.png',
        title: 'ReactJs',
        subTitle: 'Subtitle course 1',
    },
    // {
    //     thumbNail: 'https://i.ytimg.com/vi/Txx2cv_fo9s/maxresdefault.jpg',
    //     title: 'NestJs',
    //     subTitle: 'Subtitle course 2',
    // },
    // {
    //     thumbNail: 'https://i.morioh.com/2019/12/10/a00a4a91dc58.jpg',
    //     title: 'Angular',
    //     subTitle: 'Subtitle course 3',
    // },
    // {
    //     thumbNail:
    //         'https://ultimatecourses.com/assets/share/share-rxjs-a8a6c5d3801226cc7c5bae6c125e852e15782da311418e6b475db44a13eebcd0.jpg',
    //     title: 'RxJs',
    //     subTitle: 'Subtitle course 4',
    // },
    // {
    //     thumbNail:
    //         'https://ga-shop-production-herokuapp-com.global.ssl.fastly.net/assets/images/logo_1200_by_627_1QIVL.jpg',
    //     title: 'Assembly',
    //     subTitle: 'Subtitle course 5',
    // },
];

const Input = () => {
    const [text, setText] = React.useState('');

    return <TextInput style={{ height: 30, width: '100%' }} label='comment' mode='outlined' />;
};

const WatchPage = () => {
    const viewCourses = courseVideo.map((c, index) => {
        return (
            <TouchableOpacity key={index}>
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
    return (
        <ScrollView>
            <View style={styles.watchContainer}>
                <View style={styles.videoInfo}>
                    <Text style={styles.title}>TITLE</Text>
                    <Text style={styles.subTitle}>2.7M views - 5 days ago</Text>
                </View>
            </View>
            {/* <ScrollView>{viewCourses}</ScrollView> */}
            <View style={styles.commentContainer}>
                <View style={styles.commentHeader}>
                    <Text style={styles.title}>Comments</Text>
                    <View style={styles.myComment}>
                        <Avatar.Image
                            size={60}
                            source={{
                                uri: 'https://i.pinimg.com/564x/1d/83/a6/1d83a6d88d8be5b041a9a98fd5048311.jpg',
                            }}
                        />
                        <View style={styles.myInfo}>
                            <Text style={styles.myName}>Pussy Cat</Text>
                            <Input />
                        </View>
                    </View>
                </View>
                <View style={styles.commentBody}>
                    <View style={styles.myComment}>
                        <Avatar.Image
                            size={60}
                            source={{
                                uri: 'https://filmdaily.co/wp-content/uploads/2020/05/coughing-cat-meme-lede.jpg',
                            }}
                        />
                        <View style={styles.myInfo}>
                            <Text style={styles.myName}>Pussy Cat 2</Text>
                            <Text>Niceeee!!!</Text>
                        </View>
                    </View>
                    <View style={styles.myComment}>
                        <Avatar.Image
                            size={60}
                            source={{
                                uri: 'https://i.imgflip.com/502xol.jpg',
                            }}
                        />
                        <View style={styles.myInfo}>
                            <Text style={styles.myName}>Pussy Cat 3</Text>
                            <Text>Bravo Bravo!!!</Text>
                        </View>
                    </View>
                    <View style={styles.myComment}>
                        <Avatar.Image
                            size={60}
                            source={{
                                uri: 'https://pics.me.me/cat-that-is-loading-hd-66624026.png',
                            }}
                        />
                        <View style={styles.myInfo}>
                            <Text style={styles.myName}>Pussy Cat 3</Text>
                            <Text>Nicely done human!!!</Text>
                        </View>
                    </View>
                    <View style={styles.myComment}>
                        <Avatar.Image
                            size={60}
                            source={{
                                uri: 'https://img1.wsimg.com/isteam/ip/3ff8181a-e2eb-424a-bcdb-d9d0a06fc884/My%20cat%20is%20a%20communist%204.jpg',
                            }}
                        />
                        <View style={styles.myInfo}>
                            <Text style={styles.myName}>Pussy Cat 3</Text>
                            <Text>Cat from Viet Nam</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    watchContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    videoInfo: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        paddingLeft: 40,
        paddingBottom: 20,
        paddingTop: 20,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    commentHeader: {
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 3,
        paddingTop: 10,
        paddingLeft: 30,
    },
    myComment: {
        marginBottom: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    myInfo: {
        marginLeft: 20,
        width: '50%'
    },
    myName: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    commentBody: {
        paddingLeft: 30,
    },
});

export default WatchPage;
