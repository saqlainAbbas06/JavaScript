// Build a Playlist Remix Engine
// In this lab, you will build a program that creates a single remix playlist from multiple playlists submitted by listeners.

// Each listener provides a list of songs they want to hear. Some songs may appear more than once, and some artists may show up too many times. Your job is to work through these playlists step by step: combine them into one list, score each song, remove duplicate songs, limit how often the same artist appears, and then create a final play order.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should create a function named flattenPlaylists that accepts an array of playlists where each playlist is an array of objects with the following properties: trackId, artist, title, votes, bpm. If the input is not an array, flattenPlaylists should return an empty array. An example playlist has been provided for you. You can use this example to test out your function.

// flattenPlaylists should return a flat array of track objects, where each object includes all the original track properties plus a source property set to an array with the playlist index and the track index indicating where the track originated.

// You should create a function named scoreTracks that accepts an array of track objects as returned by flattenPlaylists (each with trackId, artist, title, votes, bpm, and source properties) and returns a new array of track objects, each with a score property added using the formula: votes * 10 - Math.abs(bpm - 120).

// You should create a function named dedupeTracks that accepts an array of track objects as returned by scoreTracks and returns a new array with duplicate trackId entries removed, keeping only the first occurrence of each.

// You should create a function named enforceArtistQuota that accepts an array of track objects as returned by dedupeTracks and a number representing the maximum allowed occurrences per artist. The function should return a new array where no artist appears more times than the given number, keeping the earliest occurrences.

// You should create a function named buildSchedule that accepts an array of track objects as returned by enforceArtistQuota and returns a new array of { slot, trackId } objects, where slot is a 1-based index representing each track's position in the broadcast order.

// You should create a function named remixPlaylist that accepts an array of playlists and the maximum number of allowed occurrences per artist. The function should return the final broadcast schedule as an array of { slot, trackId } objects, by calling flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, and buildSchedule in order.


function flattenPlaylists(arr) { 
  const flatArr = []; 
  if (!Array.isArray(arr)) { return []; } 
  for (let i = 0; i < arr.length; i++) { 
    for (let j = 0; j < arr[i].length; j++) { 
      const track = arr[i][j]; 
      const flatObj = { 
        trackId: track.trackId, 
        artist: track.artist, 
        title: track.title, 
        votes: track.votes, 
        bpm: track.bpm, 
        source: [i, j] 
      }; 
      flatArr.push(flatObj); 
    } 
  } 
  return flatArr; 
} 

function scoreTracks(flatArr) { 
  const scoreArr = []; 
  for (const item of flatArr) { 
    const scoredTrack = { 
      ...item, 
      score: item.votes * 10 - Math.abs(item.bpm - 120) 
    }; 
    scoreArr.push(scoredTrack); 
  } 
  return scoreArr; 
} 

function dedupeTracks(scoreArr) { 
  const dedupeArr = []; 
  const seen = new Set(); 
  for (const item of scoreArr) { 
    if (!seen.has(item.trackId)) { 
      seen.add(item.trackId); 
      dedupeArr.push(item); 
    } 
  } 
  return dedupeArr; 
} 

function enforceArtistQuota(dedupeArr, maxNum) { 
  const quotaArr = []; 
  const artistCount = {}; 
  for (const item of dedupeArr) { 
    if (!artistCount[item.artist]) { 
      artistCount[item.artist] = 0; 
    } 
    if (artistCount[item.artist] < maxNum) { 
      quotaArr.push(item); 
      artistCount[item.artist]++; 
    } 
  } 
  return quotaArr; 
} 

function buildSchedule(quotaArr) { 
  const schedule = []; 
  for (let i = 0; i < quotaArr.length; i++) { 
    schedule.push({ slot: i + 1, trackId: quotaArr[i].trackId }); 
  } 
  return schedule; 
} 


function remixPlaylist(arrList, maxNum) { 
  const flatArr = flattenPlaylists(arrList); 
  const scoreArr = scoreTracks(flatArr); 
  
  scoreArr.sort((a, b) => b.score - a.score); 
  
  const dedupeArr = dedupeTracks(scoreArr); 
  const quotaArr = enforceArtistQuota(dedupeArr, maxNum); 
  const schedule = buildSchedule(quotaArr); 
  return schedule; 
} 


