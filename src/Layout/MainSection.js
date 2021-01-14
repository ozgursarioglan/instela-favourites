import React, {Component} from 'react';
import {Container, Form, Header, Divider, Button, Input} from "semantic-ui-react";
import FormSection from "../Components/FormSection";

class MainSection extends Component {
    render() {
        return (
            <div>
                <Container style={{ marginTop: "5em" }}>
                    <Header as='h1'>
                        instela yazar arama motoru
                    </Header>
                    <FormSection/>
                </Container>

            </div>
        );
    }
}

export default MainSection;
