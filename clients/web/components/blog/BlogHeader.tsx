export function BlogHeader() {
    return (
        <div className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block">Blog</span>
                        <span className="block text-indigo-600">Latest Updates</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Stay up to date with our latest news, updates, and insights.
                    </p>
                </div>
            </div>
        </div>
    );
} 