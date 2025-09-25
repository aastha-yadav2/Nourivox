import React, { useState, useEffect } from 'react';

interface Article {
  source: {
    name: string;
  };
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}

const mockArticles: Article[] = [
  {
    source: { name: 'Health India Times' },
    title: 'Yoga and Meditation Lower Blood Pressure in New Study',
    description: 'A recent study published in the Journal of Medicine confirms that regular practice of yoga and meditation can significantly reduce high blood pressure.',
    url: '#',
    urlToImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1220',
    publishedAt: '2024-07-20T09:00:00Z',
  },
  {
    source: { name: 'Wellness Today' },
    title: 'Government Launches New Telemedicine Initiative in Rural Areas',
    description: 'The Ministry of Health has launched a new initiative to provide telemedicine services to remote villages, connecting patients with doctors via video calls.',
    url: '#',
    urlToImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1170',
    publishedAt: '2024-07-19T14:30:00Z',
  },
  {
    source: { name: 'Pharma Update' },
    title: 'Breakthrough in Dengue Vaccine Development Announced',
    description: 'Scientists have announced a major breakthrough in the development of a new vaccine for dengue fever, showing promising results in early trials.',
    url: '#',
    urlToImage: 'https://images.unsplash.com/photo-1624424361223-28f8f97e335d?auto=format&fit=crop&q=80&w=1171',
    publishedAt: '2024-07-19T11:00:00Z',
  },
  {
    source: { name: 'Nutrition News' },
    title: 'The Rise of Millets: A Superfood for a Healthier India',
    description: 'Nutritionists are highlighting the benefits of incorporating millets into daily diets, citing their high fiber and nutrient content for better health outcomes.',
    url: '#',
    urlToImage: 'https://images.unsplash.com/photo-1598232819270-4569888d40d5?auto=format&fit=crop&q=80&w=1170',
    publishedAt: '2024-07-18T18:00:00Z',
  },
  {
    source: { name: 'Mental Health Matters' },
    title: 'New App Launched to Support Mental Wellness for Students',
    description: 'A new mobile application has been launched to provide mental health resources, counseling, and support for students across the country.',
    url: '#',
    urlToImage: 'https://images.unsplash.com/photo-1618023191083-685a802b42f1?auto=format&fit=crop&q=80&w=1170',
    publishedAt: '2024-07-17T10:45:00Z',
  },
];

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // A simple fallback image
  const fallbackImage = `https://via.placeholder.com/400x200.png/1f2937/9ca3af?text=Health+News`;

  return (
    <a 
      href={article.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex-shrink-0 w-80 bg-gray-800/50 border border-gray-700 rounded-xl shadow-lg hover:border-teal-500/80 hover:shadow-teal-900/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden group"
    >
      <div className="w-full h-40 overflow-hidden">
        <img 
            src={article.urlToImage || fallbackImage} 
            alt={article.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            onError={(e) => (e.currentTarget.src = fallbackImage)}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-md font-bold text-white mb-2 leading-tight flex-grow group-hover:text-teal-400 transition-colors">{article.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{article.description && article.description.length > 100 ? `${article.description.substring(0, 100)}...` : article.description}</p>
        <div className="mt-auto pt-2 border-t border-gray-700 flex justify-between items-center text-xs text-gray-500">
          <span className="truncate pr-2">{article.source.name}</span>
          <span>{formatDate(article.publishedAt)}</span>
        </div>
      </div>
    </a>
  );
};

const TrendingArticles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data to avoid CORS issue with NewsAPI on deployed environments.
        // The Developer plan for NewsAPI does not allow requests from browsers on non-localhost domains.
        const timer = setTimeout(() => {
            const filteredArticles = mockArticles.filter(
              (article) => article.description && article.title && article.title.toLowerCase() !== "[removed]"
            );
            setArticles(filteredArticles);
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Trending Health Articles</h2>
                <p className="text-lg text-gray-400">Stay updated with the latest news and trends in healthcare.</p>
            </div>
            
            <div className="relative">
                {loading && (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400"></div>
                    </div>
                )}
                
                {!loading && (
                    <div className="flex overflow-x-auto space-x-6 pb-6 -mx-4 px-4">
                        {articles.length > 0 ? (
                            articles.map((article, index) => <ArticleCard key={article.url + index} article={article} />)
                        ) : (
                             <div className="text-center text-gray-500 bg-gray-800/50 p-6 rounded-lg w-full">
                                <p>No trending articles found at the moment. Please check back later.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrendingArticles;
