import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "1. Research - How do I start my study abroad journey?",
      answer: "It helps to do a little research before you speak to us. Once you do some research, you will get an idea of the subject areas that interest you the most. You could look at some course descriptions, university reviews and their locations. You can also start a wish list of your preferences and begin to narrow down your selection. Research can also include asking your friends and family if they have studied abroad. Post a message on your timeline on Facebook and you may be surprised at how many people have experience of an international education. What if you don't know where to start? Don't worry. You can come in to one of our offices and our counsellors will help you get started. Also, don't trust everything you read online. We will ensure that you get accurate and non-biased advice."
    },
    {
      question: "2. Speak to one of our AbroadAchieve counsellors",
      answer: "When you are ready, make an appointment with an AbroadAchieve counsellor. Our counsellors are professionally certified and many of them were international students themselves. They have a wealth of first-hand professional advice and personal experience from different study locations across the world. You can take your wish-list and course preferences along with you to your appointment as a starting point. Your counsellor will work through all the big and small details to ensure the best possible fit between you and your future university. They will also give you information about scholarships, living costs, part-time work opportunities and campus life. Remember, this is your future we are talking about, so take your time and ask lots of questions."
    },
    {
      question: "3. Make your application",
      answer: "After you have chosen your course and university or school, it's time to apply. Your counsellor will support you during your university and course applications. You needn't worry about anything since we take our job very seriously and follow the strictest legal and ethical standards. Your counsellor will personally contact your chosen university or school to make sure they support your application to improve your chances of acceptance. If you need to take an English language test to qualify for your course, you must practice a lot. In a test such as IELTS, you will need good grammar and spelling, as well as vocabulary. As a proud co-owner of IELTS, we can help you with the test as well."
    },
    {
      question: "4. Accepting your offer",
      answer: "Once the university or school receives your application it will be assessed and you will be notified of the result. It can take a few weeks, or longer for postgraduate courses, for your application to be processed. If your application is successful, you will receive a letter of offer and an acceptance form. Before accepting your offer, your counsellor will read it carefully with you and check any conditions that may apply. If you are accepted for more than one course or school, and you are confused, we will help you decide which option is best for you. It is natural to be nervous as you wait for the outcome of your course applications. If you are feeling anxious, we want you to tell us. This is perfectly normal and we can help you feel more confident."
    },
    {
      question: "5. Practise your English skills",
      answer: "It is always a good idea to brush up your English language skills to ensure you can keep up with what your lecturers are saying. This will be helpful, especially if English is not your first language. You can try watching English TV news and talk shows, reading books or listening to podcasts where the language is more formal. You can also have some fun learning the local slang in your study destination. For example, Australians, or 'Aussies' as they call themselves, have lots of different words and accents when compared with the British who call themselves Brits, even though they all speak English. There are plenty of websites that list the slang from different regions and some of these words will help you understand the local people in your new country."
    },
    {
      question: "6. Student visa",
      answer: "Now that you have been accepted, it's time to apply for your student visa. AbroadAchieve can provide you with some information to help make sure you are well positioned to navigate this process with the authorised migration departments."
    },
    {
      question: "7. Ready, steady, go",
      answer: "Congratulations! You're off on a huge adventure. There are lots of things to think about during this time and your AbroadAchieve counsellor will help out along the way with advice on matters such as exchanging money, insurance, SIM cards and opening a bank account. We host regular pre-departure sessions throughout the year to help prepare you for student life in your new country."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-8" id='FAQQ'>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Steps to Study Abroad</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AbroadAchieve has been helping students like you to study abroad for over 50 years. 
            We know for sure what it takes to set you up for success. We provide you with assistance 
            on course and visa applications, travel and feeling at home in your new destination.
          </p>
          <p className="text-blue-600 font-semibold mt-4">
            Best of all, most of AbroadAchieve's advice services are free.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
         <a href="https://wa.me/2348089953598?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20studying%20abroad" 
              target="_blank" 
              rel="noopener noreferrer"> <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 cursor-pointer transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;