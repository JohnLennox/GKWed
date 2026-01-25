import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../resources/images/venue.jpg'; // Note: You may want to update this filename later!

const styles = {
    sectionTitle: {
        fontFamily: 'Dancing Script, cursive',
        position: 'relative',
        paddingBottom: '10px'
    },
    infoText: {
        fontFamily: 'Playfair Display, serif',
        paddingTop: '10px',
    },
    noWrapText: {
        whiteSpace: 'nowrap',
        paddingRight: '10px'
    },
    verticalCenter: {
        display: 'flex',
        alignItems: 'center'
    },
    rsvpText: {
        fontFamily: 'Playfair Display, serif',
        paddingTop: '20px',
        textAlign: 'left'
    }
};

const weddingInfo = [
    {label: 'Date:', value: '9th July 2026'},
    {label: 'Ceremony:', value: '13:30'},
    {label: 'Reception:', value: '19:30'},
    {label: 'Location:', value: "Lochside House Hotel, Lodges and Spa,<br>New Cumnock,<br>KA18 4PN"},
];

const WeddingDetails = () => (
    <div className="container mt-5">
        <div style={{paddingBottom: '20px'}}>
            <h1>Wedding Details</h1>
        </div>

        <div className="row">
            <div className="col-lg-6 mb-4 order-lg-1 order-2" style={styles.verticalCenter}>
                <div style={styles.infoText}>
                    {weddingInfo.map((info, index) => (
                        <div className="d-flex" key={index}>
                            <div className="col-4 text-start">
                                <p style={styles.noWrapText}><strong>{info.label}</strong></p>
                            </div>
                            <div className="col-8 text-start">
                                <p dangerouslySetInnerHTML={{__html: info.value}} />
                            </div>
                        </div>
                    ))}

                    <div className="text-start" style={styles.rsvpText}>
                        <p>Please note that the full day is an adults-only event.</p>
                    </div>

                    <div className="text-start" style={styles.rsvpText}>
                        <strong>RSVP by 1<sup style={{fontSize: '10px'}}>st</sup> April 2026</strong>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1 mb-4">
                <img
                    src={image1}
                    alt="Lochside House Hotel"
                    className="img-fluid rounded shadow-sm"
                />
            </div>
        </div>
    </div>
);

export default WeddingDetails;