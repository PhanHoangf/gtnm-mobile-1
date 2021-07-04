import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const Header = (props) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            {props.children ? (
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{props.children}</Text>
                </View>
            ) : (
                <React.Fragment></React.Fragment>
            )}
            {/* <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
                }}
                useNativeControls
                resizeMode='contain'
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            /> */}
            <View style={styles.imageContainer}>
                {/* <Video
                    ref={video}
                    style={styles.imageContainer}
                    source={{
                        uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
                    }}
                    useNativeControls
                    resizeMode='contain'
                    isLooping
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                /> */}
                <TouchableOpacity>
                    <Image style={styles.image} source={require('../../../assets/Play.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.headerBody}>
                <View style={styles.headerLeft}>
                    <View>
                        <Image
                            style={styles.icon}
                            source={require('../../../assets/Vector.png')}
                        ></Image>
                    </View>
                    <Text style={[styles.textWhite]}>My List</Text>
                </View>
                <View style={styles.headerRight}>
                    <View>
                        <Image
                            style={styles.icon}
                            source={require('../../../assets/info.png')}
                        ></Image>
                    </View>
                    <Text style={[styles.textWhite]}>Info</Text>
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
        paddingBottom: 20
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
        width: 28,
        height: 20,
        marginBottom: 10,
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
    },
    headerRight: {
        paddingRight: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWhite: {
        color: '#fff',
    },
});

export default Header;
