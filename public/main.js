window.onload({
  var templateSource = document.getElementById('results-template');
  // var template = Handlebars.compile(templateSource);
  var resultsPlaceholder = document.querySelector('#results');

  var fetchTracks = function (albumId, callback) {
    $.ajax({
      url: 'https://api.spotify.com/v1/tracks'+trackID,
      success: function (res) {
        res.JSON(res)
      }
    });
  }

  var searchAlbums = function (query) {
    $.ajax({
      url: 'https://api.spotify.com/v1/search',
      data: {
        q: query,
        type: 'album'
      },
      success: function(res){
        resultsPlaceholder.innerHTML = templateSource(res)
      }
    });
  }

  results.addEventListener('click', function(e){
    var target = e.target
    fetchTracks(target.getAttribute('data-album-id', function (data) {

    }));
  });

  document.querySelector('.search').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(document.querySelector('#query').value);
  }, false);

});
