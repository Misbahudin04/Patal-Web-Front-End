import React from "react";
import "./event.css";
import Sponsor from "../article/article";
import Article from "../article/article";
import {Container, Row, Col} from 'reactstrap';
import article1 from "../../images/artikel1.jpeg"
import article2 from "../../images/artikel2.jpeg"
import article3 from "../../images/artikel3.jpeg"

class Events extends React.Component{
    render(){
        return <div id="event">
                <div className="acara">
                <Container className="themed-container title " fluid>
                    <h2>Acara diwaktu dekat</h2>
                    <h1>Kegiatan Patal</h1>
                    <Row className="cp">
                        <Col sm="4" >
                            <Article img={article1} title="ODP Bareng MYO 2.0 : “Online Dapat Pengetahuan” Berbagi Tips & Pengalaman..."/>
                        </Col>
                        <Col lg="4">
                            <Article img={article2} title="Kupas Tuntas Infrastruktur IT coronapalembang.com "/>
                        </Col>
                        <Col lg="4">
                           <Article img={article3} title="Webinar AWS Code Build & Code Deploy"/>
                        </Col>
                    </Row>
                </Container>
                </div>
                </div>
    }
}

export default Events;