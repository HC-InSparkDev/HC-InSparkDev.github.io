import React, { useState } from 'react';
import '../Styling/FAQPage.css'

const FAQPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (questionIndex) => {
    setActiveQuestion((prevQuestion) => (prevQuestion === questionIndex ? null : questionIndex));
  };

  const questions = [
    {
      question: 'How long does the upholstery process typically take?',
      answer: 'The time required for upholstery can vary depending on the complexity of the project and our current workload. Generally, it can take anywhere from a few days to a few weeks. We strive to provide a reasonable estimate and keep you updated on the progress of your project.',
    },
    {
      question: 'What types of materials do you use for upholstery?',
      answer: 'We use a wide range of high-quality upholstery materials, including various fabrics, leather, and synthetic materials. The choice of material depends on your preferences, the specific furniture piece, and the intended use. We can help you select the most suitable material that aligns with your style, durability requirements, and budget.',
    },
    {
      question: 'Can you provide custom upholstery services?',
      answer: 'Absolutely! We specialize in custom upholstery services and can transform your furniture into a unique piece that perfectly suits your style and preferences. Whether you have a specific design in mind or need guidance in creating a custom piece, our skilled craftsmen can bring your vision to life.',
    },
    {
      question: 'Do you offer pick-up and delivery services?',
      answer: 'Yes, we offer convenient pick-up and delivery services for your furniture. We understand that transportation can be a challenge, especially with larger or delicate pieces. Our team will handle the logistics, ensuring your furniture is safely transported to and from our workshop. Please contact us to discuss the details and schedule a pick-up or delivery.',
    },
    {
      question: 'How much does upholstery cost?',
      answer: 'The cost of upholstery depends on several factors, including the size of the furniture, the complexity of the project, the chosen materials, and any additional customizations. We provide personalized quotes based on your specific requirements. We aim to offer competitive pricing while ensuring high-quality craftsmanship and materials.',
    },
    {
      question: 'Can you repair damaged upholstery?',
      answer: 'Yes, we have expertise in repairing damaged upholstery. Whether your furniture has tears, rips, worn-out areas, or other damage, we can assess the condition and recommend the appropriate repair techniques. Our goal is to restore the functionality and appearance of your furniture, extending its lifespan.',
    },
    {
      question: 'What is the difference between reupholstering and buying new furniture?',
      answer: 'Reupholstering involves replacing the fabric or leather covering of your furniture while keeping the existing frame and structure intact. It allows you to update the look, feel, and quality of your furniture without the need to purchase new pieces. Reupholstering can be a cost-effective and sustainable choice, especially if you have sentimental or high-quality furniture. Buying new furniture, on the other hand, offers the advantage of selecting entirely new designs and styles, but it may come at a higher cost.',
    },
    {
      question: 'Do you offer a warranty on your upholstery work?',
      answer: 'Yes, we stand behind the quality of our craftsmanship and offer a warranty on our upholstery work. The specific warranty coverage and duration may vary depending on the project and materials used. We strive for customer satisfaction and will address any issues that may arise within the warranty period.',
    },
    // Add more question-answer pairs as needed
  ];

  return (
    <div>
      <h1>Frequently Asked Questions</h1>

      {questions.map((item, index) => (
        <div className="question" key={index}>
          <div className="question-header" onClick={() => toggleQuestion(index)}>
            <h2>{item.question}</h2>
            {activeQuestion === index ? (
              <span>&#9650;</span> // Show an open arrow icon when question is active
            ) : (
              <span>&#9660;</span> // Show a closed arrow icon when question is inactive
            )}
          </div>
          {activeQuestion === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
