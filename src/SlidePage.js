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

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  photo: {
  	width:200,
  	height:200
  }
})

var teamVoyager = [
{"Category":"Celebrity", "UserName": "Brian Luc", "UserId":"005B0000000EO4DIAW"},
{"Category":"ChatterBox", "UserName": "Brian Luc", "UserId":"005B0000000EO4DIAW"}, 
{"Category":"NeedsTherapy", "UserName": "Rob Storrs", "UserId":"005B0000000GySKIA0"},
{"Category":"Works For Home", "UserName": "Terry Martin", "UserId":"005B0000000Ec00IAC"}];

class SwiperPage extends Component{
  constructor(props) {
        super(props);
        this.state = {
            teamName: this.props.username
        };
    }


  getRandomStyle() {
      var backgroundColorArray = ["#92BBD9","#EBD4C1","#EBC1D1","#C4ECCC","#E2C1EB","#97CAE5","#9DD6EB","#364551","#92D9AF","#F1E1D5","#5DBD3D"];
      var colorIndex = Math.floor((Math.random()*backgroundColorArray.length));
    return backgroundColorArray[colorIndex];
  }

	render() {
      var rows = [];
      for (var i=0; i < teamVoyager.length; i++) {
        var photoUrl = "https://raw.githubusercontent.com/adamhmc/Chatter/master/src/photo/"+teamVoyager[i]["UserId"]+".jpg";
        var bgColor = this.getRandomStyle();
        rows.push(
          <View style={[ styles.slide1, {backgroundColor:bgColor}]} key={i}>
          <Text>{teamVoyager[i]["Category"]}</Text>
          <Image source={{uri: photoUrl}} style={styles.photo}/>
          <Text>{teamVoyager[i]["UserName"]}</Text>
          </View>
        );
      }    
      return (
    	<View>
      <Swiper style={styles.wrapper} showsButtons={false}>
        {rows}
      </Swiper>
      </View>
    )
  }

}

module.exports = SwiperPage;