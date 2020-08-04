import React from 'react';

class ConnectToApi extends React.Component {
    
    constructor() {
        super();
        this.state = {
            names: [],
        };
    }

    componentDidMount() {
        fetch('https://randomuser.me/api')
         .then(results => {
             return results.json();
         }).then(data => {
            console.log(data.results); 
            let names = data.results.map((n) => {
                 return(
                     <div key={n.results}>
                       {n.name.title} {n.name.first} {n.name.last}
                     </div>
                 )
             })
             this.setState({names: names});
             console.log("state, this.state.names");
         })
    }

    render() {
        return (
            <div className="container1">
                {this.state.names}
            </div>
        )
    }


}

export default ConnectToApi;