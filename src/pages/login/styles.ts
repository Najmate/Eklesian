import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop: {
        height: screenHeight / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: screenHeight / 4,
        width: '100%',
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: screenHeight / 4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'

    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: themas.Colors.lightGray,
        backgroundColor: themas.Colors.bgScreen,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    logo: {
        width: screenWidth / 3,
        height: screenHeight / 6,
        resizeMode: 'contain',
    },
    text: {
        marginTop: 35,
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        height: '100%',
        width: '100%',
        borderRadius: 40,
    },
    boxIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    titleInput: {
        marginLeft: 5,
        color: themas.Colors.gray,
        marginTop: 20
    },
    textBottom: {
        fontSize: 16,
        color: themas.Colors.gray
    },
    textBottomCreate: {
        fontSize: 16,
        color: themas.Colors.primary
    }
})