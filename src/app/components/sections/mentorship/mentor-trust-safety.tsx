"use client";

import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { Shield, CheckCircle, Lock, CreditCard, FileCheck, AlertCircle } from "lucide-react";

interface MentorTrustSafetyProps {
  mentorName?: string;
  isVerified?: boolean;
}

export default function MentorTrustSafety({ 
  mentorName = "mentor", 
  isVerified = true 
}: MentorTrustSafetyProps) {
  return (
    <Section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-container px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-bold">Trust & Safety</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your mentorship experience with {mentorName} is protected by our comprehensive safety measures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Verified Mentor Badge */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Verified Mentor</h3>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                {isVerified ? (
                  <div className="flex items-center gap-1.5">
                    <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-blue-600 font-medium">Verified Profile</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <div className="h-5 w-5 rounded-full bg-gray-300 flex items-center justify-center">
                      <AlertCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-500 font-medium">Verification Pending</span>
                  </div>
                )}
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">
              All mentors undergo a thorough verification process to confirm their identity, professional experience, and credentials.
            </p>
            
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Identity verification
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Professional background check
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Credential validation
              </li>
            </ul>
            
            <Button variant="outline" size="sm" className="w-full text-blue-600 border-blue-500 hover:bg-blue-50">
              View Verification Details
            </Button>
          </div>
          
          {/* Platform Protection */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Payment Protection</h3>
            </div>
            
            <p className="text-gray-600 mb-4">
              Our escrow payment system ensures your payment is only released to the mentor after your session is successfully completed.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-gray-900 mb-2">How It Works:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>You book and pay for a session</li>
                <li>Payment is held securely in escrow</li>
                <li>Session is conducted as scheduled</li>
                <li>You confirm session completion</li>
                <li>Payment is released to the mentor</li>
              </ol>
            </div>
            
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-700">
              <FileCheck className="h-4 w-4 text-blue-600" />
              <span>100% Money-back guarantee for no-shows or cancellations</span>
            </div>
            
            <Button variant="outline" size="sm" className="w-full text-blue-600 border-blue-500 hover:bg-blue-50">
              Payment Protection Policy
            </Button>
          </div>
          
          {/* Privacy Assurance */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Privacy Assurance</h3>
            </div>
            
            <p className="text-gray-600 mb-4">
              Your data and session content remain private and are never shared with third parties without your explicit consent.
            </p>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">End-to-End Encryption</h4>
                  <p className="text-sm text-gray-600">All communications are encrypted and secure</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">No Data Sharing</h4>
                  <p className="text-sm text-gray-600">Your information stays between you and your mentor</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">GDPR Compliant</h4>
                  <p className="text-sm text-gray-600">We adhere to strict data protection regulations</p>
                </div>
              </div>
            </div>
            
            <Button variant="outline" size="sm" className="w-full text-blue-600 border-blue-500 hover:bg-blue-50">
              Privacy Policy
            </Button>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-2">Have questions about our Trust & Safety measures?</p>
          <Button variant="outline" size="sm" className="text-blue-600 border-blue-500 hover:bg-blue-50">
            Contact Support
          </Button>
        </div>
      </div>
    </Section>
  );
}