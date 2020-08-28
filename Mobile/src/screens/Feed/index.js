import React from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

import FeedBoxComponent from '../../Component/FeedBoxComponent';
import SearchBar from '../../Component/SearchBar';
import FilterComponent from '../../Component/FilterComponent';

export default function Feed() {
    const newImoraData = [
        {
            id: '1',
            name: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            img:
                'https://www.stonerdays.com/wp-content/uploads/2015/11/patrick-star-house-1.jpg',
            price: '420,00',
            stars: '4,5',
            sub_stars: '30',
            localization: 'Sea',
        },
        {
            id: '2',
            name: 'Que tesão mano',
            img:
                'https://www.coxinhanerd.com.br/wp-content/uploads/2018/06/ffff.jpg',
            price: '69,69',
            stars: '3,8',
            sub_stars: '5',
            localization: 'Earth',
        },
        {
            id: '3',
            name: 'Death Star',
            img:
                'https://vignette.wikia.nocookie.net/en.futurama/images/6/6e/Near_Death_Star.PNG/revision/latest/top-crop/width/360/height/450?cb=20080112204806',
            price: '44,44',
            stars: '3,8',
            sub_stars: '100',
            localization: 'Space',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerNav}>
                <SearchBar />
                <FilterComponent />
            </View>

            <FeedBoxComponent />
            <FlatList
                data={newImoraData}
                renderItem={({item}) => (
                    <FeedBoxComponent
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        stars={item.stars}
                        sub_stars={item.sub_stars}
                        localization={item.localization}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}
