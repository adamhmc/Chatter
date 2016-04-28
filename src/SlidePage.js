var Swiper = require('react-native-swiper')

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Component,
} = React;

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  photo: {
  	width:60,
  	height:60
  }
})

class SwiperPage extends Component{
  constructor(props) {
        super(props);
        this.state = {
            teamName: this.props.username
        };
    }

	render() {
    console.log(this.state.teamName);
    return (
    	<View>
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
                      <Image
        style={styles.photo}
        source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      </View>
    )
  }

}

module.exports = SwiperPage;