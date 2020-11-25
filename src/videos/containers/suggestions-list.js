import React from 'react';
import {
    FlatList,
    Text,
} from 'react-native';

import Empty from '../components/empty';
import SuggestionListLayout from '../components/suggestion-list-layout';
import Suggestion from './components/suggestion';
import Separator from './components/verticalSeparator'
export default class SuggestionList extends React.Component{
    renderEmpty = () =>  <Empty Text="No hay recomendaciones."/>
    itemSeparator = () => <Separator/>
    idExtractor = item => item.id.toString()
    render(){
    return(   
        <SuggestionListLayout
        title="Recomendado para ti"
        >
            <FlatList 
            keyExtractor={this.idExtractor}
            data={this.props.movies}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={(item) => <Suggestion {...item} />}
            />
        </SuggestionListLayout>
    );
    }
}

