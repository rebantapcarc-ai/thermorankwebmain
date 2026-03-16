import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

const Pricing = () => {
    const plans = [
        {
            name: "Basic",
            price: "$699",
            description: "For small businesses that just need to get online.",
            features: [
                "Professional 5-page website",
                "Mobile-friendly & fast",
                "Basic SEO setup",
                "7-day delivery"
            ],
            cta: "Get Started",
            highlight: false
        },
        {
            name: "Growth",
            price: "$1199",
            description: "For businesses that want a strong brand presence.",
            features: [
                "Everything in Basic",
                "Custom Logo",
                "Custom color palette & typography",
                "AI Website Assistant",
                "14-day delivery"
            ],
            cta: "Get Started",
            highlight: true,
            badge: "Best Value"
        },
        {
            name: "Premium",
            price: "$1499",
            description: "For businesses that want done-for-you peace of mind.",
            features: [
                "Everything in Growth",
                "Priority delivery (7-10 days)",
                "2 weeks post-launch support",
                "1 guaranteed revision round",
                "Full setup + deployment"
            ],
            cta: "Get Started",
            highlight: false
        }
    ];

    return (
        <Section className="bg-transparent min-h-screen">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
                <p className="text-xl text-slate-600">
                    Choose the plan that fits your needs. No hidden monthly fees for design.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border ${plan.highlight ? 'border-brand-500 ring-2 ring-brand-500/20 shadow-xl scale-105 z-10' : 'border-gray-200'
                            } flex flex-col hover:shadow-lg transition-all duration-300`}
                    >
                        {plan.badge && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm">
                                {plan.badge}
                            </div>
                        )}

                        <div className="p-8 border-b border-gray-100 flex-grow">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                <span className="ml-2 text-slate-500 text-sm">/one-time</span>
                            </div>
                            <p className="text-slate-600 mb-6 text-sm">{plan.description}</p>

                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-8 pt-0 mt-8">
                            <Button
                                to="/contact"
                                variant={plan.highlight ? 'primary' : 'outline'}
                                className="w-full"
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Pricing;
