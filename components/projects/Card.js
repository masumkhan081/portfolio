import React from 'react';

const Card = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto my-6">
            {/* Card Header */}
            <div className="bg-gray-100 p-4 text-center">
                <h2 className="text-2xl font-semibold mb-2">Resume Builder</h2>
                <p className="text-gray-600 text-sm">Online resume builder for software developers.</p>
            </div>

            {/* Card Body */}
            <div className="p-4">
                <p className="text-gray-800 text-base mb-4">
                    A tool that helps developers create resumes by taking technical skills, academic records, experiences, etc.,
                    to finally produce a well-structured resume. It started with the purpose of implementing Firebase Auth,
                    Context API, React HOC, and Firestore in a meaningful way.
                </p>

                {/* Links Section */}
                <div className="flex space-x-4 mb-4">
                    <a href="#" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        Live Version
                    </a>
                    <a href="#" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        Brief Video
                    </a>
                    <a href="#" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a>
                </div>

                {/* Tools List */}
                <div className="mt-4">
                    <span className="font-medium">Used Tools:</span>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>React-bootstrap</li>
                        <li>React-spring</li>
                        <li>Firestore</li>
                        <li>Firebase-auth</li>
                        <li>React-router</li>
                        <li>React-pdf</li>
                    </ul>
                </div>
            </div>

            {/* Card Footer for Versions */}
            <div className="bg-gray-100 p-4 flex justify-between">
                <div className="w-1/2">
                    <h4 className="font-semibold mb-2">Version 1</h4>
                    <a href="#" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        Live Version
                    </a>
                    <a href="#" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        GitHub Source
                    </a>
                </div>
                <div className="w-1/2">
                    <h4 className="font-semibold mb-2">Version 2</h4>
                    <a href="#" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        Live Version
                    </a>
                    <a href="#" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        GitHub Source
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
