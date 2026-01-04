import React from 'react';
import FadeIn from './FadeIn';
import { Download, Zap, Mail } from 'lucide-react';

const ShippingPage: React.FC = () => {
    return (
        <div className="min-h-screen py-24 px-6">
            <FadeIn className="max-w-4xl mx-auto">
                <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-400">
                        Shipping & Delivery Policy
                    </h1>

                    <div className="space-y-8 text-gray-300 leading-relaxed">

                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Instant Digital Delivery</h3>
                                <p>Since ArreXar Design sells exclusively digital products (AI Toolkits, Prompts, Design Assets), there is no physical shipping involved. Delivery is immediate.</p>
                            </div>
                        </div>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Delivery Method</h2>
                            <p>Upon successful payment confirmation:</p>
                            <ul className="list-none space-y-4 mt-4">
                                <li className="flex items-center gap-3">
                                    <Download className="w-5 h-5 text-emerald-400" />
                                    <span><strong>Direct Download:</strong> You will be redirected to a secure download page immediately after checkout.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                    <span><strong>Email Confirmation:</strong> An email containing your receipt and download links will be sent to the email address provided during purchase.</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Delivery Timeframes</h2>
                            <p>For most purchases, delivery is instant (within seconds). In rare cases of high server traffic or payment processing delays, delivery may take up to 30 minutes. If you have not received your product within 1 hour, please contact support.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Download Limits</h2>
                            <p>Generally, your download links are valid for the lifetime of the product availability. However, we recommend backing up your files immediately upon download. We reserve the right to limit the number of download attempts to prevent abuse.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Failed Delivery</h2>
                            <p>If you encounter any issues downloading your files (e.g., corrupted file, link not working), please contact us at <strong>support@btwitsrishi.com</strong> with your order ID, and we will manually send you the files.</p>
                        </section>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};

export default ShippingPage;
