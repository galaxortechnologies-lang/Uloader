import { VideoMetadata } from '../types';

// In a real app, this would call your backend or a RapidAPI endpoint
// e.g. https://rapidapi.com/hub (search for "All in one downloader")

export const fetchVideoDetails = async (url: string): Promise<VideoMetadata> => {
  return new Promise((resolve) => {
    // SIMULATION: Simulating a network request delay
    setTimeout(() => {
      resolve({
        title: "Amazing Nature Scenery - 4K Ultra HD",
        platform: getPlatform(url),
        thumbnailUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        duration: "03:45",
        author: "Nature Channel",
        formats: [
          { id: '1', resolution: '4K', ext: 'mp4', size: '125.MB', hasAudio: true, url: '#' },
          { id: '2', resolution: '1080p', ext: 'mp4', size: '45.2 MB', hasAudio: true, url: '#' },
          { id: '3', resolution: '720p', ext: 'mp4', size: '22.1 MB', hasAudio: true, url: '#' },
          { id: '4', resolution: 'No Watermark', ext: 'mp4', size: '18.5 MB', hasAudio: true, url: '#' }, // Tiktok style
          { id: '5', resolution: 'Audio HQ', ext: 'mp3', size: '5.4 MB', hasAudio: true, url: '#' },
        ]
      });
    }, 1500);
  });
};

const getPlatform = (url: string) => {
  if (url.includes('youtube')) return 'youtube';
  if (url.includes('instagram')) return 'instagram';
  if (url.includes('tiktok')) return 'tiktok';
  if (url.includes('twitter') || url.includes('x.com')) return 'twitter';
  return 'other';
};
