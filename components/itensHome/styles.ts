import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  containerItens: {   
    justifyContent: 'center',    
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 40,
      
  },
 
  card: {
    backgroundColor: '#463FAF',
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,    
  },  
  itensCard: {
    color: '#fff'
  },
  titleCardItem: {    
   
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7
  },
  itensCardName: {
    color: '#fff',
    fontSize: 18,    
        
  },

  itensCardCat: {
    color: '#fff',
    fontSize: 14
  },
  menuIconUserIndiv: {
    width: 22,
    height: 22,
    marginRight: 2
  },

  titleCardCat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7
  },

  titleCardBio: {
    flexDirection: 'row',
    alignItems: 'center',    
  },
  itensCardBio: {
    color: '#fff',
    fontSize: 14
  }
});