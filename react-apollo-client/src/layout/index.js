import { Component } from 'react';
import styled from 'styled-components';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/action/home';
import PersonsList from 'components/PersonsList';
import Sidebar from 'components/Sidebar';
import './index.css';

const Container = styled.div`
  padding:0px;
`;

export default class Layout extends Component {
  state = {
    drawer: {
      opened: false,
    }
  };

  toggleDrawer(opened) {
    this.setState({
      drawer: {
        opened: opened === undefined ? !this.state.drawer.opened : opened,
      }
    });
  }

  render() {

    return (
      <ThemeProvider>
        <Container className="layout">
          <AppBar
            title="Address Book"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={() => this.toggleDrawer()}
          />

          <Drawer
            open={this.state.drawer.opened}
            docked={false}
            width="80%"
            onRequestChange={(open) => this.toggleDrawer(open)}
          >
            <Sidebar />
          </Drawer>

          <PersonsList />
        </Container>
      </ThemeProvider>
    );
  }
}