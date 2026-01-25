import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    textStart: {
        textAlign: 'left'
    },
    textCenter: {
        textAlign: 'center'
    },
    iframe: {
        border: '0',
        borderRadius: '8px',
        width: '100%',
        height: '450px'
    }
};

function GettingThere() {
    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col-md-12">
                    <h1>Getting There</h1>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-12">
                    <h2>Travel</h2>
                    <div style={styles.textStart}>
                        <p>There are plenty of parking spaces available at the venue for those wishing to travel by car.</p>

                        <p>
                            If you don’t fancy driving, New Cumnock train station takes 1 hour & 10 minutes from
                            Glasgow Central Station and is a 3 minute taxi drive away from Lochside.
                            If you choose to travel by train, please make sure to check your journey in advance.
                        </p>
                    </div>

                    <div className="mt-4" style={styles.textCenter}>
                        <iframe
                            style={styles.iframe}
                            title="Lochside House Hotel Map"
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2265.4542387114896!2d-4.145890923235736!3d55.40283081827402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4889d380e92701f5%3A0xc6c42171171887e0!2sLochside%20House%20Hotel%2C%20Lodges%20%26%20Spa!5e0!3m2!1sen!2suk!4v1700000000000">
                        </iframe>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-12">
                    <h2>Accommodation</h2>
                    <div style={styles.textStart}>
                        <p>
                            Accommodation at the venue is limited. Guests who have reserved a room from our
                            allocation at Lochside will be required to pay in full prior to the wedding.
                            You can check in from 2pm onwards and their check out time is at 11am.
                        </p>
                        <p>
                            There are a few other hotels nearby that are available including Lochside’s
                            sister hotel ‘Royal Hotel’ and ‘Dumfries Arms’ hotel, both in nearby Cumnock.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GettingThere;