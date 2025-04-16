
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last updated: April 16, 2025</p>
              
              <p>ClearPulse Inc. ("us", "we", or "our") operates the ClearPulse website (the "Service").</p>
              
              <p>This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service.</p>
              
              <p>We will not use or share your information with anyone except as described in this Privacy Policy.</p>
              
              <p>We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
              
              <h2>Information Collection and Use</h2>
              
              <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, name, phone number, postal address, and other information ("Personal Information").</p>
              
              <h2>Log Data</h2>
              
              <p>We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
              
              <h2>Cookies</h2>
              
              <p>Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.</p>
              
              <p>We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
              
              <h2>Service Providers</h2>
              
              <p>We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
              
              <p>These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
              
              <h2>Security</h2>
              
              <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
              
              <h2>International Transfer</h2>
              
              <p>Your information, including Personal Information, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
              
              <p>If you are located outside United States and choose to provide information to us, please note that we transfer the information, including Personal Information, to United States and process it there.</p>
              
              <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
              
              <h2>Links to Other Sites</h2>
              
              <p>Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third-party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
              
              <p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.</p>
              
              <h2>Children's Privacy</h2>
              
              <p>Our Service does not address anyone under the age of 13 ("Children").</p>
              
              <p>We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a child under age 13 without verification of parental consent, we take steps to remove that information from our servers.</p>
              
              <h2>Changes to This Privacy Policy</h2>
              
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              
              <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
              
              <h2>Contact Us</h2>
              
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul>
                <li>By email: privacy@clearpulse.com</li>
                <li>By phone: +1 (800) 123-4567</li>
                <li>By mail: 123 Beauty Lane, Wellness City, CA 94123, USA</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
