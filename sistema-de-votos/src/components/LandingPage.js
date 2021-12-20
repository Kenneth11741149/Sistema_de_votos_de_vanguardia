
import React, { Component, useState, useEffect } from 'react'
import TopBar from './TopBar'
import { Carousel, Table, Alert, Button } from 'react-bootstrap'
import VotingTable from './VotingTable'
import functions from './function.js';


export default function LandingPage() {

    const [VoteList, setVoteList] = useState([])
    const [revisarSiVoto, setrevisarSiVoto] = useState([])



    useEffect(() => {
        const dat = this;

        functions.getAllVotesList().then(function (result) {
            var voteList = result;

            setVoteList(voteList)

        })


    }, [])

    const Votar = async (Vote, selection, index) => {

        const dat = this;

        var value = 0
        if (selection == 'A') {
            value = Vote.A
        } else if (selection == 'B') {
            value = Vote.B
        } else {
            value = Vote.C
        }

        revisarSiVoto.push(index)

        functions.updateVote(Vote.id, selection, value).then(function (result) {
            console.log("Voto EXITOSO")

        })


    }



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

            <VotingTable VoteList={VoteList} Votar={Votar} revisarSiVoto={revisarSiVoto} />

        </div>
    )

}
