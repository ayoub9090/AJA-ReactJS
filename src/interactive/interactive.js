import React, { Component } from 'react';
import axios from 'axios';

class interactive extends Component {
    state = {
        interactive: []
    }
    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URI + '/API/News/MostInteractive')
            .then(response => {
                this.setState({ interactive: response.data });
            });
    }
    render() {
        return (
            <div className="leftCard">
                <div className="leftCard__title"><span>الأكثر تفاعلاً</span></div>
                <div className="newsBlock">
                    {this.state.interactive.map((int, index) => {
                        return <a href={"/news/"+ int.EntityID +"/"+ int.ObjectID + "/"} key={index}>{int.Title}</a>
                    })}

                </div>
            </div>
        )
    }
}
export default interactive;