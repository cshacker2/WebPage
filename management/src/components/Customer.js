import React from 'react';
class Customer extends React.Component {
    render() {
        return (
        <div>
            <CustomerProfile id={this.props.id} img={this.props.img}></CustomerProfile>
            <h2> {this.props.name} </h2>
            <p> {this.props.birth} </p>
            <p> {this.props.gender} </p>
            <p> {this.props.job} </p>
        </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
        <div>
            <img src={this.props.img} alt="profile"/>
            <h2>{this.props.id}</h2>
        </div>
        )
    }
}

export default Customer;