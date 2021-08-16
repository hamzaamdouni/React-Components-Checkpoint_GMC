import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import'./Carousels.css';
const Carousels = () => {
    return (
            <Carousel >
                <Carousel.Item className="CarI">
                    <img
                    className="d-block w-100"
                    src="/IMG1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <div className="d-grid gap-2">
                        <Button variant="dark" size="lg">
                        INFORMATIQUE & MULTIMÉDIA
                        </Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            
                <Carousel.Item className="CarI">
                    <img
                    className="d-block w-100"
                    src="/IMG2.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption >
                    <div className="d-grid gap-2">
                        <Button variant="dark" size="lg">
                            GESTION & SERVICES DOUANIERS
                        </Button>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="CarI">
                    <img
                    className="d-block w-100"
                    src="/IMG3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="d-grid gap-2">
                        <Button variant="dark" size="lg">
                        SANTÉ & AGROALIMENTAIRE
                        </Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Carousels
