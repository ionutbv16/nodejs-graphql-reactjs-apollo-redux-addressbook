// @flow
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import CircularProgress from 'material-ui/CircularProgress';
import { fetchPersons } from '../../actions/actions_persons';
import  PropTypes from 'prop-types';
import Titlelist from './personslist.styled';
 
class PersonsList extends React.Component {

  render() {
     //console.log('PersonsList this.props ',this.props );
     var fetchPersonsArray;
     if (this.props.persons) {
         fetchPersonsArray = this.props.persons.map((person, key) => (
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
  persons: PropTypes.array
}

function mapStateToProps(state) {
  return {
    persons: state.persons 
  }
}

export default PersonsList;