import React, { Component } from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestions-list';
import API from './utils/api';

export default class App extends React.Component{
  state = {
    suggestionList: []
  }
  async componentDidMount(){
    const movies  = await API.getSuggestion(10);
    this.setState({
      suggestionList:movies,
    })
  }
  render(){
    const {suggestionList} = this.state;
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorías</Text>
        <SuggestionList 
        movies={suggestionList}/>
      
      </Home>
      
    );
  }
}


