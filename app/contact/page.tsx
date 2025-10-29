import React from "react";
import { Textarea } from "@/components/ui/textarea";
import Footer from "../_components/Footer";

export default function HelpCenter() {
  return (
    <>
    <div className="min-h-screen  bg-zinc-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          How can we help you?
        </h1>
        <input
          type="text"
          placeholder="Type keywords to find answers"
          className="w-full bg-transparent text-gray-100 placeholder-gray-400 border border-gray-700 rounded-lg px-4 py-3 mb-10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />

        {/* Help Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Billing & Plans */}
          <div className="bg-transparent rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Billing & Plans</h2>
            <ul className="space-y-2 text-blue-400/50">
              <li>Flowbite plans & prices</li>
              <li>Switch plans and add-ons</li>
              <li>I can’t log in to Flowbite</li>
              <li>The Disney Bundle</li>
              <li>Student Discount on Flowbite</li>
            </ul>
          </div>

          {/* Using Flowbite */}
          <div className="bg-transparent rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Using Flowbite</h2>
            <ul className="space-y-2 text-blue-400/50">
              <li>Parental Controls</li>
              <li>Devices to watch Flowbite</li>
              <li>Home location for Live TV</li>
              <li>Live TV Guide</li>
              <li>Fix buffering issues</li>
            </ul>
          </div>

          {/* What’s on Flowbite */}
          <div className="bg-transparent rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">What’s on Flowbite</h2>
            <ul className="space-y-2 text-blue-400/50">
              <li>NEW this month!</li>
              <li>Sports Add-on for Live TV</li>
              <li>Watch live sports</li>
              <li>FX shows & movies</li>
              <li>Super Bowl 2022</li>
            </ul>
          </div>
        </div>

        {/* Not found section */}
        <div className="flex justify-between items-center  bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl px-6 py-4 mb-12">
          <p className="text-gray-300">
            Not what you were looking for? Browse through all of our Help Center articles
          </p>
          <button className=" bg-zinc-800 hover:bg-blue-700/50 text-white px-5 py-2 rounded-lg cursor-pointer">
            Get started
          </button>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left column - Points of contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Points of contact</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div>
                <p className="font-semibold text-gray-100">U.S. Flowbite</p>
                <p>7350 McCormick Rd, Fl 3W, Suite 200, Hunt Valley, MD 21031</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Information & Sales</p>
                <p>sales@flowbite.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Support</p>
                <p>support@flowbite.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Verification of Employment</p>
                <p>hr@flowbite.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Our offices around the world</p>
                <p>Canada — 1539 Avenue Gasparin #2101, Montreal, QC H2T 1L3</p>
                <p>Germany — Neue Schönhauser Str. 3-5, 10178 Berlin</p>
                <p>France — 266 Place Ernest Granier, 34000 Montpellier</p>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Still need help?</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Your email address</label>
                <input
                  type="email"
                  placeholder="name@flowbite.com"
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Topic</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                  <option>Select a topic</option>
                  <option>Billing</option>
                  <option>Technical Support</option>
                  <option>Account Access</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Let us know how we can help you"
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Your message</label>
                <Textarea
                    rows={4}
                  placeholder="Leave a comment..."
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                ></Textarea>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-400  mb-6">
                <input type="checkbox" id="terms" className="accent-blue-600/50" />
                <label htmlFor="terms">
                  By submitting this form, you confirm that you have read and agree to our{" "}
                  <a href="#" className="text-blue-400 underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-400 underline">
                    Privacy Statement
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="bg-blue-600/50 hover:bg-blue-700/50 text-white font-medium px-6 py-2 rounded-lg cursor-pointer"
              >
                Send message
              </button>
            </form>
          </div>
         
        </div>
      </div>
    </div>
   
    </>
  );
}
