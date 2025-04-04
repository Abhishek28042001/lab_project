import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Abhishek Kumar",
      role: "Member 1",
      bio: "I am a student of Computer Science and Engineering at MNNIT Allahabad.",
      image: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
      name: "Abhishek Nisaad",
      role: "Member 2",
      bio: "I am a student of Computer Science and Engineering at MNNIT Allahabad.",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Adarsh Kumar",
      role: "Member 3",
      bio: "I am a student of Computer Science and Engineering at MNNIT Allahabad.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Travel Planner</h1>
          <p className="text-xl text-gray-600">
            Our mission is to make travel planning effortless, inspiring more people to explore the world with confidence.
          </p>
        </div>

        {/* Our Story */}
        {/* <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Travel Planner was born in 2020 from a simple observation: planning trips should be as enjoyable as the journey itself. What started as a passion project between friends who loved to travel but hated the complexity of organizing trips has evolved into a comprehensive platform used by thousands of travelers worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                We've combined cutting-edge technology with deep travel expertise to create an intuitive tool that helps you plan every aspect of your journey, from discovering hidden gems to creating detailed day-by-day itineraries.
              </p>
              <p className="text-gray-600">
                Whether you're a solo adventurer, a couple on a romantic getaway, or a family planning a vacation, our platform adapts to your needs, making travel planning simple, collaborative, and inspiring.
              </p>
            </div>
            <div className="order-first md:order-last">
              <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                alt="People planning a trip"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div> */}

        {/* Our Values */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">
                  We believe in the power of shared experiences. Our platform enables travelers to learn from each other and contribute to a global community of explorers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Quality</h3>
                <p className="text-gray-600">
                  We're committed to providing reliable, up-to-date information and tools that help you make the most of your travels, no matter where you go.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  We believe everyone deserves amazing travel experiences. Our platform is designed to be accessible and useful for travelers of all backgrounds and abilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div> */}

        {/* Meet the Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us */}
        <div className="bg-blue-600 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Adventure?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of travelers who are discovering new destinations and planning memorable journeys with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/planner">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  Try the Planner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;