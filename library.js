const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  for (const playlistId in library.playlists) {
    const playlist = library.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
};

// Test the function
printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (const trackId in library.tracks) {
    const track = library.tracks[trackId];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

// Test the function
printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const playlist = library.playlists[playlistId];
  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  for (const trackId of playlist.tracks) {
    const track = library.tracks[trackId];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

// Test the function
printPlaylist('p01');

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const playlist = library.playlists[playlistId];
  if (playlist) {
    playlist.tracks.push(trackId);
    console.log(`Track with id ${trackId} added to playlist with id ${playlistId}`);
  } else {
    console.log(`Playlist with id ${playlistId} not found`);
  }
};

// Test the function
addTrackToPlaylist('t03', 'p01');
printPlaylist('p01'); // Check the updated playlist


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  const newTrackId = 't' + generateUid(); // Generate a unique ID for the new track
  const newTrack = { // Create a new track object
    id: newTrackId,
    name: name,
    artist: artist,
    album: album
  };
  library.tracks[newTrackId] = newTrack; // Add the new track to the library
  console.log(`Track added with ID: ${newTrackId}`);
};

// Test the function
addTrack("New Track", "New Artist", "New Album");
printTracks(); // Check the updated list of tracks


// adds a playlist to the library
const addPlaylist = function(name) {
  const newPlaylistId = 'p' + generateUid(); // Generate a unique ID for the new playlist
  const newPlaylist = { // Create a new playlist object
    id: newPlaylistId,
    name: name,
    tracks: []
  };
  library.playlists[newPlaylistId] = newPlaylist; // Add the new playlist to the library
  console.log(`Playlist added with ID: ${newPlaylistId}`);
};

// Test the function
addPlaylist("New Playlist");
printPlaylists(); // Check the updated list of playlists

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  console.log(`Search results for "${query}":`);
  for (const trackId in library.tracks) {
    const track = library.tracks[trackId];
    if (
      track.name.toLowerCase().includes(query.toLowerCase()) ||
      track.artist.toLowerCase().includes(query.toLowerCase()) ||
      track.album.toLowerCase().includes(query.toLowerCase())
    ) {
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  }
};

// Test the function
printSearchResults('Code');

// The reason we're not using the search method directly as suggested in the tip is that search returns the index of the first occurrence of a substring within a string, not a boolean indicating whether the substring exists within the string.
// In the case of the printSearchResults function, we need to determine if the query string is present in the track name, artist, or album. We're interested in a boolean result indicating whether the substring is present, not its index.
// For this purpose, using includes() method is more suitable. The includes() method returns true if the string contains the specified substring, and false otherwise, which aligns with our requirements.
// Using includes() with toLowerCase() allows us to perform a case-insensitive search, which is also a requirement specified in the comments. Therefore, the approach taken in the function printSearchResults is more appropriate for this use case compared to using search.
