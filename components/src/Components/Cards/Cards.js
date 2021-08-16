import "./Cards.css"
import React from 'react'
import { Button, Card } from 'react-bootstrap';

const training = [
    {
        pic : <img src="/PIC1.jpg" alt="pic1"/>,
        titre : "INFORMATIQUE & MULTIMÉDIA",
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
    },
    {
        pic : <img src="/PIC2.jpg" alt="pic2"/>,
        titre : "SANTÉ & AGROALIMENTAIRE",
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
    },
    {
        pic : <img src="/PIC3.jpg" alt="pic3"/>,
        titre : "GESTION & SERVICES DOUANIERS",
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
    },
]
const Cards = () => {
    return (
        <div className ="cardss">
        {training.map((train) =>(
        
        <Card style={{ width: '18rem' }} >
            {train.pic}
            <Card.Body>
                <Card.Title>{train.titre}</Card.Title>
                <Card.Text>{train.description}</Card.Text>
                <div className="butt">
                    <Button variant="primary">Plus details</Button>
                    <Button variant="primary">Inscription</Button>
                </div>
                
            </Card.Body>
        </Card>
        
        ))}
        </div>
        );
    }
    
    export default Cards