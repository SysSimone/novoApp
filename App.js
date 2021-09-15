import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import profile from './src/assets/profile.png';

//TAB ICONS
import home from './src/assets/home.png';
import search from './src/assets/search.png';
import notifications from './src/assets/notifications.png';
import settings from './src/assets/settings.png';
import logout from './src/assets/logout.png';

//Menu
import menu from './src/assets/menu.png';
import close from './src/assets/close.png';
//Foto

import profile1 from './src/assets/profile1.jpg';

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
 
 //para obter o menu de status atual
 const [showMenu, setShowMenu] = useState(false);

 //propriedades animadas
 const offsetValue = useRef(new Animated.Value(0)).current;

 //escala inicialmente deve ser um
 const scaleValue = useRef(new Animated.Value(1)).current;
 const closeButtonOffset = useRef(new Animated.Value(0)).current;


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={{ flex: 1 }} />

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>

        <Image source={profile} style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          marginVertical: 10,
          marginTop: 35,
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Simone Balzan </Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white',
            fontWeight: 'bold',
          }}> View Profile </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            //TAB BAR BUTTONS...
          }
          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Search", search)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}

        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View>

      </View>

      {
        //Vista de sobreposição
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: "white",
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        //transformando a view
        transform: [
          {scale : scaleValue },
          {translateX: offsetValue}
        ]
      }}>

        {
          // Menu do botão
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>

        <TouchableOpacity onPress={() =>{
          //faça ação aqui..
          //vista em escala..
          Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.88,
            duration: 300,
            useNativeDriver: true
          })
           .start()
       

          Animated.timing(offsetValue, {
            //valor Handom
            toValue: showMenu ? 0 : 230,
            duration: 300,
            useNativeDriver: true
          })

              .start()

             Animated.timing(closeButtonOffset, {
                //valor Handom
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true
              })

              .start()

              setShowMenu(!showMenu);

              }}>

          <Image source={showMenu ? close : menu } style={{
            width: 20,
            height: 20,
            tintColor: 'black',
            marginTop: 40,

          }}></Image>

        </TouchableOpacity>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20
          }}>{currentTab}</Text>
        

        <Image source={profile1} style={{
          width: '100%',
          height: 500,
          borderRadius: 15,
          marginTop: 20
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          paddingTop: 15,
          paddingBottom: 8,
        }}> Simone Balzan </Text>

        <Text style={{
        
          paddingTop: 1,
          paddingBottom: 8,
        }}>Atualmente desenvolvendo e estudando React, React Native, JavaScript, 
        HTML, CSS, TypeScript. Sempre buscando novos desafios 
        para me tornar uma excelente desenvolvedora! No momento estou disponível para entrar no mercado de trabalho.</Text>


      </Animated.View>

      </Animated.View>
    </SafeAreaView>
  );
}
//MULTIPLOS BOTÕES

const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {

      } else {
        setCurrentTab(title)
      }

    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? "white" : 'transparent',
        paddingLeft: 20,
        paddingRight: 30,
        borderRadius: 8,
        marginTop: 15

      }}>
        <Image
          source={image} style={{
            width: 30, height: 30,
            color: currentTab == title ? "#5359D1" : "white"
          }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }}> {title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
