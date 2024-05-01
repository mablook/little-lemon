import React from 'react';
import { Container } from '../../templates/Container/Container';
import Header from '../../organisms/Header/Header';
import CallToAction from '../../organisms/CallToAction/CallToAction';
import Specials from '../../organisms/Specials/Specials';
import Testimonials from '../../organisms/Testimonials/Testimonials';
import LocationSection from '../../organisms/Loacation/LocationSection';
import Footer from '../../organisms/Footer/Footer';

const Home = () => {
    return (
        <Container>
            <Header />
            <CallToAction />
            <Specials />
            <Testimonials />
            <LocationSection />
            <Footer />
        </Container>
    );
}

export default Home;