import React, { Component } from 'react'
import { Form, Grid, Label, Header, Segment, Icon, List, Image } from 'semantic-ui-react'
import axios from "axios";
import Moment from 'react-moment'

class FormSection extends Component {
    state = {
        username: "",
        pageNumber: 1,
        entries: [],
        entryId: "",
        favourites: []
    }

    handleChange = e => {
        this.setState({
            entryId: e.target.value
        });
    };

    handleSubmit = () => {
       const config = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        }


        const cors = 'https://thingproxy.freeboard.io/fetch/'

        const url_entry = `https://tr.instela.com/api/v2/entries/${this.state.entryId}`;
        axios.get(cors+url_entry, config)
            .then(response => response.data.entries)
            .then(entries => {
                this.setState({ entries: entries });
                console.log(entries)
            });

        const url_fav = `https://tr.instela.com/api/v2/entries/${this.state.entryId}/favourites`;
        axios.get(cors+url_fav, config)
            .then(response => response.data.favourites)
            .then(favourites => {
                this.setState({ favourites: favourites });
                console.log(favourites)
            });


    }

    render() {

        return (
            <div>
            <Form onSubmit={this.handleSubmit} size="large">
                <Form.Group widths='equal'>
                    <Form.Input required name="name" onChange={this.handleChange}  fluid placeholder='yazar adı' />
                    <Form.Button color="teal" size="large">instelada ara</Form.Button>
                </Form.Group>
            </Form>

                {this.state.entries &&
                this.state.entries.map((record, index) => {
                    return (
                        <div>
                            <Header as='h3' attached='top'>
                                {record.title.title}
                            </Header>
                            <Segment attached>
                               <p>{record.entry}</p>
                            </Segment>
                            <Segment textAlign='center' attached>
                            <Grid>
                                <Grid.Row columns={6}>
                                    <Grid.Column>
                                        <Label as='a' color='teal' image>
                                            <Image src={ record.user.avatar} />
                                            {record.user.username}
                                        </Label>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Label as='a'>
                                            <Icon name='calendar alternate' />
                                            <Moment format="YYYY/MM/DD hh:mm">{record.created_at}</Moment>
                                        </Label>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Label as='a'>
                                            <Icon name='arrow up' />
                                            {record.vote_positive}
                                        </Label>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Label as='a'>
                                            <Icon name='arrow down' />
                                            {record.vote_negative}
                                        </Label>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Label as='a'>
                                            <Icon name='star' />
                                            {record.favourite}
                                        </Label>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Label as='a'>
                                            <Icon name='comment outline' />
                                            {record.comment}
                                        </Label>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            </Segment>


                        </div>
                    );
                })}
                <br/>

                <Segment attached>
                <List divided horizontal size="small">
                    {this.state.favourites &&
                    this.state.favourites.map((record, index) => {
                        return (
                    <List.Item>
                        <Image avatar src={record.user.avatar} />
                        <List.Content>
                            <List.Header as="a">{record.user.username}</List.Header>
                        </List.Content>
                    </List.Item>
                        );
                    })}
                </List>
                </Segment>
            </div>
        )
    }
}

export default FormSection
