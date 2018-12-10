import React, {Component} from 'react'
import axios from 'axios';

class SurfReport extends Component {
    constructor() {
        super()

        this.state = {
            surfData: []

        }
    }

    componentDidMount = () => {
        axios.get('http://api.spitcast.com/api/spot/forecast/217/').then(response => {
            console.log('surf', response);
            var items = response.data
            var ten = response.data
            var items = ten.splice(0,1);
            this.setState({
                surfData: items
            });
        });
    }

    render() {
        console.log(this.state.surfData)
        return (
            <div id='surf-report'>
                <div className='page-container'>
                    <h1 className="page-title">Surf Forecast</h1>
                </div>
                <div className="surf-report-container">
                    <div className="surf-report-info">
                        <img className='report-img'src='http://www.discoverlamirada.com/wp-content/uploads/2017/09/surf_thewedge1.jpg' alt="theWedge"/>
                        {
                            this.state.surfData.map(update => {
                                return (
                                    <div>
                                        <div>{update.date}</div>
                                        <div>{update.day}</div>
                                        <div>{update.gmt}</div>
                                        <div>{update.hour}</div>
                                        <div>{update.latitude}</div>
                                        <div>{update.live}</div>
                                        <div>{update.longitude}</div>
                                        <div>{update.shape}</div>
                                        {/* <div>{update.shape_detail}</div> */}
                                        <div>{update.shape_full}</div>
                                        <div>{update.size}</div>
                                        <div>{update.size_ft}</div>
                                        <div>{update.spot_id}</div>
                                        <div>{update.spot_name}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SurfReport