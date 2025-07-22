import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, X, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";

interface FormData {
  isHomeowner: boolean | null;
  hasSprayFoam: boolean | null;
  postcode: string;
  streetAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export default function EligibilityCheck() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentStep === 100) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, navigate]);
  const meta = {
    title: "Eligibility Check | Spray Foam Removal",
    description: "Check if you qualify for spray foam insulation removal discounts in under 60 seconds."
  };
  const [formData, setFormData] = useState<FormData>({
    isHomeowner: null,
    hasSprayFoam: null,
    postcode: "",
    streetAddress: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: ""
  });

  const handleYesNoAnswer = (field: 'isHomeowner' | 'hasSprayFoam', value: boolean) => {
    if (field === 'hasSprayFoam' && value === false) {
      // user not eligible
      setFormData(prev => ({ ...prev, [field]: value }));
      setCurrentStep(99);
      return;
    }
    setFormData(prev => ({ ...prev, [field]: value }));
    setCurrentStep(currentStep + 1);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep === 1) {
      navigate('/');
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setCurrentStep(100);
  };

  const renderProgressIndicator = () => {
    const totalSteps = 4;
    return (
      <div className="flex justify-center mb-8">
        <div className="flex gap-2">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`w-16 h-1 rounded-full transition-colors ${
                i < currentStep ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 100:
        return (
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-bold text-green-600">Success!</h2>
            <p className="max-w-xl mx-auto text-gray-700">Your details have been submitted successfully. Redirecting to home...</p>
          </div>
        );
      case 99:
        return (
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-bold text-primary">Thank you for your interest</h2>
            <p className="max-w-xl mx-auto text-gray-700">
              Unfortunately, we’re unable to move forward, as it appears that spray foam insulation is not installed in your home. To be successful, having spray foam insulation is a required condition. If your situation changes or you have any questions, please feel free to reach out to us again.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" size="lg" onClick={() => setCurrentStep(2)}>Back</Button>
              <Button variant="default" size="lg" onClick={() => navigate('/')}>Return Home</Button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <p className="text-primary text-sm font-medium">Check your eligibility in less than 60 seconds ⏱️</p>
              <h2 className="text-2xl font-bold text-primary">Are you a homeowner in the UK?</h2>
            </div>
            
            <div className="flex justify-center gap-8">
              <button
                onClick={() => handleYesNoAnswer('isHomeowner', true)}
                className="flex flex-col items-center gap-4 p-6 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <Button variant="default" size="lg" className="px-8">
                  Yes
                </Button>
              </button>
              
              <button
                onClick={() => handleYesNoAnswer('isHomeowner', false)}
                className="flex flex-col items-center gap-4 p-6 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center">
                  <X className="w-10 h-10 text-white" />
                </div>
                <Button variant="default" size="lg" className="px-8">
                  No
                </Button>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-bold text-primary">
              Do you have Spray Foam Insulation installed<br />in your home?
            </h2>
            
            <div className="flex justify-center gap-8">
              <button
                onClick={() => handleYesNoAnswer('hasSprayFoam', true)}
                className="flex flex-col items-center gap-4 p-6 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <Button variant="default" size="lg" className="px-8">
                  Yes
                </Button>
              </button>
              
              <button
                onClick={() => handleYesNoAnswer('hasSprayFoam', false)}
                className="flex flex-col items-center gap-4 p-6 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center">
                  <X className="w-10 h-10 text-white" />
                </div>
                <Button variant="default" size="lg" className="px-8">
                  No
                </Button>
              </button>
            </div>
            
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-bold text-primary">What's your address?</h2>
            
            <form onSubmit={handleNext} className="space-y-6 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="postcode" className="text-sm font-medium text-gray-600">
                  UK Postcode
                </Label>
                <Input
                  id="postcode"
                  type="text"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={(e) => setFormData(prev => ({ ...prev, postcode: e.target.value }))}
                  className="text-center"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="streetAddress" className="text-sm font-medium text-gray-600">
                  What is your street address?
                </Label>
                <Input
                  id="streetAddress"
                  type="text"
                  value={formData.streetAddress}
                  onChange={(e) => setFormData(prev => ({ ...prev, streetAddress: e.target.value }))}
                  required
                />
              </div>
              
              <Button type="submit" variant="default" size="lg" className="w-full">
                NEXT
              </Button>
            </form>
            
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-bold text-primary">We just need a few details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-600">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-600">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-600">
                  Your phone number
                </Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    🇬🇧 +
                  </span>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="07500 123456"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    className="rounded-l-none"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-600">
                  Your email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              
              <Button type="submit" variant="default" size="lg" className="w-full">
                SUBMIT
              </Button>
            </form>
            
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SEO title={meta.title} description={meta.description} />
      <h1 className="sr-only">Spray Foam Removal Eligibility Check</h1>
      <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 min-h-[calc(100vh-200px)] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {renderProgressIndicator()}
            {renderStep()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
    </>
  );
}