import React, { Component } from 'react'
import TopBar from './TopBar'
import { Carousel, Table, Alert, Button } from 'react-bootstrap'
import VotingTable from './VotingTable'


export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <TopBar />

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="500px"
                            src="https://cdn.wallpapersafari.com/97/4/0TrgQ6.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="500px"
                            src="https://cdn.wallpapersafari.com/97/4/0TrgQ6.jpg"
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="500px"
                            src="https://cdn.wallpapersafari.com/97/4/0TrgQ6.jpg"
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
                <VotingTable/>

            </div>
        )
    }
}
