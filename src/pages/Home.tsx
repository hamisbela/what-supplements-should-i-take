import React from 'react';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">What Supplements Should I Take? - Quiz</h1>
        <Quiz />
      </section>

      <section id="guide" className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose lg:prose-lg mx-auto">
          <div className="mb-8">
            <p className="text-lg">
              If you're wondering, <strong>"What supplements should I take?"</strong>, you're not alone! Choosing the right supplements can be overwhelming with so many options available. From protein powders to pre-workouts, finding the best supplements for your fitness goals requires careful consideration. But don't worry – we've got you covered! Our interactive <strong>What Supplements Should I Take? Quiz</strong> will help you narrow down your choices and find the ideal supplements for your training needs.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Take the "What Supplements Should I Take?" Quiz?</h2>
            <p>
              With countless supplements on the market, deciding on the right ones can feel overwhelming. Whether you need muscle gain support, performance enhancers, or recovery aids, our <strong>What Supplements Should I Take? Quiz</strong> is designed to match you with supplements that fit your goals, budget, and training requirements.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Factors Our Quiz Considers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Training Goals:</strong> Muscle gain, performance, recovery, or energy</li>
              <li><strong>Dietary Preferences:</strong> Vegan, gluten-free, or specific restrictions</li>
              <li><strong>Training Level:</strong> Beginner, intermediate, or advanced</li>
              <li><strong>Budget:</strong> Find quality supplements within your price range</li>
              <li><strong>Form Preferences:</strong> Powders, capsules, or ready-to-drink</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Supplement Categories</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Best for Muscle Gain:</strong> Protein powders and mass gainers</li>
              <li><strong>Best for Performance:</strong> Pre-workout and creatine supplements</li>
              <li><strong>Best for Recovery:</strong> BCAAs and post-workout formulas</li>
              <li><strong>Best for Energy:</strong> Caffeine and energy-focused supplements</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the "What Supplements Should I Take?" Quiz Works</h2>
            <p>
              Taking our quiz is quick and easy! Simply answer a few questions about your fitness goals, dietary preferences, and budget, and we'll recommend the best supplements for you. Our recommendations are based on scientific research and real athlete experiences.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Supplement Selection Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Quality Matters:</strong> Look for third-party tested supplements</li>
              <li><strong>Timing is Key:</strong> Learn when to take each supplement</li>
              <li><strong>Stack Smart:</strong> Understand which supplements work well together</li>
              <li><strong>Research Brands:</strong> Choose reputable manufacturers</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Our Supplement Recommendations?</h2>
            <p>
              Our team consists of fitness experts and nutrition specialists who stay up-to-date with the latest research and supplement developments. We regularly update our <strong>What Supplements Should I Take? Quiz</strong> to include new products and scientific findings, ensuring you get the most current recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Supplements?</h2>
            <p>
              Don't waste hours researching – let our <strong>What Supplements Should I Take? Quiz</strong> guide you to the right products. Whether you're just starting your fitness journey or looking to optimize your supplement stack, we'll help you make an informed decision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}