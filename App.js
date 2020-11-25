import React, { Component } from 'react';
import {Text,View,StyleSheet, ActivityIndicator} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import Loader from './src/videos/components/loader';
import SuggestionList from './src/videos/containers/suggestions-list';
import API from './utils/api';

export default class App extends React.Component{
  state = {
    suggestionList: [],
    isLoading:true
  }
  
  async componentDidMount(){
    const movies  = await API.getSuggestion(10);
    this.setState({
      suggestionList:movies,
      isLoading:false
    })
  }
  render(){
    const {suggestionList,isLoading} = this.state;
    return (
      <Home>
          <Header />
          <Text>Buscador</Text>
          <Text>Categorías</Text>
          {
            isLoading ?
            <Loader color="#e4e4"/>
            :
          <SuggestionList movies={suggestionList}/>
          }
          
      </Home>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
  }
})

