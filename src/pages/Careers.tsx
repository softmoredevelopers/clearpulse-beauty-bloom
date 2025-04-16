
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, 
  HeartHandshake, 
  Sprout, 
  LineChart, 
  Users, 
  Globe,
  Send 
} from "lucide-react";

const jobOpenings = [
  {
    id: 1,
    title: "Product Formulation Scientist",
    department: "Research & Development",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Join our R&D team to develop innovative, natural skincare formulations based on Ayurvedic principles and modern science."
  },
  {
    id: 2,
    title: "E-Commerce Manager",
    department: "Digital Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Lead our online retail strategy to grow our direct-to-consumer sales channels and improve the digital customer experience."
  },
  {
    id: 3,
    title: "Sustainability Coordinator",
    department: "Operations",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Help implement and manage our sustainability initiatives across packaging, sourcing, and manufacturing processes."
  },
  {
    id: 4,
    title: "Content Creator",
    department: "Marketing",
    location: "Remote",
    type: "Contract",
    description: "Create engaging content about skincare, Ayurveda, and sustainability for our blog, social media, and educational materials."
  },
  {
    id: 5,
    title: "Supply Chain Specialist",
    department: "Operations",
    location: "Delhi, India",
    type: "Full-time",
    description: "Manage relationships with our ingredient suppliers and ensure ethical sourcing practices are maintained throughout our supply chain."
  }
];

const Careers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <div className="relative w-full h-80">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop"
          alt="ClearPulse Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-white max-w-3xl">
              Help us revolutionize the beauty industry with natural, sustainable skincare
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-clearpulse-green mb-6 text-center">
              Why Work With Us
            </h2>
            <p className="text-lg mb-10 text-center">
              At ClearPulse, we're more than just a skincare company. We're a community of passionate individuals dedicated to bringing the ancient wisdom of Ayurveda to modern skincare routines, all while promoting sustainability and ethical practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-clearpulse-cream rounded-full p-5 inline-flex mb-4">
                  <HeartHandshake size={32} className="text-clearpulse-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Meaningful Work</h3>
                <p>Create products that make a positive impact on people's lives and the planet.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-clearpulse-cream rounded-full p-5 inline-flex mb-4">
                  <Sprout size={32} className="text-clearpulse-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                <p>Develop your skills and grow your career in a supportive, innovative environment.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-clearpulse-cream rounded-full p-5 inline-flex mb-4">
                  <Users size={32} className="text-clearpulse-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inclusive Culture</h3>
                <p>Join a diverse team that values different perspectives and embraces collaboration.</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-clearpulse-green mb-6 text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-clearpulse-cream p-3 rounded-full mr-4">
                      <Sprout size={24} className="text-clearpulse-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                      <p>We make decisions with the planet in mind, always seeking the most environmentally responsible options.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-clearpulse-cream p-3 rounded-full mr-4">
                      <HeartHandshake size={24} className="text-clearpulse-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Ethics & Integrity</h3>
                      <p>We conduct business honestly and transparently, treating everyone in our value chain with respect.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-clearpulse-cream p-3 rounded-full mr-4">
                      <LineChart size={24} className="text-clearpulse-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                      <p>We blend ancient wisdom with modern science to create effective, cutting-edge formulations.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-clearpulse-cream p-3 rounded-full mr-4">
                      <Globe size={24} className="text-clearpulse-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                      <p>We celebrate diversity and strive to create products that serve people from all backgrounds.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-clearpulse-green mb-6 text-center">
              Benefits & Perks
            </h2>
            
            <div className="bg-clearpulse-cream rounded-lg p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg className="h-4 w-4 text-clearpulse-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Competitive Salary</h3>
                    <p className="text-sm">Fair compensation based on experience and skills</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg className="h-4 w-4 text-clearpulse-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Comprehensive Healthcare</h3>
                    <p className="text-sm">Medical, dental, and vision coverage</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg className="h-4 w-4 text-clearpulse-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Flexible Work Arrangements</h3>
                    <p className="text-sm">Remote work options and flexible hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg className="h-4 w-4 text-clearpulse-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Generous Paid Time Off</h3>
                    <p className="text-sm">Vacation, sick leave, and holidays</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg className="h-4 w-4 text-clearpulse-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Professional Development</h3>
                    <p className="text-sm">Budget for courses, conferences, and training</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg className="h-4 w-4 text-clearpulse-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Employee Discount</h3>
                    <p className="text-sm">Generous discounts on all ClearPulse products</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg className="h-4 w-4 text-clearpulse-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Parental Leave</h3>
                    <p className="text-sm">Paid leave for new parents</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg className="h-4 w-4 text-clearpulse-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Wellness Programs</h3>
                    <p className="text-sm">Yoga classes, meditation sessions, and wellness stipend</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-clearpulse-green mb-6">
              Current Openings
            </h2>
            
            <div className="space-y-6">
              {jobOpenings.map(job => (
                <Card key={job.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-6 flex-grow">
                        <div className="flex items-center mb-2">
                          <Briefcase size={18} className="text-clearpulse-green mr-2" />
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                        </div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          <span className="bg-clearpulse-cream text-clearpulse-green text-xs font-medium px-2.5 py-1 rounded">
                            {job.department}
                          </span>
                          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
                            {job.location}
                          </span>
                          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
                            {job.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                      </div>
                      <div className="bg-gray-50 p-6 flex items-center justify-center md:w-48">
                        <Button asChild>
                          <a href={`/careers/${job.id}`}>
                            Apply Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-clearpulse-green text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Don't See a Role That Fits?</h2>
              <p className="mb-6">
                We're always looking for talented individuals who are passionate about natural skincare and sustainability. Send us your resume, and we'll keep you in mind for future opportunities.
              </p>
              <Button variant="secondary" className="bg-white text-clearpulse-green hover:bg-gray-100">
                <Send size={16} className="mr-2" />
                Send Open Application
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
