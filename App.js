import React, { useEffect, useState, useRef } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  FlatList,
  Platform,
} from 'react-native';
import { goToAuth, goHome } from './src/navigation/Navigation';
import { Navigation } from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen';

const {width, height} = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#ffffff"};

const slides = [
  {
    id: "1",
    image: require('./assets/images/onboarding_background.png'),
    title: "Best Digital Sulotions",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: "2",
    image: require('./assets/images/second_onboarding_background.png'),
    title: "Achieve your goals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: "3",
    image: require('./assets/images/third_onboarding_background.png'),
    title: "Increase your value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '75%', width, resizeMode: 'contain'}}
      />
      {/* <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View> */}
    </View>
  );
};

const App = (props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };


  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.30,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            // marginTop: 20,
          }}>
            
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: "#3813A0",
                  width: 20,
                  height: 8,
                  borderRadius: 10
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 40}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 100}}>
              <Text style={styles.title} >Title</Text>
              <Text style={styles.subtitle} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus id sodales sed id sed nulla. Posuere.</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={goToHome}
              >
                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 20}}>
                  GET STARTED
                </Text>
                <Image source={require('./assets/images/arrow_right.png')} />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={styles.title} >Title</Text>
              <Text style={styles.subtitle} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus id sodales sed id sed nulla. Posuere.</Text>
              <View style={{flexDirection: 'row'}} >

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles.btn,
                    {
                      borderColor: "#3813A0",
                      borderWidth: 1,
                      backgroundColor: 'transparent',
                    },
                  ]}
                  onPress={skip}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: "#3813A0",
                    }}>
                    BACK
                  </Text>
                </TouchableOpacity>
                <View style={{width: 15}} />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={goToNextSlide}
                  style={styles.btn}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: "white",
                    }}>
                    NEXT
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  };

  const goToHome = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Settings',
      }
    })
  };

  const splash = () => {
      setTimeout(() => {
        goToHome()
      }, 5000)
  };

  useEffect(() => {
    // goHome()
    // goToAuth()
    // splash()
    // SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView style={styles.container}  >
      {Platform.OS === "android"? (
        <StatusBar backgroundColor="whitesmoke"/>
        ): null
      }

      <ImageBackground 
        source={require('./assets/images/tribapay_onboarding_bg.png')}
        style={{ height: '100%' }}
      >
        <FlatList 
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          data={slides}
          contentContainerStyle={{ height: height * 0.65 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Slide item={item} /> }
        />
        <Footer />

      </ImageBackground>
    </SafeAreaView>
    
  );
};

App.options = {
  topBar: {
      // title: {
      //     text: 'Home'
      // },
      visible: false
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.primary,
    // paddingHorizontal: 24,
  },
  welcome: {
    fontSize: 28,
    color: COLORS.white
  },
  splash: {
    width: '100%',
    height: '100%',
  },

  subtitle: {
    // color: COLORS.white,
    fontSize: 13,
    // marginTop: 10,
    maxWidth: '70%',
    // textAlign: 'center',
    lineHeight: 23,
    color: "#525254",
  },
  title: {
    // color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    // marginTop: 20,
    // textAlign: 'center',
    color: "#220C60",
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: '#DADADC',
    marginHorizontal: 3,
    height: 8,
    borderRadius: 10
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#3813A0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
