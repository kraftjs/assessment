import { Duration, MaybeTimeDuration } from 'typed-duration'

// Define the MediaSegment interface
export interface MediaSegment {
  duration: MaybeTimeDuration;
  url: string;
}

// Define the MediaPlaylist class
export class MediaPlaylist {
  ended: boolean;
  segments: MediaSegment[];
  target_duration: MaybeTimeDuration;
  version: number;

  constructor(_segments: MediaSegment[], _duration: number, _version: number) {
    this.ended = false;
    this.segments = _segments;
    this.target_duration = Duration.seconds.from(_duration); // Initialize with the appropriate value
    this.version = _version;
  }

  // Define the parseExtM3U method
  static parseExtM3U(_file: string): MediaPlaylist {
    // You can implement the parsing logic here
    _file = _file.trim();
    if (!_file.startsWith('#EXTM3U')) {
      throw new Error('Input is not a valid .m3u8 file');
    }

    const segments = this.parseSegments(_file);
    const duration = this.parseDuration(_file);
    const version = this.parseVersion(_file);


    return new MediaPlaylist(segments, duration, version);
  }

  private static parseSegments(_file: string): MediaSegment[] {
    const result = []

    const lines = _file.split(/\r?\n/);
    for (let [index, line] of lines.entries()) {
      line = line.trim();
      if (line.startsWith('#EXTINF') && index + 2 < lines.length) {
        const [duration, _] = line.split(',');
        const url = lines[index + 2];

        const segment: MediaSegment = {
          duration: Duration.seconds.from(Number(duration)),
          url,
        }
        result.push(segment);
      }
    }

    return result
  }

  private static parseVersion(_file: string): number {
    let version = 0;

    const lines = _file.split(/\r?\n/);
    for (let line of lines) {
      line = line.trim();
      const tag = '#EXT-X-VERSION:'
      if (line.startsWith(tag)) {
        version = Number(line.slice(tag.length));
      }
    }

    return version;
  }

  private static parseDuration(_file: string): number {
    let duration = 0;

    const lines = _file.split(/\r?\n/);
    for (let line of lines) {
      line = line.trim();
      const tag = '#EXT-X-TARGETDURATION:'
      if (line.startsWith(tag)) {
        duration = parseInt(line.slice(tag.length));
      }
    }

    return duration;
  }
}

