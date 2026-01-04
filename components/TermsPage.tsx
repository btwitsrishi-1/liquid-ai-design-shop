import React from 'react';
import FadeIn from './FadeIn';

const TermsPage: React.FC = () => {
    return (
        <div className="min-h-screen py-24 px-6">
            <FadeIn className="max-w-4xl mx-auto">
                <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
                        Terms and Conditions
                    </h1>

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                            <p>Welcome to ArreXar Design ("we," "our," or "us"). By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
                            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of ArreXar Design and its licensors. Our digital assets (prompts, designs, code) are protected by copyright, trademark, and other laws.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Use License</h2>
                            <p>When purchasing a digital product, you are granted a non-exclusive, non-transferable license to use the product for personal or commercial projects. You may NOT resell, redistribute, or sub-license the source files themselves.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. User Accounts</h2>
                            <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                            <p>In no event shall ArreXar Design, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Changes</h2>
                            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                            <p>If you have any questions about these Terms, please contact us at support@btwitsrishi.com.</p>
                        </section>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};

export default TermsPage;
