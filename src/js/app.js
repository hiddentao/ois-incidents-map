var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Route = Router.Route;

var Layout = require('./ui/layout');
var MainView = require('./ui/pages/mainView');
var NewEntry = require('./ui/pages/newEntry');

var App = React.createClass({
  render: function() {
    return (
      <Layout {...this.props}>
        <RouteHandler {...this.props}/>
      </Layout>
    );
  }
});


var routes = (
  <Route handler={App}>
    <DefaultRoute name="mainView" handler={MainView} />
    <Route name="newEntry" handler={NewEntry} />
    <Route name="calendar" handler={NewEntry} />
    <Route name="settings" handler={NewEntry} />
  </Route>
);


Router.run(routes, Router.HashLocation, function(Handler, state) {
  React.render(
    <Handler routes={state.routes} params={state.params} query={state.query} />, 
    $('main').get(0)
  );
});


