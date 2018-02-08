
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <div id="header"> </div>
                <div className="container">
                    <div className="column">
                        <InboxPane />
                    </div>
                </div>
            </div>
        )
    }

});

var InboxPane = React.createClass({
    render: function() {
        return (
            <div id="inbox-pane">
                <h1>Inbox</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Chat Received</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <InboxItem />
                    </tbody>
                </table>
            </div>
        )
    }
});


var InboxItem = React.createClass({
   render: function () {
       return (
           <tr>
               <td>6pm</td>
               <td>Maxi would like a Magarita</td>
               <td>orderded</td>
           </tr>
       )
   }
});

ReactDOM.render(<App />, document.getElementById('main'));