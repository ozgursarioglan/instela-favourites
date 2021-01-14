import React, { Component } from 'react'
import {Container, Dropdown, Menu} from 'semantic-ui-react'

export default class HeaderSection extends Component {
    state = { activeItem: 'home' }



    render() {
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
