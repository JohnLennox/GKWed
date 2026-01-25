import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactDetails() {
    return (
        <div className="sectionContent text-start">
            <div className="row mb-4">
                <div className="col-md-12">
                    <h1>Contact Details</h1>
                </div>
            </div>

            <p>If you have any questions please get in touch!</p>

            <div className="row">
                <div className="col-lg-6 mb-4 order-lg-1 order-2">
                    <div className="d-flex">
                        <div className="col-4 text-start">
                            <p>Tel:</p>
                        </div>
                        <div className="col-8 text-start">
                            <p>07531 568989</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-4 order-lg-1 order-2">
                    <div className="d-flex">
                        <div className="col-4 text-start">
                            <p>Address:</p>
                        </div>
                        <div className="col-8 text-start">
                            <p>2/1 <br/>12 Star Mews<br/> Kirkintilloch <br/> Glasgow <br/> G66 3NZ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;
