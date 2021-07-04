import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import CourseItem from '../course-item/CourseItem';

const courses = [
    { courseName: 'Film 1', price: '$19.99' },
    { courseName: 'Film 2', price: '$19.99' },
    { courseName: 'Film 3', price: '$19.99' },
    { courseName: 'Film 4', price: '$19.99' },
    { courseName: 'Film 5', price: '$19.99' },
    { courseName: 'Film 6', price: '$19.99' },
];

const SearchHeader = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder='Search'
                onChangeText={onChangeSearch}
                value={searchQuery}
                clearIcon='close'
            />
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
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'flex-start',
        backgroundColor: '#000000',
    },
    searchContainer: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
    },
    coursesContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10
    },
});

export default SearchHeader;
