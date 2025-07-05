"use client";
import ScrollProgress from "@/components/ScrollProgress"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Video, 
  Mic,
  FileText,
  Shield,
  ArrowRight,
  CheckCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Real-time Messaging",
    description: "Instant text chat with markdown support and emoji reactions"
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "HD Video Calls",
    description: "Crystal clear video conferencing with screen sharing"
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Voice Channels",
    description: "Low-latency voice chat with noise suppression"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "File Sharing",
    description: "Share documents, images, and files up to 100MB"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "End-to-end Security",
    description: "End-to-end encryption and role-based permissions"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Built on Next.js for unmatched performance"
  }
];

const benefits = [
  "Unlimited message history",
  "Advanced role permissions",
  "Custom server branding",
  "Message reactions",
  "Screen sharing & recording",
  "End-to-End security",
  "Cross-platform compatibility",
  "Dark/light mode"
];

export const LandingPage = () => {
  return (
    <>
   <ScrollProgress/>
   <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
   <header className="fixed w-full border-b border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-50">
     <div className="container mx-auto px-4 py-3 flex items-center justify-between">
       <div className="flex items-center space-x-3">
         <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
           SynapseChat
         </span>
       </div>
       <div className="flex items-center space-x-2 sm:space-x-4">
         <ModeToggle />
         <div className="flex items-center space-x-2">
           <Link href="/sign-in">
             <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-600 hidden sm:inline-flex">
               Sign In
             </Button>
           </Link>
           <Link href="/sign-up">
             <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-sm text-sm sm:text-base">
               Get Started
             </Button>
           </Link>
         </div>
       </div>
     </div>
   </header>

   {/* Hero Section - Mobile Responsive */}
   <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 container mx-auto px-4">
     <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
       <div className="lg:w-1/2 text-center lg:text-left">
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
             Synapsechat
           </span>
           <span className="block text-slate-900 dark:text-white mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl">
             Communication Platform
           </span>
         </h1>
         <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
           Secure, reliable messaging with voice, video, and file sharing for modern teams.
         </p>
         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
           <Link href="/sign-up" className="w-full sm:w-auto">
             <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 sm:px-8 py-5 sm:py-6 shadow-lg text-sm sm:text-base">
               Get Started
               <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
             </Button>
           </Link>
         </div>
       </div>
       <div className="lg:w-1/2 mt-8 sm:mt-0 w-full">
         <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-0.5 sm:p-1 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-slate-200 dark:border-slate-700">
           <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
             <div className="p-3 sm:p-4 border-b border-slate-200 dark:border-slate-700 flex items-center space-x-2">
               <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
               <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
               <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="p-4 sm:p-6">
               <div className="space-y-3 sm:space-y-4">
                 <div className="flex items-start space-x-2 sm:space-x-3">
                   <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                     <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-300">JD</span>
                   </div>
                   <div className="bg-slate-100 dark:bg-slate-800 p-2 sm:p-3 rounded-lg max-w-[70%] sm:max-w-xs">
                     <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">Hey team, just shared the report</p>
                     <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1">2:45 PM</p>
                   </div>
                 </div>
                 <div className="flex items-start space-x-2 sm:space-x-3 justify-end">
                   <div className="bg-blue-600 p-2 sm:p-3 rounded-lg max-w-[70%] sm:max-w-xs">
                     <p className="text-xs sm:text-sm text-white">Got it! Reviewing now</p>
                     <p className="text-[10px] sm:text-xs text-blue-200 mt-0.5 sm:mt-1">2:46 PM</p>
                   </div>
                 </div>
                 <div className="flex items-center space-x-1 sm:space-x-2 p-1.5 sm:p-2 bg-slate-50 dark:bg-slate-800 rounded-md sm:rounded-lg border border-slate-200 dark:border-slate-700">
                   <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                   <span className="text-xs sm:text-sm font-medium truncate">Report.pdf</span>
                   <span className="text-[10px] sm:text-xs text-slate-500 ml-auto">2.4 MB</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>

   {/* Features Section - Mobile Responsive */}
   <section id="features" className="py-12 sm:py-20 bg-white dark:bg-slate-900">
     <div className="container mx-auto px-4">
       <div className="text-center mb-8 sm:mb-16">
         <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
           Powerful Features for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
             Modern Teams
           </span>
         </h2>
         <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
           Everything you need for seamless team collaboration
         </p>
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
         {features.map((feature, index) => (
           <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200 dark:border-slate-700">
             <CardHeader className="pb-2 sm:pb-3">
               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-3 sm:mb-4">
                 {feature.icon}
               </div>
               <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                 {feature.description}
               </p>
             </CardContent>
           </Card>
         ))}
       </div>
     </div>
   </section>
   <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
     <div className="container mx-auto px-4">
       <div className="max-w-4xl mx-auto">
         <div className="text-center mb-8 sm:mb-16">
           <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
             Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
               SynapseChat
             </span>?
           </h2>
           <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400">
             The communication platform built for professionals
           </p>
         </div>
         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
           {benefits.map((benefit, index) => (
             <div key={index} className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-md sm:rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 flex items-start space-x-2 sm:space-x-3">
               <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
               <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                 {benefit}
               </span>
             </div>
           ))}
         </div>
       </div>
     </div>
   </section>
   <footer className="py-8 sm:py-12 bg-slate-900 text-slate-400">
     <div className="container mx-auto px-4">
       <div className="flex flex-col md:flex-row justify-center items-center">
         <p className="text-xs sm:text-sm text-center">
           &copy; {new Date().getFullYear()} SynapseChat. All rights reserved.
         </p>
       </div>
     </div>
   </footer>
 </div>
 </>
  );
};