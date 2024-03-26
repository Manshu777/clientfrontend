import React from 'react';
import Slider from 'react-slick';

const ClientReviews = ({ reviews, sliderSettings }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="star filled">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="star">&#9733;</span>);
            }
        }
        return stars;
    };

    return (
        <div className="service-main">
            <div className="container">
                <h3 className="title">Client Reviews</h3>
                <div className="title-card">
                    <Slider {...sliderSettings}>
                        {reviews.map((review, index) => (
                            <div key={index} className="review-card">
                                <div className="review-header">
                                    <h3>{review.author}</h3>
                                    <div className="review-stars">{renderStars(review.rating)}</div>
                                </div>
                                <p className="review-content">{review.content}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ClientReviews;
