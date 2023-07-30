

import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, Modal, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import {} from 'expo-location'
import api from '../api'
import Header from './header'
import { weatherImages } from '../constants';

import { Container,Informations,Temp,Date,ContainerIcon,Clima,NextDays,ForecastDay,Umidity,ForecastContainer } from './styled';
import Next from './nextDays';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';



export default function Home() {

const [ city, setcity] = useState('penedo')
const [weather,setWeather] =useState(null)



useEffect(() => {
  (async () => {
    
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    
  })();

  
  
}, []);


  


async function geoLocation(){
  let location = await Location.getCurrentPositionAsync({});
  Geocoder.init("AIzaSyD-5Qi5sT1tRP_Rt--u7Du25YBevOYlGc0");

  Geocoder.from(location.coords.latitude,location.coords.longitude)
		.then(json => {
             let cityy = json.results[0].address_components[3].long_name;
        		let state = json.results[0].address_components[4].long_name;
        
            console.log(cityy)
			console.log(state);
     
      setcity( `${cityy} ${state}`)
     
      
		})
		.catch(error => console.warn(error));
    
}





useEffect(()=>{
async function Load () {
await  api.get(`/current.json?key=7ea4f61180f1457fbf301541232706&q=${city}&lang=pt`)
.then((response)=>{
    setWeather(response.data)
console.log(response)

})
.catch((error)=> {
console.log(error)
}

) 

}
geoLocation()
Load()
},[])





 







  return ( 




    <Container >
     
      <Header city={city}  />
    
    
    {

      weather ? (
       
          <View >

       <Informations >
         <Temp >{weather.current.temp_c}</Temp>
     <Icon style={{marginTop:-40,marginLeft:5}}  name="circle-o" size={20} color='white'/>
     <Date >{weather.location.localtime}</Date>
     
        </Informations>

<ContainerIcon>

       <Image style={{width:160,height:160}} source={weatherImages[weather.current.condition.text]}/>
  <Clima>{weather.current.condition.text}</Clima>
 
  </ContainerIcon>
    
     <ForecastContainer>
<ForecastDay>
  <Icon2 name='water' size={30} color='white'/>
  <Umidity>{weather.current.humidity + '%'}</Umidity>
</ForecastDay>
<ForecastDay>
<Feather name='wind' size={30} color='white'/>
  <Umidity>{weather.current.wind_kph + 'Km'}</Umidity>
</ForecastDay>

      </ForecastContainer>        
     
       
    




  </View>
        
        
      ):<View style={{color:'white',alignItems:'center'}}>

        <Text style={{color:'white',fontSize: 25,textAlign:'center',margin:20}}>Carregando dados...</Text>
      </View>
    }
    <NextDays>
      <Next city ={city}/>
    </NextDays>
    
    </Container>
   
  )
}
