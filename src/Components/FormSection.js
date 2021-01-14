import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import axios from "axios";

class FormSection extends Component {
    state = {
        username: null,
        pageNumber: 1,
        entries: []
    }

    handleChange = e => {
        this.setState({
            partiNo: e.target.value
        });
    };


    handleSubmit = () => {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "https://www.test-cors.org",
                "access-control-allow-headers": "origin, x-requested-with, content-type, accept"
            }
        };
        const cors = 'https://cors-anywhere.herokuapp.com/'
        const url = `https://instela.com/api/v2/entries?t=${this.state.username}&page=${this.state.pageNumber}`;
        axios.get(cors+url, config)
            .then(response => response.data)
            .then(entries => {
                this.setState({ entries: entries });
                console.log(entries)
            });
    }

    render() {

        return (
            <div>
            <Form onSubmit={this.handleSubmit} size="large">
                <Form.Group widths='equal'>
                    <Form.Input name="name" onChange={this.handleChange} fluid placeholder='yazar adı' />
                    <Form.Button color="teal" size="large">instelada ara</Form.Button>
                </Form.Group>
            </Form>

                {this.state.result &&
                this.state.entries.map((record, index) => {
                    return (
                        <h1>{record.entry}</h1>
                    );
                })}
            </div>
        )
    }
}

export default FormSection
