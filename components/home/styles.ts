import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,        
    backgroundColor: '#ecf0f1',   
  },
  
  topHeader: {
    backgroundColor: '#463FAF',
    height: 135,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',     
  },

 menu: {
   width: 40,
   height: 40,   
   justifyContent: "center",
   textAlign: 'center',
   marginLeft: 5
 },

 logo: {
   flex: 1,
   backgroundColor: 'skyblue',
   justifyContent: "center",
   textAlign: 'center'    
 },

 menuIcon: {  
    width: 30,
    height: 30,  
 },

 input: {
    height: 35,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 70,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    color: '#fff',
    padding: 10,
  },

  subHead: {
    flexDirection: 'row',    
    justifyContent: 'flex-start',
    marginTop: 15
    
  },

  subHeadIconOne: {
    width: "50%",    
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    
  },
  subHeadIconTwo: {
    width: "50%",        
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  menuIconSearch: {  
    width: 20,
    height: 20,
    marginRight: 5,
    
 },

  menuIconUser: {  
      width: 20,
      height: 20,  
      marginRight: 5,
        
  },

  menuS: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 1,
  },

  contentHome: {
    marginTop: -3,
    marginBottom: 10
  },
 

 
});