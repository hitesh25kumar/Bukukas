import { StyleSheet,Dimensions } from 'react-native';

const {width} = Dimensions.get('window')

export const gridStyles = StyleSheet.create({
    container: {flex: 1,padding:'5%',marginBottom:'5%'},
    mainWrapper: {flex:1},
    eventCardWrapper:{width:'100%',backgroundColor:'#fff',shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,borderRadius:8,marginBottom:'5%'},
    cardTopWrapper:{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',paddingRight:'5%',alignItems:'center'},
    EventCategoryTitle:{fontSize:23,fontWeight:'bold',paddingTop:15,paddingLeft:'5%'},
    eventImage:{width:'100%',height:150},
    imageStyle:{borderTopLeftRadius:8,borderTopRightRadius:8},
    eventNameWrapper:{width:'100%',padding:'3%',paddingLeft:'5%',paddingBottom:0},
    eventName:{fontWeight:'bold',fontSize:17},
    eventDetailsWrapper:{width:'100%',paddingHorizontal:'5%',paddingVertical:'3%'},
    eventLocationInnerWrapper:{display:'flex',width:'50%'},
    eventLocationWrapper:{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.5,paddingBottom:'5%',borderColor:'#DEDEE7'},
    eventLocation:{color:'#333333',fontSize:15,width:'100%'},
    venue:{fontSize:15,width:'100%',color:'#000',fontWeight:'bold'},
    eventTimings:{color:'#333333',fontSize:15,display:'flex',alignItems:'center',justifyContent:'center',padding:'2%'},
    eventActionWrapper:{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',paddingTop:'2%'},
    eventActionLeftWrapper:{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:'2%'},
    eventActionRightWrapper:{width:'40%',display:'flex',alignItems:'center',justifyContent:'center'},
    rsvpbtn:{backgroundColor:'#323edd',paddingVertical:'5%',paddingHorizontal:'10%',borderRadius:15,fontSize:15},
    going:{backgroundColor:'green',borderRadius:15,width:30,height:30,marginRight:'5%',textAlign:'center',paddingVertical:5,color:'#fff'},
    maybeGoing:{backgroundColor:'red',borderRadius:15,width:30,height:30,marginLeft:'5%',marginRight:'5%',textAlign:'center',paddingVertical:5,color:'#fff'},
    checkDetails:{color:"#fff"},
    entryTypetxt:{color:'#fff'},
    entryType:{position:'absolute',right:0,top:10,backgroundColor:'#323edd',paddingVertical:'2%',paddingHorizontal:'5%',display:'flex',alignItems:'center',justifyContent:'center',borderTopLeftRadius:20,borderBottomLeftRadius:20},
    eventaction:{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'},
   
  });
  
  export const listStyles = StyleSheet.create({
      container: {flex: 1,padding:'5%',marginBottom:'5%'},
      eventCardWrapper:{width:'100%',shadowColor: "#000",flexDirection:'row',
     borderRadius:8,marginBottom:'5%'},
      eventImage:{width:width-(width*70/100),height:120,backgroundColor:'white',},
      imageStyle:{borderRadius:8},
      eventNameWrapper:{padding:'5%',paddingBottom:0,width:'70%'},
      eventName:{fontWeight:'bold',fontSize:17},
      eventDetailsWrapper:{width:'100%',paddingHorizontal:'5%',paddingVertical:'0%'},
      eventLocationInnerWrapper:{display:'flex',width:'50%'},
      eventLocationWrapper:{width:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',borderBottomWidth:0.5,paddingBottom:'5%',borderColor:'#DEDEE7'},
      eventLocation:{color:'#333333',fontSize:15,width:'100%'},
      venue:{fontSize:15,width:'100%',color:'#000',fontWeight:'bold'},
      eventTimings:{color:'#333333',fontSize:15,display:'flex',alignItems:'center',justifyContent:'center',padding:'0%'},
      eventActionWrapper:{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',paddingTop:'2%'},
      eventActionLeftWrapper:{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:'2%'},
      eventActionRightWrapper:{width:'40%',display:'flex',alignItems:'center',justifyContent:'center'},
      rsvpbtn:{backgroundColor:'#323edd',paddingVertical:'5%',paddingHorizontal:'10%',borderRadius:15,fontSize:15},
      going:{backgroundColor:'green',borderRadius:15,width:30,height:30,marginRight:'5%',textAlign:'center',paddingVertical:5,color:'#fff'},
      maybeGoing:{backgroundColor:'red',borderRadius:15,width:30,height:30,marginLeft:'5%',marginRight:'5%',textAlign:'center',paddingVertical:5,color:'#fff'},
      checkDetails:{color:"#fff"},
      entryTypetxt:{color:'#fff'},
      entryType:{position:'absolute',right:0,top:10,backgroundColor:'#323edd',paddingVertical:'2%',paddingHorizontal:'5%',display:'flex',alignItems:'center',justifyContent:'center',borderTopLeftRadius:20,borderBottomLeftRadius:20},
      eventaction:{display:'none'},
      layout:{width:'100%',flexDirection:'column'}
    });
    
  