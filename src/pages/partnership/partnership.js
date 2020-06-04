import React from "react"
import "./partnership.css"
import Sponsor from "../sponsor/sponsor"
import {Container, Row, Col} from 'reactstrap';
class Partnership extends React.Component{
    render(){
        return( /*<div id="partnershipp">
                <div class="container">              
                    <div>
                    <h1>Kerjasama kami bersama</h1>
                    </div>
                    <div class="boxsponsor">
                        <div class="center">
                            <Sponsor logo="https://1.bp.blogspot.com/-nzpO6iIvrNk/XTbFas9WKAI/AAAAAAAAAzs/W7JDZEhPBxUiVCgNNa2l8hFITP_oFOHSACLcBGAs/s1600/Logo%2BGojek%2B2019.png"/>
                            <Sponsor logo="https://tvlk-blog.imgix.net/2020/01/Traveloka_Primary_Logo.png?auto=format&fm=pjpg&ixlib=php-1.2.1&w=675&fit=scale&dpr=1"/>
                            <Sponsor logo="https://1.bp.blogspot.com/-nzpO6iIvrNk/XTbFas9WKAI/AAAAAAAAAzs/W7JDZEhPBxUiVCgNNa2l8hFITP_oFOHSACLcBGAs/s1600/Logo%2BGojek%2B2019.png"/>
                            <Sponsor logo="https://tvlk-blog.imgix.net/2020/01/Traveloka_Primary_Logo.png?auto=format&fm=pjpg&ixlib=php-1.2.1&w=675&fit=scale&dpr=1"/>
                        </div>
                    </div>
                </div>
            </div>*/
        <div id="partnership">
            <div class="boxsponsor">   
                <Container className="themed-container" fluid="sm">
                <div>
                    <h1>Kerjasama kami bersama</h1>
                </div>
                <Row className="partnership">
                    <Col>
                    <Sponsor logo="https://1.bp.blogspot.com/-nzpO6iIvrNk/XTbFas9WKAI/AAAAAAAAAzs/W7JDZEhPBxUiVCgNNa2l8hFITP_oFOHSACLcBGAs/s1600/Logo%2BGojek%2B2019.png"/>
                    </Col>
                    <Col>
                    <Sponsor logo="https://tvlk-blog.imgix.net/2020/01/Traveloka_Primary_Logo.png?auto=format&fm=pjpg&ixlib=php-1.2.1&w=675&fit=scale&dpr=1"/>
                    </Col>
                    <Col>
                    <Sponsor logo="https://1.bp.blogspot.com/-nzpO6iIvrNk/XTbFas9WKAI/AAAAAAAAAzs/W7JDZEhPBxUiVCgNNa2l8hFITP_oFOHSACLcBGAs/s1600/Logo%2BGojek%2B2019.png"/>
                    </Col>
                    <Col>
                    <Sponsor logo="https://tvlk-blog.imgix.net/2020/01/Traveloka_Primary_Logo.png?auto=format&fm=pjpg&ixlib=php-1.2.1&w=675&fit=scale&dpr=1"/>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
            
        )
    }
}

export default Partnership;