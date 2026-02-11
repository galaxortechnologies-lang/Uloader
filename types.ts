export interface Format {
  id: string;
  resolution: string; // e.g., "1080p", "4k", "Audio"
  ext: string;       // e.g., "mp4", "mp3"
  size?: string;     // e.g., "15.4 MB"
  url: string;       // The download link
  hasAudio: boolean;
}

export interface VideoMetadata {
  title: string;
  platform: 'youtube' | 'instagram' | 'tiktok' | 'twitter' | 'other';
  thumbnailUrl: string;
  duration: string;
  author: string;
  formats: Format[];
}
