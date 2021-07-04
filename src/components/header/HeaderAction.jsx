import React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, TouchableOpacity } from 'react-native';

const HeaderAction = (props) => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    const { title, subTitle } = props;
    return (
        <Appbar.Header style={{ backgroundColor: '#000000', justifyContent: 'space-between' }}>
            {/* <Appbar.BackAction onPress={_goBack} /> */}
            <TouchableOpacity onPress={() => {props.route.jumpTo('home')}}>
                <Image
                    source={require('../../../assets/logos.png')}
                    style={{ width: 50, height: 50 }}
                ></Image>
            </TouchableOpacity>
            {/* <Appbar.Content
                color='white'
                style={{ alignItems: 'center', paddingRight: '20%' }}
                title={title}
                subtitle={subTitle}
            /> */}
            {/* <Appbar.Action icon='magnify' onPress={_handleSearch} /> */}
            <Appbar.Action icon='menu' onPress={_handleMore} />
        </Appbar.Header>
    );
};

export default HeaderAction;
