import { MediaPlaylist, MediaSegment } from '../src/media_playlist'
import { Duration, MaybeTimeDuration } from 'typed-duration'

const input = `
  #EXTM3U
  #EXT-X-VERSION:4
  #EXT-X-ALLOW-CACHE:NO
  #EXT-X-TARGETDURATION:20
  #EXT-X-MEDIA-SEQUENCE:1
  #EXT-X-PROGRAM-DATE-TIME:2015-08-25T01:59:23.708+00:00
  #EXTINF:12.166,
  #EXT-X-BYTERANGE:1430680@4048392
  segment_1440468394459_1440468394459_1.ts
  #EXTINF:13.292,
  #EXT-X-BYTERANGE:840360@5479072
  segment_1440468394459_1440468394459_1.ts
  #EXTINF:10.500,
  #EXT-X-BYTERANGE:1009184@6319432
  segment_1440468394459_1440468394459_1.ts
  #EXTINF:11.417,
  #EXT-X-BYTERANGE:806332@0
  segment_1440468394459_1440468394459_2.ts
  #EXTINF:12.459,
  #EXT-X-BYTERANGE:701616@806332
  segment_1440468394459_1440468394459_2.ts
  #EXTINF:14.000,
  #EXT-X-BYTERANGE:931352@1507948
  segment_1440468394459_1440468394459_2.ts
  #EXTINF:19.292,
  #EXT-X-BYTERANGE:1593676@2439300
  segment_1440468394459_1440468394459_2.ts
  #EXTINF:7.834,
  #EXT-X-BYTERANGE:657812@4032976
  segment_1440468394459_1440468394459_2.ts
  #EXT-X-ENDLISTv
`;

const expected_segments: Array<MediaSegment> = [
  {
    duration: Duration.seconds.from(12.166),
    url: "segment_1440468394459_1440468394459_1.ts"
  },
  {
    duration: Duration.seconds.from(13.292),
    url: "segment_1440468394459_1440468394459_1.ts"
  },
  {
    duration: Duration.seconds.from(10.500),
    url: "segment_1440468394459_1440468394459_1.ts"
  },
  {
    duration: Duration.seconds.from(11.417),
    url: "segment_1440468394459_1440468394459_2.ts"
  },
  {
    duration: Duration.seconds.from(12.459),
    url: "segment_1440468394459_1440468394459_2.ts"
  },
  {
    duration: Duration.seconds.from(14.000),
    url: "segment_1440468394459_1440468394459_2.ts"
  },
  {
    duration: Duration.seconds.from(19.292),
    url: "segment_1440468394459_1440468394459_2.ts"
  },
  {
    duration: Duration.seconds.from(7.834),
    url: "segment_1440468394459_1440468394459_2.ts"
  }
];

const result = MediaPlaylist.parseExtM3U(input);
const segments = result.segments.map((segment, i) => [segment, expected_segments[i]]);

describe('The playlist', () => {
  it('has a version of 4', () => {
    expect(result.version).toBe(4);
  });

  it('has a target_duration of 20', () => {
    expect(result.target_duration).toBe(20);
  });

  it('has ended', () => {
    expect(result.ended).toBeTruthy();
  });

  it('has the expected number of segments', () => {
    expect(result.segments.length).toBe(expected_segments.length);
  });

  it('has the same values as the expected segments', () => {
    result.segments.forEach((received, i) => {
      expect(received).toStrictEqual(expected_segments[i]);
    });
  });
});
