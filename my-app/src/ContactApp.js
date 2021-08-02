import React from 'react';

import ContactCard from './components/ContactCard'

function ContactApp() {
    return (
        <div className="contacts">
            <ContactCard 
                contact={{
                    name:"Cat 1",
                    imgUrl:"http://placekitten.com/300/200",
                    phone:"123456789",
                    email:"cat1@tests.com"
                }}
            />
            <ContactCard 
                contact={{
                    name:"Cat 2",
                    imgUrl:"http://placekitten.com/400/200",
                    phone:"123456789",
                    email:"cat2@tests.com"
                }}
            />
            <ContactCard
                contact={{
                    name:"Cat 3",
                    imgUrl:"http://placekitten.com/400/300",
                    phone:"123456789",
                    email:"cat3@tests.com"
                }}
            />
            <ContactCard
                contact={{
                    name:"Cat4",
                    imgUrl:"http://placekitten.com/200/400",
                    phone:"123456789",
                    email:"cat4@tests.com"
                }}
            />
        </div>
    )
}

export default ContactApp