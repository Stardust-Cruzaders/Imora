import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#E8E8E8',
    },
    headerView: {
        backgroundColor: '#7e57c2',

        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {
        alignItems: 'flex-end',
        padding: 5,
    },
    profileInfo: {
        justifyContent: 'center',
        alignContent: 'center',

        marginVertical: 25,
    },
    profilePic: {
        resizeMode: 'contain',
        width: 150,
        height: 150,

        alignSelf: 'center',

        borderRadius: 1000,

        flex: 1,
    },
    profilePicView: {
        width: 150,
        height: 150,

        borderRadius: 1000,
        borderColor: '#FFF',
        borderWidth: 10,
        justifyContent: 'center',
        alignItems: 'center',

        marginBottom: 15,

        backgroundColor: '#FFF',
    },
    headerTitle: {
        color: '#FFF',

        fontSize: 30,
        fontWeight: 'bold',

        alignSelf: 'center',
    },
    icon: {
        marginRight: 5,
    },
    iconTextView: {
        flexDirection: 'row',
        alignItems: 'center',

        marginVertical: 10,
    },
    body: {
        backgroundColor: '#FFF',
        alignSelf: 'center',
        flex: 1,
    },
    main: {
        marginHorizontal: 25,

        marginBottom: 20,
    },
    bodyText: {
        color: '#3F3F3F',

        fontSize: 18,
    },
    bodyTitle: {
        color: '#3F3F3F',
        fontSize: 24,

        marginTop: 15,
        marginBottom: 5,
    },
    buttonText: {
        color: '#3F3F3F',
        fontSize: 24,
    },
    button: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: '100%',
    },
});

export default styles;
