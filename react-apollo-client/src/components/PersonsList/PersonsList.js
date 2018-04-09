// @flow
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import CircularProgress from 'material-ui/CircularProgress';
import fetchPersons  from '../../actions/actions_persons';
import  PropTypes from 'prop-types';
import Titlelist from './personslist.styled';
import { connect } from 'react-redux';
 
class PersonsList extends React.Component {

  state = {
  }

  componentWillReceiveProps(nextProps) {
    //console.log('componentWillReceiveProps nextProps ',nextProps );
    if (nextProps.persons) {
      //console.log('componentWillReceiveProps inside if ' );
      this.props.fetchPersons(nextProps.persons);
    }
     
  }

  render() {
     //console.log('PersonsList this.props ',this.props );
     var fetchPersonsArray;
     if (this.props.personsredux) {
         fetchPersonsArray = this.props.personsredux.map((person, key) => (
            <ListItem key={person.name} primaryText={person.name+', '+person.address+', '+person.email+', '+person.age}
                      rightIcon={<CommunicationChatBubble />}
            />
          ))
     }
    
    return (
     <List>
        <Titlelist >
          Records in AddressBook
        </Titlelist>
            {fetchPersonsArray}
    </List>
    );
  }
}

PersonsList.propTypes = {
  persons: PropTypes.array,
  fetchPersons: PropTypes.func
}

function mapStateToProps(state) {
  return {
    personsredux: state.persons 
  }
}

//export default PersonsList;
export default connect(mapStateToProps, { fetchPersons})(PersonsList);
