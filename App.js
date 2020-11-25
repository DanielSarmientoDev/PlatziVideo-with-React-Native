import React, { Component } from 'react';
import {Text,View,StyleSheet, ActivityIndicator} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import Loader from './src/videos/components/loader';
import CategoryList from './src/videos/containers/category-list';
import SuggestionList from './src/videos/containers/suggestions-list';
import API from './utils/api';

export default class App extends React.Component{
  state = {
    suggestionList: [],
    categoryList: [],
    isLoading:true
  }
  
  async componentDidMount(){
    const movies  = await API.getSuggestion(10);
    const categories  = await API.getMovies();
    this.setState({
      suggestionList:movies,
      isLoading:false,
      categoryList: categories
    })
  }
  render(){
    const {suggestionList,isLoading,categoryList} = this.state;
    return (
      <Home>
          <Header />
          <Text>Buscador</Text>
          <CategoryList movies={categoryList} />
          <SuggestionList movies={suggestionList} />
          
          
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

