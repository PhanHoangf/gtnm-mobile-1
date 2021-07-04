import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import CourseItem from '../components/course-item/CourseItem';

const courses = [
    { courseName: 'Film 1', price: '$19.99' },
    { courseName: 'Film 2', price: '$19.99' },
    { courseName: 'Film 3', price: '$19.99' },
    { courseName: 'Film 4', price: '$19.99' },
    { courseName: 'Film 5', price: '$19.99' },
    { courseName: 'Film 6', price: '$19.99' },
];

const FavoritePage = () => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.recommendContainer}>
                <View style={styles.homeTitle}>
                    <Text style={[styles.textTitle, styles.textWhite]}>My favorite</Text>
                </View>
                <ScrollView style={styles.coursesContainer}>
                    <FlatList
                        horizontal={true}
                        data={courses}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity>
                                    <View key={index} style={styles.coursesContainer}>
                                        <CourseItem courseName={item.courseName}></CourseItem>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                    <FlatList
                        horizontal={true}
                        data={courses}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity>
                                    <View key={index} style={styles.coursesContainer}>
                                        <CourseItem courseName={item.courseName}></CourseItem>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                    <FlatList
                        horizontal={true}
                        data={courses}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity>
                                    <View key={index} style={styles.coursesContainer}>
                                        <CourseItem courseName={item.courseName}></CourseItem>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                    <FlatList
                        horizontal={true}
                        data={courses}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity>
                                    <View key={index} style={styles.coursesContainer}>
                                        <CourseItem courseName={item.courseName}></CourseItem>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                    <FlatList
                        horizontal={true}
                        data={courses}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity>
                                    <View key={index} style={styles.coursesContainer}>
                                        <CourseItem courseName={item.courseName}></CourseItem>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </ScrollView>
            </View>
            {/* <View style={styles.sectionContainer}>
                <View style={styles.homeTitle}>
                    <Text style={[styles.textTitle, styles.textWhite]}>Recommend films</Text>
                </View>
                <View style={styles.coursesContainer}>
                    <FlatList
                        horizontal={true}
                        data={courses}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={styles.coursesContainer}>
                                    <CourseItem
                                        courseName={item.courseName}
                                        price={item.price}
                                    ></CourseItem>
                                </View>
                            );
                        }}
                    />
                </View>
            </View> */}
            {/* <View style={styles.sectionContainer}>
                <View style={styles.homeTitle}>
                    <Text style={[styles.textTitle, styles.textWhite]}>Common films</Text>
                    <TouchableOpacity>
                        <Image
                            style={styles.messengerIcon}
                            source={require('../../assets/messenger.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.coursesContainer}>
                    <FlatList
                        horizontal={true}
                        data={courses}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={styles.coursesContainer}>
                                    <CourseItem
                                        courseName={item.courseName}
                                        price={item.price}
                                    ></CourseItem>
                                </View>
                            );
                        }}
                    />
                </View>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: '#000000',
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 20,
    },
    textCenter: {
        textAlign: 'center',
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    homeTitle: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    coursesContainer: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    messengerIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textWhite: {
        color: '#fff',
    },
});

export default FavoritePage;
