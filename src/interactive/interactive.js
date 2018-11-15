import React, { Component } from 'react';
import axios from 'axios';

class interactive extends Component {
    state = {
        interactive: []
    }
    componentDidMount() {
        axios.get('http://www.aljazeera.net/API/News/MostInteractive')
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
                        return <a href={int.FriendlyURL} key={index}>{int.Title}</a>
                    })}

                </div>
            </div>
        )
    }
}
export default interactive;