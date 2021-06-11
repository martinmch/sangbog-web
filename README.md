# visynger.dk

This project is a wrapper around hugo and pandoc to generate a songbook website.
The goal is generate a website and eventually pdf collections of songs.
A very cool feature could be to be able to select multiple songs or authors, and
generate song books directly. With and without chords.

## Goals

[] Write software that generates hugo files from chordpro directory
    parser :: file -> chordProFile
    formatter :: chordProFile -> markdown

## Definitions:

Contributor
: A github user from the specified path (if the path is a git repo)

Artist
: The person or group performing a given song.

Collection
: Multiple songs grouped and converted to a pdf file.

Tags
: Zero or more words used to group songs.

## Input

Path to a directory containing one or more chord pro files.

## Output

A directory containing a full static website including

- Front page with all contributors (github info + link)
- Artist page with all song artists
- Song page with all songs
- Collection page contains links to pdfs.



## Todo

- Find all chordpro files recursively in a directory
- Parse chordpro files
- Generate static page with songinfo, lyrics and chords.
- Generate static page with all
    - collections
    - songs
    - artists
    - categories
    - tags
- Generate static page for each
    - artist
    - song
        + songinfo (metadata)
        + lyrics
        + chords
- Generate overview page
