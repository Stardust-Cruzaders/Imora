import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DDE0E3",
        flex:1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    textTitleStyle: {
        fontFamily: 'Roboto',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#3f3f3f',
        marginVertical: 20
    },
    filterBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        width: width - 50,
        marginBottom: 10,
        flex: 1
    },
    marginBox: {
        margin: 18
    },
    textInputStyle: {
        // Style do Input 
        borderColor: "#8D8D97",
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        backgroundColor: "#F0F0F0",
        
        // Style do Text
        fontFamily: 'Roboto',
        fontSize: 20,
    },
    radioButton: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: 'black'
    },
    divider:{
        backgroundColor: "#000",
        height:1
    },
    subTitleStyle:{
        fontFamily:'Roboto',
        fontSize: 25,
        marginTop: 8
    }
    

});

export default styles;