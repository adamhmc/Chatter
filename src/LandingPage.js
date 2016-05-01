const React = require('react-native');
const {
  ScrollView,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Component,
} = React;

import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-menu';
var SlidePage = require("./SlidePage");


class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = { dropdownSelection: 'CHOOSE SOMETHING....' }; 
  }

  onSelectFunction(value) {
    this.setState({ dropdownSelection: value.value });
    this.props.navigator.push({
            title: this.state.dropdownSelection,
            component: SlidePage,
            passProps: {teamName: this.state.dropdownSelection},
        });
  }

  render() {
    return (
      <MenuContext style={{ flex: 1, flexDirection:'row', alignItems:'center', justifyContent:'center' }} ref="MenuContext">
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Pick your scrum team
          </Text>
          <Menu style={styles.dropdown} onSelect={(value) => this.onSelectFunction({value})}>
            <MenuTrigger>
              <Text>{this.state.dropdownSelection}</Text>
            </MenuTrigger>
            <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                         renderOptionsContainer={(options) => <ScrollView>{options}</ScrollView>}>
              <MenuOption value="Dannysaurs">
                <Text>Dannysaurs</Text>
              </MenuOption>
              <MenuOption value="Voyager">
                <Text>Voyager</Text>
              </MenuOption>
              <MenuOption value="Prospector">
                <Text>Prospector</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </MenuContext>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
  },
  contentText: {
    fontSize: 18
  },
  dropdown: {
    width: 300,
    borderColor: '#999',
    borderWidth: 1,
    padding: 5
  },
  dropdownOptions: {
    marginTop: 30,
    borderColor: '#ccc',
    borderWidth: 2,
    width: 300,
    height: 200
  }
});

module.exports = LandingPage;