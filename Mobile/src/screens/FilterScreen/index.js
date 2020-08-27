import React, {useState} from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native';
import { RadioButton, Divider, DarkTheme } from 'react-native-paper';

import styles from './styles';

export default function FilterScreen(){

    const [value, onChangeText] = useState();
    const [locationChecked, setLocationChecked] = useState('first');

    return(
    <View style={styles.container}>
        <View>
            <Text style={styles.textTitleStyle}>Filtros</Text>
        </View>
     <ScrollView>
        <View style={styles.filterBox}>

            <View style={styles.marginBox}>
                <TextInput 
                style={styles.textInputStyle}   
                onChangeText={text => onChangeText(text)}
                value={value} 
                clearTextOnFocus={true}
                placeholder=" $ Preço/Mês"
                />

                <RadioButton 
                value="Morar com outros residentes"
                status={ locationChecked === "first" ? 'checked' : 'unchecked'}
                onPress={() => setLocationChecked('first')}
                
                />
                
                <RadioButton 
                value="Morar com outros "
                status={ locationChecked === "second" ? 'checked' : 'unchecked'}
                onPress={() => setLocationChecked('second')}
                
                />

                <Divider style={styles.divider}/>

                <Text style={styles.subTitleStyle}>Tipo de Locação</Text>

                <RadioButton 
                value="Morar com outros "
                status={ locationChecked === "second" ? 'checked' : 'unchecked'}
                onPress={() => setLocationChecked('second')}
                
                />
                 <RadioButton 
                value="Morar com outros "
                status={ locationChecked === "second" ? 'checked' : 'unchecked'}
                onPress={() => setLocationChecked('second')}
                
                />
                 <RadioButton 
                value="Morar com outros "
                status={ locationChecked === "second" ? 'checked' : 'unchecked'}
                onPress={() => setLocationChecked('second')}
                
                />

                <Divider style={styles.divider}/>

                <Text style={styles.subTitleStyle}>Tipo de imóvel</Text>
                <RadioButton 
                value="Morar com outros "
                status={ locationChecked === "second" ? 'checked' : 'unchecked'}
                onPress={() => setLocationChecked('second')}
                
                />
                <RadioButton 
                value="Morar com outros "
                status={ locationChecked === "second" ? 'checked' : 'unchecked'}
                onPress={() => setLocationChecked('second')}
                
                />
                <RadioButton 
                value="Morar com outros "
                status={ locationChecked === "second" ? 'checked' : 'unchecked'}
                onPress={() => setLocationChecked('second')}
                
                /> 

                <Divider style={styles.divider}/>

                <Text style={styles.subTitleStyle}>Condições</Text>
                <RadioButton 
                value="Morar com outros "
                status={ locationChecked === "second" ? 'checked' : 'unchecked'}
                onPress={() => setLocationChecked('second')}
                
                /> 
                <RadioButton 
                value="Morar com outros "
                status={ locationChecked === "second" ? 'checked' : 'unchecked'}
                onPress={() => setLocationChecked('second')}
                
                /> 
                
            </View>         
        </View>              
    </ScrollView>        
</View>
    )
}