function make_album(artist_name, album_title, tarcks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tarcks !== undefined) {
        album.tracks = tarcks;
    }
    return album;
}
var album1 = make_album("Maaz", "Album title 1");
console.log(album1);
var album2 = make_album("Farhad", "Album title 2");
var album3 = make_album("Kabir", "Album title 3", 10);
console.log(album2);
console.log(album3);
