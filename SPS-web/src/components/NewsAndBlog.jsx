import React from 'react';
import { newsData } from '../data/NewsData';

const NewsAndBlog = () => {
    return (
        <div className="py-16 px-4 ">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        News and Insights
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Know what our speakers are saying on digital platforms
                    </p>
                </div>

                {/* News Grid */}
                <div className="space-y-12">
                    {newsData.map((news) => (
                        <div key={news.id} className="flex flex-col">
                            {/* Main Content Row */}
                            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                                {/* Image - Left side (33%) */}
                                <div className="w-full lg:w-1/3">
                                    <img 
                                        src={news.image} 
                                        alt={news.caption}
                                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                                    />
                                </div>

                                {/* Text Box - Right side (66%) */}
                                <div className="w-full lg:w-2/3">
                                    <div className={`h-64 ${news.backgroundColor} rounded-lg p-8 shadow-lg flex items-center`}>
                                        <p className="text-white text-2xl font-medium leading-relaxed">
                                            {news.boxText}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Caption - Below the row */}
                            <div className="w-full mt-6">
                                <p className="text-gray-700 text-xl leading-relaxed text-center">
                                    {news.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
                        View All News & Blogs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsAndBlog;
