import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import asyncComponent from '../hoc/AsyncComponents/AsyncComponent';
import InternalServer from '../components/InternalServer/InternalServer';
import OwnerDetails from '../containers/OwnerModule/OwnerDetails/OwnerDetails';
import CreateOwner from '../containers/CreateOwner/CreateOwner';

const AsyncOwners = asyncComponent(() => { return import('./OwnerModule/Owners/Owners')});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/owner-list" component={AsyncOwners} />
            <Route path="/ownerDetails/:id" component={OwnerDetails} />
            <Route path="/createOwner" component={CreateOwner} />
            <Route path="/500" component={InternalServer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
