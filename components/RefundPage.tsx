import React from 'react';
import FadeIn from './FadeIn';

const RefundPage: React.FC = () => {
    return (
        <div className="min-h-screen py-24 px-6">
            <FadeIn className="max-w-4xl mx-auto">
                <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
                        Refund & Cancellation Policy
                    </h1>

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Digital Products Policy</h2>
                            <p>Due to the nature of digital products (software, design assets, prompts), which can be downloaded instantly after purchase, <strong>all sales are generally final</strong>. Unlike physical goods, digital assets cannot be "returned."</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility for Refunds</h2>
                            <p>We understand that exceptional circumstances can take place over the character of the product we supply. Therefore, we DO honor requests for the refund on the following reasons:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>Non-delivery of the product:</strong> issues with the mailing provider or download server.</li>
                                <li><strong>Major defects:</strong> although all the products are thoroughly tested before release, unexpected errors may occur.</li>
                                <li><strong>Product not as described:</strong> such issues should be reported to our support department within 7 days from the date of the purchase. Clear evidence must be provided proving that the purchased product is not as it is described on the website.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Cancellation</h2>
                            <p>For subscription-based services (if applicable), you may cancel your subscription at any time. Your access will continue until the end of the current billing cycle, after which you will not be charged again. We do not offer prorated refunds for partial billing periods.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. How to Request a Refund</h2>
                            <p>Requests for a refund should be sent to <strong>refunds@btwitsrishi.com</strong> within 7 days of your purchase. Please include your order number and detailed reasons for the request.</p>
                        </section>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};

export default RefundPage;
