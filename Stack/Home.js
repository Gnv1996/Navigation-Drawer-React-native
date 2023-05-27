import {View,Text,Button,StyleSheet} from 'react-native';

function Home({ navigation }) {
    const Styles=StyleSheet.create({
        title:{
            fontSize:32,
            margin:100,

        }

    })
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={Styles.title}>Welcome in Home screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
  }
  export default Home;