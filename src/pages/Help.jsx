import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const Help = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! We'll get back to you shortly.");
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const faqs = [
    {
      question: "How do I create a new travel itinerary?",
      answer: "To create a new travel itinerary, navigate to the Planner page and click on the 'Create New Itinerary' button. You can then search for destinations, add them to your plan, and customize the dates and activities for each location."
    },
    {
      question: "Can I share my itinerary with friends?",
      answer: "Yes! Once you've created an itinerary, you can share it by going to your Dashboard, selecting the itinerary you want to share, and clicking the 'Share' button. You can share via email, social media, or generate a link that can be sent to friends and family."
    },
    {
      question: "How do I edit or delete destinations in my itinerary?",
      answer: "To edit a destination, go to your itinerary in the Planner page and click on the destination you wish to modify. You can then update details or remove it entirely by clicking the 'Remove' button next to the destination."
    },
    {
      question: "Is there a mobile app available?",
      answer: "We're currently developing mobile applications for iOS and Android. They will be available in the app stores soon. In the meantime, our website is fully responsive and works great on mobile devices."
    },
    {
      question: "How do I export my itinerary as a PDF?",
      answer: "To export your itinerary as a PDF, go to your Dashboard, select the itinerary you want to export, and click the 'Export PDF' button. The PDF will include all your destinations, dates, and planned activities in a printable format."
    },
    {
      question: "Can I add custom activities to my itinerary?",
      answer: "Absolutely! When viewing a destination in your itinerary, you can click 'Add Activity' to include custom activities, reservations, or notes. You can specify the time, duration, and add any relevant details or links."
    },
    {
      question: "How accurate is the weather forecast?",
      answer: "Our weather forecasts are sourced from reliable meteorological services and are typically accurate for 7-10 days in advance. For trips planned further in the future, we provide historical weather averages to help you prepare appropriately."
    }
  ];

  const helpCategories = [
    {
      title: "Getting Started",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      link: "/help/getting-started"
    },
    {
      title: "Planning Trips",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
      link: "/help/planning-trips"
    },
    {
      title: "Account Management",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      link: "/help/account"
    },
    {
      title: "Technical Issues",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      link: "/help/technical"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Help & Support</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions or contact our support team for assistance
          </p>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {helpCategories.map((category, index) => (
            <Link key={index} to={category.link}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 text-blue-600">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800">{category.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQs */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <button
                        className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 flex justify-between items-center"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="font-medium text-gray-800">{faq.question}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transition-transform duration-200 ${
                            expandedFaq === index ? "transform rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {expandedFaq === index && (
                        <div className="px-4 py-3 bg-gray-50 border-t text-gray-600">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-3">Can't find what you're looking for?</p>
                  <a href="#contact-form">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Contact Support
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div id="contact-form">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="account">Account Issues</option>
                        <option value="itinerary">Itinerary Problems</option>
                        <option value="payment">Payments</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Send Message
                      </Button>
                    </div>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-medium text-gray-800 mb-4">Other Ways to Reach Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-800">Email Us</p>
                        <a href="mailto:support@travelplanner.com" className="text-blue-600 hover:underline">
                          support@travelplanner.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-800">Call Us</p>
                        <a href="tel:+18001234567" className="text-blue-600 hover:underline">
                          +1 (800) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-800">Live Chat</p>
                        <button className="text-blue-600 hover:underline">
                          Start a live chat session
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;