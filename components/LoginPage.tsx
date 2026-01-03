import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import LiquidButton from './LiquidButton';
import FadeIn from './FadeIn';

const LoginPage: React.FC = () => {
    const [loginInput, setLoginInput] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<any>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Map "rxr" to email
        let email = loginInput;
        if (!email.includes('@')) {
            email = `${email}@example.com`; // Assuming default domain
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            console.log("Logged in:", data);
            setUser(data.user);
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    if (user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
                <FadeIn>
                    <div className="glass-panel p-8 rounded-2xl max-w-md w-full text-center">
                        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
                            Welcome Back
                        </h2>
                        <p className="mb-6 text-gray-300">{user.email}</p>
                        <LiquidButton onClick={handleLogout} variant="secondary">
                            Sign Out
                        </LiquidButton>
                    </div>
                </FadeIn>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full px-4">
            <FadeIn className="w-full max-w-md">
                <div className="glass-panel p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Background blob for effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

                    <h2 className="text-3xl font-bold mb-8 text-center text-white tracking-wide">
                        Admin <span className="text-cyan-400">Login</span>
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-cyan-200/70 mb-2 uppercase tracking-wider">
                                Username or Email
                            </label>
                            <input
                                type="text"
                                value={loginInput}
                                onChange={(e) => setLoginInput(e.target.value)}
                                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                placeholder="Enter username"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-cyan-200/70 mb-2 uppercase tracking-wider">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                placeholder="Enter password"
                                required
                            />
                        </div>

                        {error && (
                            <div className="text-red-400 text-sm py-2 px-4 bg-red-900/20 rounded-lg border border-red-500/20">
                                {error}
                            </div>
                        )}

                        <div className="pt-4">
                            <LiquidButton className="w-full text-center justify-center">
                                {loading ? 'Authenticating...' : 'Access Interface'}
                            </LiquidButton>
                        </div>
                    </form>
                </div>
            </FadeIn>
        </div>
    );
};

export default LoginPage;
