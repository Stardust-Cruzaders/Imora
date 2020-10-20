import {Dimensions, StyleSheet} from 'react-native';
const d = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7E57C2',
        
    },
    fontTitle: {
        fontFamily: 'Roboto',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '400',
        color:'#FFF',
        marginBottom: 10,
    },
    whiteBox: {
        width: 280,
        height: 320,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent:'space-evenly',
        backgroundColor: '#FFF',
        borderRadius: 5,
        paddingHorizontal: 24
      },
      buttonStyle: {
        borderRadius: 5,
        backgroundColor: '#26E07C',
        padding: 10,
      
      },
      textButton: {
        fontFamily: 'Roboto',
        fontSize: 26,
        color: '#FFF',
        textAlign: 'center'
      },
      subTextWhite:{
        fontSize: 15,
        color:'#FFF',
        fontFamily:'Roboto'
      },
      subTextGreen: {
        fontSize: 15,
        color:'#26E07C',
        fontFamily:'Roboto',
        borderBottomWidth: 1,
        borderColor: '#26E07C'
      },
      imageBackground: {
        flex:1,
        resizeMode: 'cover'
      },
})

export default styles;
