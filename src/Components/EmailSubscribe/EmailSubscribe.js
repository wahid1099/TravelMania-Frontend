import React from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const EmailSubscribe = () => {
    return (
        <div className="pt-4 pb-4">

            <h2>Get better work</h2>
            <h6 className="pt-2">See why million of people accross 195<br/>
                uses Desh dot</h6>
            <InputGroup className="mb-3 w-25 mx-auto pt-4">
                <FormControl
                    placeholder="Your Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                    Try Free
                </Button>
            </InputGroup>
        </div>
    );
};

export default EmailSubscribe;