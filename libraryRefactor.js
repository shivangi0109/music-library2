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
  },

  // Method to print all playlists
  printPlaylists: function() {
    for (const playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },

  // Method to print all tracks
  printTracks: function() {
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  // Method to print tracks of a playlist
  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (const trackId of playlist.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  // Method to add a track to a playlist
  addTrackToPlaylist: function(trackId, playlistId) {
    const playlist = this.playlists[playlistId];
    if (playlist) {
      playlist.tracks.push(trackId);
      console.log(`Track with id ${trackId} added to playlist with id ${playlistId}`);
    } else {
      console.log(`Playlist with id ${playlistId} not found`);
    }
  },

  // Method to add a track to the library
  addTrack: function(name, artist, album) {
    const newTrackId = 't' + this.generateUid(); // Generate a unique ID for the new track
    const newTrack = { // Create a new track object
      id: newTrackId,
      name: name,
      artist: artist,
      album: album
    };
    this.tracks[newTrackId] = newTrack; // Add the new track to the library
    console.log(`Track added with ID: ${newTrackId}`);
  },

  // Method to add a playlist to the library
  addPlaylist: function(name) {
    const newPlaylistId = 'p' + this.generateUid(); // Generate a unique ID for the new playlist
    const newPlaylist = { // Create a new playlist object
      id: newPlaylistId,
      name: name,
      tracks: []
    };
    this.playlists[newPlaylistId] = newPlaylist; // Add the new playlist to the library
    console.log(`Playlist added with ID: ${newPlaylistId}`);
  },

  // Method to generate a unique ID
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  // Method to search tracks by name, artist, or album
  printSearchResults: function(query) {
    console.log(`Search results for "${query}":`);
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      if (
        track.name.toLowerCase().includes(query.toLowerCase()) ||
        track.artist.toLowerCase().includes(query.toLowerCase()) ||
        track.album.toLowerCase().includes(query.toLowerCase())
      ) {
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
      }
    }
  }
};

// Test the methods
library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t03', 'p01');
library.printPlaylist('p01');
library.addTrack("New Track", "New Artist", "New Album");
library.printTracks();
library.addPlaylist("New Playlist");
library.printPlaylists();
library.printSearchResults('Code');