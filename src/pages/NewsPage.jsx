import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CourseItem from '../components/course-item/CourseItem';

const courses = [
    { courseName: 'Courses 1', price: '$19.99' },
    { courseName: 'Courses 2', price: '$19.99' },
    { courseName: 'Courses 3', price: '$19.99' },
    { courseName: 'Courses 4', price: '$19.99' },
    { courseName: 'Courses 5', price: '$19.99' },
    { courseName: 'Courses 6', price: '$19.99' },
];

const NewsPage = () => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.sectionContainer}>
                <View style={styles.sectionOrangeContent}>
                    <Text style={[styles.title, styles.textCenter, styles.textGray]}>
                        Lorem ipsum dolor sit amet consectetur.
                    </Text>
                    <Text style={[styles.subTitle, styles.textCenter, styles.textGray]}>
                        Lorem ipsum dolor sit amet consectetur.
                    </Text>
                    <Text style={[styles.subTitle, styles.textCenter, styles.textGray]}>
                        Lorem ipsum dolor sit amet consectetur.
                    </Text>
                    <Text style={[styles.subTitle, styles.textCenter, styles.textGray]}>
                        Lorem ipsum dolor sit amet consectetur.
                    </Text>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.sectionBlueContent}>
                    <Text style={[styles.title, styles.textCenter, styles.textGray]}>
                        Lorem ipsum dolor sit amet consectetur.
                    </Text>
                    <Text style={[styles.subTitle, styles.textCenter, styles.textGray]}>
                        Lorem ipsum dolor sit amet consectetur.
                    </Text>
                    <Text style={[styles.subTitle, styles.textCenter, styles.textGray]}>
                        Lorem ipsum dolor sit amet consectetur.
                    </Text>
                    <Text style={[styles.subTitle, styles.textCenter, styles.textGray]}>
                        Lorem ipsum dolor sit amet consectetur.
                    </Text>
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
        width: '100%',
    },
    sectionOrangeContent: {
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        backgroundColor: '#FFCE51',
        borderRadius: 12,
        marginTop: 25,
        height: 180,
    },
    sectionBlueContent: {
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        backgroundColor: '#2F80ED',
        borderRadius: 12,
        marginTop: 25,
        height: 180,
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
        width: 67,
        height: 67,
        marginRight: 10,
    },
    textGray: {
        color: '#C4C4C4',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    subTitle: {
        fontWeight: '400',
        fontSize: 14,
        marginBottom: 4,
    },
    bgOrange: {},
});

export default NewsPage;
