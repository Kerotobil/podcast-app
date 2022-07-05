import { useEffect, useState } from 'react';
import { search } from '../../helpers/axios-api-client';
import { Logo } from '../Logo';
import { PodcastCard } from './podcastCard';
import { SearchBar } from './searchBar';

export const BrowseScreen = () => {
  const [searchWord, setSearcWord] = useState('');
  const [podcastList, setPodcastList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const podcastData = await search({ text: searchWord });
      podcastData && setPodcastList(podcastData);
    };
    fetchData();
  }, [searchWord]);
  return (
    <div className="w-full h-full">
      <div className="mx-auto">
        <Logo />
        <h1 className="w-48 text-white text-4xl my-8 font-sans">Browse</h1>
        <SearchBar
          onChange={(e) => {
            setSearcWord(e);
          }}
        />

        <div className="mx-auto mt-12 h-full">
          <p className="text-gray-400 my-4">{`Podcast (${podcastList.length})`}</p>
          <div className="space-y-4 overflow-y-auto h-96">
            {podcastList.map((item, index) => (
              <PodcastCard
                key={index}
                title={item.title}
                author={item.author}
                likes={item.likes}
                dislikes={item.dislikes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
