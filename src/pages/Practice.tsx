
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeechPractice from "@/components/SpeechPractice";

const Practice = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        <SpeechPractice />
      </main>
      <Footer />
    </div>
  );
};

export default Practice;
