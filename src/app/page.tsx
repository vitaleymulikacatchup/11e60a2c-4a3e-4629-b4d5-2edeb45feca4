"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ChefHat, Instagram, Facebook, Twitter, MessageSquare, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="wavyBackground"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Lumière"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Exquisite Fine Dining Experience"
          description="Indulge in culinary artistry crafted by our award-winning chef, featuring the finest ingredients and impeccable service in an elegant atmosphere."
          tag="Michelin Recommended"
          tagIcon={Star}
          buttons={[
            {
              text: "View Menu",
              href: "menu"
            },
            {
              text: "Reserve Table",
              href: "contact"
            }
          ]}
          imageSrc="https://pixabay.com/get/g2ff6a0e9799193984621f0f9c310dcf9313734221094c6f07d738e76027ac683eeb832615be93f243183b5e9b7d24d9c8bfd073c106162e601225bc08a525d03_1280.jpg"
          imageAlt="Elegant fine dining restaurant interior"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Lumière, we believe dining is an art form. For over two decades, our passionate team has created unforgettable culinary experiences that blend traditional techniques with modern innovation, all served in an atmosphere of refined elegance."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Signature Creations"
          description="Discover our chef's masterpieces, each dish carefully crafted with premium ingredients and artistic presentation"
          tag="Menu Highlights"
          tagIcon={ChefHat}
          features={[
            {
              title: "Pan-Seared Halibut",
              description: "Fresh Atlantic halibut with seasonal vegetables, served with our signature saffron butter sauce",
              imageSrc: "https://pixabay.com/get/g38f2b2256abae38d5a61d48c03d08910c0463725ae887c9d64cad64bfc64630a011d654f4c4a31c55415b63048a381129fed288ca655071eb1cc53675f252c6e_1280.jpg",
              imageAlt: "Pan-seared halibut dish"
            },
            {
              title: "Wagyu Beef Tenderloin",
              description: "Premium A5 Wagyu beef, perfectly prepared with truffle reduction and roasted root vegetables",
              imageSrc: "https://pixabay.com/get/g31f98d4e8448f32095829054ac851379faadc6f277ceff1b1e23fd2e2c4d456395d29c2d074e9ac4e3ac92ffd4cc5d8621a5ac3964ed1503b7f1d66a4bf8ef9b_1280.jpg",
              imageAlt: "Wagyu beef tenderloin"
            },
            {
              title: "Lobster Bisque Amuse-Bouche",
              description: "Rich lobster bisque served in delicate pastry shells with microgreens and caviar",
              imageSrc: "https://pixabay.com/get/g1bbcac50008e1393b5442364b391c5881c8bb585761eb1466e2e008f61f0bf5422a7d0b45d6de2c25a648560ff20a1f2beef53fb72c72d5b80645e2ed7ef5332_1280.jpg",
              imageAlt: "Lobster bisque appetizer"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Experience the exceptional through the words of our valued patrons"
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Isabella Martinez",
              role: "Food Critic",
              company: "Culinary Digest",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g565fb71c37146a94954444256ce1503de147067fd43361fd20d066a3700cc32e0c4af612f7863760f80e09aa6826b2ab1f38377d03b3741f081e127bcad90a90_1280.jpg",
              imageAlt: "Isabella Martinez"
            },
            {
              id: "2",
              name: "James Richardson",
              role: "Executive Chef",
              company: "Restaurant Group",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g150a47956e5035141316304b38b6929fef3088091bad5f50a79edff0d0df911fcaa8abb73b10aeefae1a5501856f5c6a44ee3ad6ef8ac52162bae0fd86536a81_1280.jpg",
              imageAlt: "James Richardson"
            },
            {
              id: "3",
              name: "Sophie & Michael Chen",
              role: "Anniversary Celebration",
              company: "Regular Guests",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ga6e2bfa8b806a9e1954ce74fadc735731bab8cf68845f3cdaa0fa8fa66f9585407a15c776ddccf2b3c218c8b674fad82e57e02295d62f5501101f58cf5cad481_1280.jpg",
              imageAlt: "Sophie and Michael Chen"
            },
            {
              id: "4",
              name: "Alexandra Thompson",
              role: "Corporate Events",
              company: "Thompson & Associates",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gfa673ec8c8505328c1b227a7720cb54ebb0bb4759aab4b0f9b4a3b7ea7362b9e8d5d826d7fc9784973a2d1fe01193fc6a8aa7d0e10ff871bd3326a4395fd38a0_1280.jpg",
              imageAlt: "Alexandra Thompson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table"
          description="Join us for an unforgettable culinary journey. Make your reservation today for an evening of exceptional dining."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Preferred Date",
              required: true
            },
            {
              name: "guests",
              type: "number",
              placeholder: "Number of Guests",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or dietary requirements...",
            rows: 4,
            required: false
          }}
          buttonText="Make Reservation"
          imageSrc="https://pixabay.com/get/g5d65716c1cdfe37c6c78c8a5317bb30e2774b69929db3bd0465a773475ad9438adde9070e789ff7e165a190feb12c1bd4622f02afaaf4958152a0aedbfea4b9b_1280.jpg"
          imageAlt="Restaurant dining room"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Lumière"
          copyrightText="© 2025 Lumière Fine Dining. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Chef",
                  href: "chef"
                },
                {
                  label: "Menu",
                  href: "menu"
                },
                {
                  label: "Wine List",
                  href: "wine"
                }
              ]
            },
            {
              title: "Experience",
              items: [
                {
                  label: "Private Dining",
                  href: "private"
                },
                {
                  label: "Events",
                  href: "events"
                },
                {
                  label: "Gift Cards",
                  href: "gifts"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "location"
                },
                {
                  label: "Hours",
                  href: "hours"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/lumiere-restaurant",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/lumiere-restaurant",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/lumiere-restaurant",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}