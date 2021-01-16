import React, {Component} from 'react';
import {Container, Header} from "semantic-ui-react";
import FormSection from "../Components/FormSection";

class MainSection extends Component {
    render() {
        return (
            <div>
                <Container style={{ marginTop: "5em" }}>
                    <Header as='h1'>
                        instela giri arama motoru
                    </Header>
                    <FormSection/>
                </Container>

            </div>
        );
    }
}

export default MainSection;
