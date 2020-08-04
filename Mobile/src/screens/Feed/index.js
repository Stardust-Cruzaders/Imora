import React, {useState} from 'react';
import {Text, View, FlatList, Image, SafeAreaView} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather'  

import imoraData from  '../../imoraData.json';
const newImoraData = imoraData;

export default function Feed() {


  return(
    
    <SafeAreaView style= {styles.container}>

      <FlatList
      data={newImoraData}
      renderItem = {({item}) =>
      <View style= {styles.feedBox}>
           
        <View style = {styles.imageContainer}> 
          <Icon name="heart" size={25} style={styles.heartIcon}/>
        </View>
        <Image source = {{uri:item.img}} style = {styles.image}/>
    
   <View style = {styles.starsItem}>    
      <Text style = {styles.priceText}>R${item.price}/noite </Text>
      <Text style = {styles.starText}>{item.stars} <Icon name="star" size={20} color="#26E07C" /><Text style = {styles.subStarsStyle}> ({item.sub_stars})</Text></Text>

      </View>
   
               <View style={styles.div}>
              </View> 

    <View style= {styles.bottomTextPos}>
       <Text style ={styles.titleText}>{item.name}</Text>
       <Text style ={styles.localizationText}>{item.localization}</Text>     
    </View>
  </View>
  
  }
  keyExtractor={(item, index) => index.toString()}
  />
    
    <View style={styles.bottomTabNav}>
        <Icon name="compass" size={25}  color="#FFF"/>
        <Icon name="zap" size={25}  color="#FFF"/>
        <Icon name="message-circle" size={25}  color="#FFF"/>
        <Icon name="user" size={25} color="#FFF"/>
    </View>

    </SafeAreaView> 
     );

}
