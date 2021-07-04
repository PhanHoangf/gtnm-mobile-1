import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import CourseItem from '../components/course-item/CourseItem';

const courses = [
    { courseName: 'Courses 1', price: '$19.99' },
    { courseName: 'Courses 2', price: '$19.99' },
    { courseName: 'Courses 3', price: '$19.99' },
    { courseName: 'Courses 4', price: '$19.99' },
    { courseName: 'Courses 5', price: '$19.99' },
    { courseName: 'Courses 6', price: '$19.99' },
];

const HomePage = () => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.recommendContainer}>
                <View style={styles.homeTitle}>
                    <Text style={styles.textTitle}>Recommended Courses</Text>
                </View>
                <View style={styles.coursesContainer}>
                    <FlatList
                        horizontal={true}
                        data={courses}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={styles.coursesContainer}>
                                    <CourseItem courseName={item.courseName}></CourseItem>
                                </View>
                            );
                        }}
                    />
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.homeTitle}>
                    <Text style={styles.textTitle}>Trending</Text>
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
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.homeTitle}>
                    <Text style={styles.textTitle}>Activity Archive</Text>
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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
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
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    messengerIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
});

export default HomePage;
