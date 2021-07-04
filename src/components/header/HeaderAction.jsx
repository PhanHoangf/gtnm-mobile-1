import React from 'react';
import { Appbar } from 'react-native-paper';

const HeaderAction = (props) => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    const { title, subTitle } = props;
    return (
        <Appbar.Header style={{ backgroundColor: '#3EC6FF' }}>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content
                color='white'
                style={{ alignItems: 'center', paddingRight: '20%' }}
                title={title}
                subtitle={subTitle}
            />
            {/* <Appbar.Action icon='magnify' onPress={_handleSearch} />
            <Appbar.Action icon='dots-vertical' onPress={_handleMore} /> */}
        </Appbar.Header>
    );
};

export default HeaderAction;
