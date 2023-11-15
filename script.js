function searchLyrics() {
    const artist = document.getElementById('artist').value.trim();
    const song = document.getElementById('song').value.trim();
  
    if (artist === '' || song === '') {
      alert('Please enter both artist and song name.');
      return;
    }
  
    fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch lyrics');
        }
      })
      .then(data => {
        displayLyrics(data.lyrics);
      })
      .catch(error => {
        console.error('Error:', error);
        displayLyrics('Lyrics not found.');
      });
  }
  
  function displayLyrics(lyrics) {
    const lyricsContainer = document.getElementById('lyrics-container');
    lyricsContainer.innerHTML = lyrics ? `<pre>${lyrics}</pre>` : 'Lyrics not found.';
  }
  