import React, { Component } from 'react';

 
class LatLong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitudeBox: null,
            longitudeBox: null
        };
        
        this.publish = this.publish.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
      
    handleChange({ target }) {
        this.setState({
          [target.name]: target.value
        });
    }
    
    publish = async (e) =>{ 
        e.preventDefault();
        //console.log( this.state.latitudeBox, this.state.longitudeBox );
        await this.props.publish(this.state.latitudeBox, this.state.longitudeBox);
    }

    render() {
    return (
      <div>
        <input 
        type="text" 
        name="latitudeBox" 
        placeholder="Enter latitude..." 
        value={ this.state.latitudeBox }
        onChange={ this.handleChange } 
        />°N{'  '}
      
        <input 
        type="text" 
        name="longitudeBox" 
        placeholder="Enter longitude..."
        value={ this.state.longitudeBox } 
        onChange={ this.handleChange } 
        />°W{'  '}
      
        <button value="Send" onClick={ this.publish }>Update Weather</button>
      </div>
      
    );
  }
}

export default LatLong;