import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Index from "./Styling/Index.css";
// Pages
import HomePage from "./Pages/HomePage";
import PhotoGallery from "./Pages/PhotoGallery";
import ContactForm from "./Components/ContactForm";
import FAQPage from "./Pages/FAQPage";

// Language
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en.json';
import nlTranslation from './locales/nl.json';

// Initialize i18next
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            nl: {
                translation: nlTranslation
            }
        },
        fallbackLng: 'nl',
        debug: true, // Set this to false in production
        interpolation: {
            escapeValue: false
        }
    });
const App = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <div className="page">
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route>
                            <Route index element={<HomePage />} />
                            <Route path="/gallery" element={<PhotoGallery />} />
                            <Route path="/Contact" element={<ContactForm />} />
                            <Route path="/FAQ" element={<FAQPage />} />

                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </I18nextProvider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))