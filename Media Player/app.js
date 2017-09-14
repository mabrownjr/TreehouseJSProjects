var playlist = new Playlist();

var billyJean = new Song("Billy Jean", "Michael Jackson", "3:05");
var alright = new Song("Alright", "Kendrick Lamar", "4:00");
var allWeGot = new Song("All We Got", "Chance the Rapper", "2:35");
var manOfSteel = new Movie("Man of Steel", 2013, "2:23:60");

playlist.add(billyJean);
playlist.add(alright);
playlist.add(allWeGot);
playlist.add(manOfSteel);

var playlistElement = document.getElementById('playlist');

playlist.renderIn(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function () {
  playlist.play();
  playlist.renderIn(playlistElement);
}
var nextButton = document.getElementById('next');
nextButton.onclick = function () {
  playlist.next();
  playlist.renderIn(playlistElement);
}
var stopButton = document.getElementById('stop');
stopButton.onclick = function () {
  playlist.stop();
  playlist.renderIn(playlistElement);
}
