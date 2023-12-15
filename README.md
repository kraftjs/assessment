# HLS Parsing

## HLS

> HTTP Live Streaming (also known as HLS) is an [HTTP][http]-based [adaptive
> bitrate streaming][abr] communications protocol developed by [Apple
> Inc.][apple] and released in 2009. Support for the protocol is widespread in
> media players, web browsers, mobile devices, and streaming media servers. As
> of 2019, an annual video industry survey has consistently found it to be the
> most popular streaming format.
>
> -- <cite>[Wikipedia][wiki]</cite>

HLS is also what the majority of Disney streaming video products are built on
top of. This protocol breaks down the stream into a series of small media files
which are accessible via HTTP. These files are downloaded sequentially and
played in order to stream the entire presentation. This protocol is defined for
players using [ext-m3u][m3u] format. This file, which has an .m3u8 extension
(the 8 indicating that the file is utf-8 encoded), defines the locations of all
of the media files that need to be downloaded as well as metadata about the
stream. A specification for this format is available [here][spec].

## Challenge

The task for this project is to implement an API which can parse an m3u8 file
to pass the test suite. We are providing a sample m3u8 file as a reference for
you. [This is the infamous (in the streaming world, at least) Big Buck
Bunny][big_buck_bunny].

### Requirements

- Implement the parsing API to read m3u8 files and **pass
  the test suite** (and any new tests you may write!).
- You do not need to parse any extra data not required for the test suite.
- You do not need to validate the entire m3u8 rigorously, but you should
  provide appropriate error handling for the data required for the test suite.
- Please do not use an existing HLS parsing library.
- It is acceptable to use other external crates and resources.
    - If referencing external code, add a comment with context, i.e., the site,
      the motivation, etc.
- Feel free to move/rearrange/create files and change the public API.
- The code will be evaluated based on correctness and readibility.

Please use pull requests to propose your work.

Please do not spend more than 4 hours on the project.

[abr]: https://en.wikipedia.org/wiki/Adaptive_bitrate_streaming
[apple]: https://en.wikipedia.org/wiki/Apple_Inc.
[big_buck_bunny]: https://docs.evostream.com/sample_content/assets/hls-bunny-rangerequest/bunny/playlist.m3u8
[http]: https://en.wikipedia.org/wiki/HTTP
[m3u]: https://en.wikipedia.org/wiki/M3U#Extended_M3U
[spec]: https://datatracker.ietf.org/doc/html/rfc8216#section-4
[wiki]: https://en.wikipedia.org/wiki/HTTP_Live_Streaming

