import React from 'react';
import ReactDom from 'react-dom';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

class ContentFeed extends React.Component {
    constructor(){
        super();
        this.state = {
            'items':[]
        }
    }
    componentDidMount() {
        this.getItems();
    }

    getItems() {

        fetch('http://127.0.0.1:8000/api/item/')
            .then(results => results.json())
            .then( results  => this.setState({'items': results}));
    }

    render() {
        return (
            <ul>
                {this.state.items.map(function(item, index) {
                    return (
                    <div key={index}>
                        <h1>{ item.title }</h1>
                        <p>{item.description}</p>
                    </div>)
                }
                )}
            </ul>
        );
    }
}

ReactDom.render(
    <ContentFeed />,
    document.getElementById('root')
);
