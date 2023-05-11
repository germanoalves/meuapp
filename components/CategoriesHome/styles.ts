import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

   
    categories: {        
        paddingLeft: 10,
        paddingBottom: 20,
        marginTop: 20,        
        height: 100,

    },

    categorieItemSingle: {
               
        borderRadius: 12 ,
        backgroundColor: '#463FAF',
        height: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 25,
        marginRight: 15,        
        flex: 1,
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