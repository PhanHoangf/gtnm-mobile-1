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
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
                }}
                useNativeControls
                resizeMode='contain'
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            {/* <View style={styles.imageContainer}>
                <Video
                    ref={video}
                    style={styles.imageContainer}
                    source={{
                        uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
                    }}
                    useNativeControls
                    resizeMode='contain'
                    isLooping
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                />
                <TouchableOpacity>
                    <Image style={styles.image} source={require('../../../assets/Play.png')} />
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 0, 0, 0.55); ',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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
        // borderRadius: 12,
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
    textCenter: {
        textAlign: 'center',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 12,
    },
});

export default Header;
