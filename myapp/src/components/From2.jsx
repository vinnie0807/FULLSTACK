import React, { Component } from 'react';
import './Froms.css';

export default class Form2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            skill: 'USA',
            password: '',
            gender: '',
            address: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', this.state);
        localStorage.setItem('formData', JSON.stringify(this.state));
    };

    changeCountry = (event) => {
        this.setState({
            country: event.target.value
        });
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type='password' name="password" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <input type='radio' name="gender" value="male" onChange={this.handleChange} /> Male
                        <input type='radio' name="gender" value="female" onChange={this.handleChange} /> Female
                    </div>
                    <div className="form-group">
                        <label>Country:</label>
                        <select value={this.state.skill} onChange={this.changeCountry}>
                            <option value='USA'>USA</option>
                            <option value='UK'>UK</option>
                            <option value='india'>India</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type='text' name="address" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>FILE</label>
                        <input type='file'></input>
                    </div>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}