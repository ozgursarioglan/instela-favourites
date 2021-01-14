import React from 'react'
import {
    Container,
    Image,
    List,
    Segment,
} from 'semantic-ui-react'

const FooterSection = () => (
    <div>




        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
                <Image centered width="150px" src='https://instela-static.info/s/images/instela-desktop@2x.png' />

                <List horizontal inverted divided link size='small'>
                    <List.Item as='a' href='#'>
                        ben neredeyim
                    </List.Item>
                    <List.Item as='a' href='#'>
                        kim yaptı
                    </List.Item>
                    <List.Item as='a' href='#'>
                        nasil kullanacagim
                    </List.Item>
                    <List.Item as='a' href='#'>
                        derdini s*keyim
                    </List.Item>
                </List>
                <br/>
                Kar amacı güdülmeden el degmeden kodlanmıstır.
            </Container>
        </Segment>
    </div>
)

export default FooterSection
