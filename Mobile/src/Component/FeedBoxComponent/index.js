import React, {useState} from 'react';
import {Text, View, FlatList, Image, SafeAreaView} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';


const newImoraData = [
   {
       "id" : "1",
       "name" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
       "img" : "https://www.stonerdays.com/wp-content/uploads/2015/11/patrick-star-house-1.jpg",
       "price" : "420,00",
       "stars" : "4,5",
       "sub_stars": "30",
       "localization": "Sea"
   },
   {
       "id" : "2",
       "name" : "Que tesão mano",
       "img" : "https://www.coxinhanerd.com.br/wp-content/uploads/2018/06/ffff.jpg",
       "price" : "69,69",
       "stars" : "3,8",
       "sub_stars": "5",
       "localization": "Earth"
   },
   {
       "id" : "3",
       "name" : "Death Star",
       "img" : "https://vignette.wikia.nocookie.net/en.futurama/images/6/6e/Near_Death_Star.PNG/revision/latest/top-crop/width/360/height/450?cb=20080112204806",
       "price" : "44,44",
       "stars" : "3,8",
       "sub_stars": "100",
       "localization": "Space"
   }

];

export default function FeedBoxComponent(){
    return (

        <FlatList
          data={newImoraData}
          renderItem={({item}) => (
            <View style={styles.feedBox}>
              <View style={styles.imageContainer}>
                <Icon name="heart" size={25} style={styles.heartIcon} />
              </View>
              <Image source={{uri: item.img}} style={styles.image} />
  
              <View style={styles.starsItem}>
                <Text style={styles.priceText}>R${item.price}/mês </Text>
                <Text style={styles.starText}>
                  {item.stars} <Icon name="star" size={20} color="#26E07C" />
                  <Text style={styles.subStarsStyle}> ({item.sub_stars})</Text>
                </Text>
              </View>
  
              <View style={styles.div} />
  
              <View style={styles.bottomTextPos}>
                <Text style={styles.titleText}>{item.name}</Text>
                <Text style={styles.localizationText}>{item.localization}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
  
    );
}
 
