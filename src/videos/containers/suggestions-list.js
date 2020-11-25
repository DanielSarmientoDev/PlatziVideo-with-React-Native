import React from 'react';
import {
    FlatList,
    Text,
} from 'react-native';

import Empty from '../components/empty';
import SuggestionListLayout from '../components/suggestion-list-layout';
import Separator from './components/verticalSeparator'
export default function SuggestionList(){
    const list = [
        {
            title:'Avengers',
            key:'1',
        },
        {
            title:'Pokemon',
            key:'2'
        }

    ]
    return(   
        <SuggestionListLayout
        title="Recomendado para ti"
        >
            <FlatList 
            data={list}
            ListEmptyComponent={() => <Empty Text="No hay recomendaciones."/>}
            ItemSeparatorComponent={() => <Separator/>}
            renderItem={({item}) => <Text>{item.title}</Text>}
            />
        </SuggestionListLayout>
    );
    }
