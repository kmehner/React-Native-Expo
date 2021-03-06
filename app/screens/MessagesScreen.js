import React from 'react';
import { 
    FlatList, 
    StyleSheet, 
    View,
} from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList 
                data={messages} 
                keyExtractor={message => message.id.toString()}
                renderItem={ ({ item }) => (
                    <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={ListItemDeleteAction}
                    />
                )} 
                ItemSeparatorComponent={ ListItemSeparator }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    color: {
        color: colors.primary,
    }
})

export default MessagesScreen;