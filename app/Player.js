/* jshint dojo:true */
define([
    "exports"
], function (exports) {
    var _playing;
    
    function Player() {
        _playing = false;
    }
    
    Player.prototype.isPlaying = function() {
        return _playing;
    };
    
    return Player;
});