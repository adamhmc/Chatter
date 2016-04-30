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
    fontSize: 100,
    fontWeight: 'bold',
  },
  photo: {
    width:300,
    height:300
  }
})

var teamVoyager = [
{"Category":"Celebrity", "UserName": "Brian Luc", "UserId":"005B0000000EO4DIAW"},
{"Category":"ChatterBox", "UserName": "Priya Sethuraman", "UserId":"005B0000000F6lAIAS"}, 
{"Category":"AOGSuperStar", "UserName": "Rob Storrs", "UserId":"005B0000000GySKIA0"},
{"Category":"GoGreenUser", "UserName": "Terry Martin", "UserId":"005B0000000Ec00IAC"},
{"Category":"SuperHero", "UserName": "Aleksey Kolesnik", "UserId":"005B0000000FEG7IAO"},
{"Category":"Creative", "UserName": "None", "UserId":"none"}];

var teamDannysaurs = [
{"Category":"Celebrity", "UserName": "Danny Dvinov", "UserId":"005T0000000nP9DIAU"},
{"Category":"ChatterBox", "UserName": "Victoria Lyon", "UserId":"005B0000000EsoRIAS"}, 
{"Category":"AOGSuperStar", "UserName": "Clifford Ker", "UserId":"005B0000000ELeEIAW"},
{"Category":"GoGreenUser", "UserName": "Sarvani Jandhyala", "UserId":"005B0000000Fs0KIAS"},
{"Category":"SuperHero", "UserName": "Parth Vaishnav", "UserId":"005B0000000gaFHIAY"},
{"Category":"Creative", "UserName": "Tripti Sheth", "UserId":"005T0000000nSPP"}];

var teamProspector = [
{"Category":"Celebrity", "UserName": "Rob Storrs", "UserId":"005B0000000GySKIA0"},
{"Category":"ChatterBox", "UserName": "Brian Luc", "UserId":"005B0000000EO4DIAW"},
{"Category":"AOGSuperStar", "UserName": "Margaret Cyrzan", "UserId":"005B0000000YvXCIA0"},
{"Category":"GoGreenUser", "UserName": "Pallavi Savla", "UserId":"005B0000000EfqwIAC"},
{"Category":"SuperHero", "UserName": "Amrit Singh", "UserId":"005B0000000h1qZIAQ"},
{"Category":"Creative", "UserName": "Amrit Singh", "UserId":"005B0000000h1qZIAQ"}];

class SwiperPage extends Component{
  constructor(props) {
        super(props);
        this.state = {
            teamName: this.props.teamName
        };
    }


    getTeamData() {
      console.log(this.state.teamName);
      switch(this.state.teamName){
        case "Dannysaurs":
          return teamDannysaurs;
        case "Prospector":
          return teamProspector;
        case "Voyager":
          return teamVoyager;
      }
    }

  getRandomStyle() {
      var backgroundColorArray = ["#92BBD9","#EBD4C1","#EBC1D1","#C4ECCC","#E2C1EB","#97CAE5","#9DD6EB","#364551","#92D9AF","#F1E1D5","#5DBD3D"];
      var colorIndex = Math.floor((Math.random()*backgroundColorArray.length));
    return backgroundColorArray[colorIndex];
  }

  render() {
          console.log(this.state.teamName);

      var rows = [];
      var teamData = this.getTeamData();
      console.log(teamData);
      for (var i=0; i < teamData.length; i++) {
        var photoUrl = "https://raw.githubusercontent.com/adamhmc/Chatter/master/src/photo/"+teamData[i]["UserId"]+".jpeg";
        var bgColor = this.getRandomStyle();
        rows.push(
          <View style={[ styles.slide1, {backgroundColor:bgColor}]} key={i}>
          <Text>{teamData[i]["Category"]}</Text>
          <Image source={{uri: photoUrl}} style={styles.photo}/>
          <Text>{teamData[i]["UserName"]}</Text>
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