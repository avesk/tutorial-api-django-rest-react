import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {

    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };

    state = {
        name: "",
        email: "",
        message: ""
    };

    handleChange = e => {
        setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const {name, email, message} = this.state;
        const lead = {name, email, message};
        const conf = {
            method: "post",
            body: JSON.stringify(lead),
            headers: new Headers({"Content-Type": "application/json"})
        };

        fetch(this.props.endpoint, conf).then(response => {
            console.log(response);
        })
    }

}
