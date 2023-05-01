import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    categories: {
        flex: 1,
        paddingLeft: 10,
        marginTop: 40
    },

    categorieItemSingle: {
        width: 120,
        height: 100,
        borderRadius: 50 ,
        backgroundColor: '#463FAF',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
        marginRight: 15,
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        

    },
    categorieName: {
        color: '#fff'
    },

    menuIconCategorie: {
        width: 20,
        height: 20,
        marginRight: 5
    }
})