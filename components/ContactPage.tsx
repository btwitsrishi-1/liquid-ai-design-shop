import React from 'react';
import FadeIn from './FadeIn';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] w-full px-4 py-20">
            <FadeIn className="w-full max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-glow">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-cyan-100/60 max-w-2xl mx-auto leading-relaxed">
                        We are always open to discuss your project, creative ideas or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Email Card */}
                    <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all group">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                        <p className="text-white/60 text-sm mb-4">Drop us a line anytime</p>
                        <p className="text-cyan-200 font-medium">btwitsrishi.com</p>
                    </div>

                    {/* Phone Card */}
                    <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all group">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <Phone className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                        <p className="text-white/60 text-sm mb-4">Mon-Fri from 8am to 5pm</p>
                        <p className="text-cyan-200 font-medium">+91 9288069420</p>
                    </div>

                    {/* Address Card */}
                    <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all group">
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                        <p className="text-white/60 text-sm mb-4">Come say hello at our office</p>
                        <p className="text-cyan-200 font-medium leading-relaxed">
                            503/A, Patliputra Rail Parisar,<br />
                            Digha, Patna,<br />
                            Bihar, 800011
                        </p>
                    </div>
                </div>

                {/* Map Placeholder or Visual Element */}
                <div className="mt-16 glass-panel p-4 rounded-3xl border border-white/5 h-64 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
                    <div className="text-center">
                        <p className="text-white/30 text-sm uppercase tracking-widest font-mono">Located in Patna, Bihar</p>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-4 mx-auto"></div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};

export default ContactPage;
