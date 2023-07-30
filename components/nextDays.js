import { View,Text, ScrollView, FlatList,StyleSheet ,Image} from "react-native"
import { useEffect, useState } from "react"
import api from "../api"
import Date from 'react-native-vector-icons/Fontisto'

import { weatherImages } from "../constants"




export default function Next(props){



const [ forecast,setForecast] = useState(null)


useEffect(()=>{ 

async function Load(){
    api.get(`/forecast.json?key=7ea4f61180f1457fbf301541232706&q=${props.city}&days=7&aqi=no&alerts=no&lang=pt`)
   
    .then((response)=>{
console.log(response.data)
setForecast(response.data)
    })
    .catch((error)=>{
console.log(error) 
    })
}

Load()

},[])



    return(
        <View>
       
       
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-end',gap:5}}>
                <Date name='date' size={24} color='white'/>
                          <Text style={{fontSize: 18,color:'white',}} > Previsão para os próximos dias</Text>
<Text style={{color:'white'}}></Text>  
            </View>


<ScrollView horizontal showsHorizontalScrollIndicator={false}>


{
forecast?.forecast?.forecastday.map((item, index)=> {

    return(

        <View key={index } style={styles.container} >
            <View style={styles.date}>
<Image  style={styles.icon}source={weatherImages[item.day.condition.text]}/>
         <Text style={styles.text}>{item.date}</Text>   
         <Text style={{fontSize: 20,color:'white',fontWeight:'bold',marginTop:2}}>{item.day.avgtemp_c + '°'}</Text>
             
            </View>


        </View>
    )
})
}

</ScrollView>


            </View>

  

    )
}

const styles = StyleSheet.create({

container:{
    width: 120,
   
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
},
date:{
    backgroundColor:'#bdbebd',
    width: 90,
    height: 150,
    borderRadius:20,
    alignItems:'center'
},
icon:{
    width:60,
    height: 60,
    
},
text:{
    color:'white',
    fontSize: 15,
    textAlign:'center',
    marginTop: 10,
    marginBottom:5
}


})