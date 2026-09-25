import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-surface/50 border-t border-slate-700 mt-12 py-8 text-center text-slate-400">
            <div className="max-w-7xl mx-auto px-4">
                <p className="mb-2">
                    <span className="font-bold text-slate-200">InkFlow</span> — A community for
                    constructive and inclusive social network for software developers.
                </p>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} InkFlow. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
