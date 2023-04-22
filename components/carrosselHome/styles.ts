import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {   
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
    
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  
    
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  card: {
    width: 200,
    height: 200, 
    
  },

  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
});