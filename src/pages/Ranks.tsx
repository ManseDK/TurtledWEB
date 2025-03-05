
import RankCard from '@/components/RankCard';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { CheckCircle, HelpCircle } from 'lucide-react';
import Bubbles from '@/components/Bubbles';

const Ranks = () => {
  const bubbleFeatures = [
    "Custom name color in chat",
    "Access to /nick command",
    "5 player warps",
    "Priority queue access",
    "Exclusive bubble particle effects"
  ];
  
  const turtleFeatures = [
    "All Bubble rank features",
    "Premium name color in chat",
    "Access to all cosmetic features",
    "10 player warps",
    "VIP queue priority",
    "Exclusive turtle shell cosmetics",
    "Monthly special rewards"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Bubbles count={15} />
      <NavBar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 relative bg-gradient-to-b from-black to-turtle-green/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="arcade-text text-4xl md:text-5xl text-turtle-lime mb-6">SERVER RANKS</h1>
          <p className="text-lg text-turtle-sand max-w-2xl mx-auto clean-text">
            Support the server and get awesome perks with our premium ranks
          </p>
        </div>
      </section>
      
      {/* Ranks Section */}
      <section className="py-12 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RankCard
              title="BUBBLE RANK"
              icon="/lovable-uploads/1a88a472-f859-4237-bdac-00adc5406218.png"
              price="$4.99"
              features={bubbleFeatures}
              isPremium={false}
            />
            
            <RankCard
              title="TURTLE RANK"
              icon="/lovable-uploads/0cf3a893-5179-4515-9e9b-f76846a0672d.png"
              price="$9.99"
              features={turtleFeatures}
              isPremium={true}
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-12 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="arcade-text text-3xl mb-4 text-turtle-lime">RANK BENEFITS</h2>
            <p className="text-turtle-sand max-w-2xl mx-auto clean-text">
              Enhance your server experience with these exclusive features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-turtle-lime/30 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-turtle-lime" />
              </div>
              <h3 className="text-xl font-bold mb-2 arcade-text">Cosmetics</h3>
              <p className="text-turtle-sand clean-text">
                Stand out with exclusive particle effects, name colors, and custom cosmetics
              </p>
            </div>
            
            <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-turtle-lime/30 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-turtle-lime" />
              </div>
              <h3 className="text-xl font-bold mb-2 arcade-text">Priority Access</h3>
              <p className="text-turtle-sand clean-text">
                Skip the queue and get instant access to the server even when it's full
              </p>
            </div>
            
            <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-turtle-lime/30 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-turtle-lime" />
              </div>
              <h3 className="text-xl font-bold mb-2 arcade-text">Special Commands</h3>
              <p className="text-turtle-sand clean-text">
                Use exclusive commands like /nick and player warps for enhanced gameplay
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="arcade-text text-3xl text-turtle-lime mb-4">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-gray-400 max-w-2xl mx-auto clean-text">
              Find answers to common questions about our ranks
            </p>
          </div>
          
          <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-8">
            <div className="space-y-6">
              <div className="pb-6 border-b border-white/10">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-turtle-lime mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-turtle-lime mb-2 clean-text">How do I purchase a rank?</h3>
                    <p className="text-turtle-sand clean-text">
                      You can purchase ranks through our website store or by using the /buy command in-game. We accept PayPal, credit cards, and various other payment methods.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="py-6 border-b border-white/10">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-turtle-lime mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-turtle-lime mb-2 clean-text">How long do ranks last?</h3>
                    <p className="text-turtle-sand clean-text">
                      All ranks are permanent and do not expire. Once purchased, you'll have the rank forever on our server.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="py-6 border-b border-white/10">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-turtle-lime mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-turtle-lime mb-2 clean-text">Can I upgrade my rank later?</h3>
                    <p className="text-turtle-sand clean-text">
                      Yes! If you purchase the Bubble rank and later want to upgrade to Turtle, you'll only need to pay the difference in price.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-turtle-lime mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-turtle-lime mb-2 clean-text">Do ranks give gameplay advantages?</h3>
                    <p className="text-turtle-sand clean-text">
                      No, our ranks are designed to be cosmetic and provide quality-of-life features without offering unfair advantages in PVP combat. We maintain a balanced playing field for all players.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-turtle-lime">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="arcade-text text-3xl text-black mb-6">READY TO RANK UP?</h2>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto clean-text font-medium">
            Join the elite turtle warriors and enjoy exclusive perks on the server!
          </p>
          <button className="bg-black text-turtle-lime clean-text font-bold py-3 px-6 rounded-lg
            transition-all duration-300 hover:brightness-110 hover:scale-105
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-turtle-lime/50">
            Purchase Rank Now
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Ranks;
