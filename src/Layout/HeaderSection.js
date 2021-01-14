import React, { Component } from 'react'
import {Button, Container, Dropdown, Menu, Image} from 'semantic-ui-react'

export default class HeaderSection extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu color="teal" size='large' fixed="top" stackable borderless inverted>
                <Container>
                    <Menu.Item>
                        instela yazar arama motoru
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item disable>English</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}
