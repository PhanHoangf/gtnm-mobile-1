import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const HeaderWatch = (props) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            <Text style={[styles.textWhite, styles.headerTitle, styles.textLeft]}>Title</Text>
            <View style={styles.imageContainer}>
                <TouchableOpacity>
                    <Image style={styles.image} source={require('../../../assets/Play.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.headerBody}>
                <View style={styles.headerLeft}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image
                                style={styles.icon}
                                source={require('../../../assets/star.png')}
                            ></Image>
                        </View>
                        <View>
                            <Image
                                style={styles.icon}
                                source={require('../../../assets/star.png')}
                            ></Image>
                        </View>
                        <View>
                            <Image
                                style={styles.icon}
                                source={require('../../../assets/star.png')}
                            ></Image>
                        </View>
                        <View>
                            <Image
                                style={styles.icon}
                                source={require('../../../assets/star.png')}
                            ></Image>
                        </View>
                        <View>
                            <Image
                                style={styles.icon}
                                source={require('../../../assets/star.png')}
                            ></Image>
                        </View>
                    </View>
                    <View style={{alignItems: 'flex-start', width: '100%'}}>
                        <Text style={[styles.textWhite, styles.textLeft]}>Published: ...</Text>
                        <Text style={[styles.textWhite, styles.textLeft]}>Actor: ...</Text>
                        <Text style={[styles.textWhite, styles.textLeft]}>Tag: ...</Text>
                    </View>
                </View>
                <View style={styles.headerRight}>
                    <View style={{ marginRight: 10 }}>
                        <Image
                            style={styles.icon}
                            source={require('../../../assets/like.png')}
                        ></Image>
                    </View>
                    <View>
                        <Image
                            style={styles.icon}
                            source={require('../../../assets/dislike.png')}
                        ></Image>
                    </View>
                    {/* <Text style={[styles.textWhite]}>Info</Text> */}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: 'column',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 20,
    },
    header: {
        padding: 20,
        marginTop: 30,
    },
    headerTitle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 25,
    },
    imageContainer: {
        borderRadius: 12,
        backgroundColor: '#fff',
        marginBottom: 'auto',
        width: '90%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    image: {
        width: 74,
        height: 74,
    },
    icon: {
        width: 20,
        height: 20,
        marginBottom: 10,
        marginRight: 5,
    },
    textCenter: {
        textAlign: 'center',
    },
    headerBody: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
    },
    headerLeft: {
        paddingLeft: 40,
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
    },
    headerRight: {
        paddingRight: 40,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    textWhite: {
        color: '#fff',
    },
    textLeft: {
        textAlign: 'left',
    },
});

export default HeaderWatch;
