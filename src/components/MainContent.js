import HomeSection from "./MainContentComponents/HomeSection";
import OurStorySection from "./MainContentComponents/OurStorySection";
import FeatureSection from "./MainContentComponents/FeatureSection";
import ServicesSection from "./MainContentComponents/ServicesSection";
import BookingSection from "./MainContentComponents/BookingSection";
import PriceSection from "./MainContentComponents/PriceSection";
import ContactSection from "./MainContentComponents/ContactSection";
import Footer from "./MainContentComponents/Footer";

export default function MainContent(){
    return(
        <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
            <HomeSection/>
            <OurStorySection/>
            <FeatureSection/>
            <ServicesSection/>
            <BookingSection/>
            <PriceSection/>
            <ContactSection/>
            <Footer/>
        </div>
    )
} 