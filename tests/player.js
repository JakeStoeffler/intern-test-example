/* jshint dojo:true */
/* global describe, beforeEach, it, expect */
define([
    'intern!bdd',
    'intern/chai!expect',
    'app/Player'
], function (bdd, expect, Player) {
    with (bdd) {
        describe("Player", function() {
            var player;
            
            beforeEach(function() {
                player = new Player();
            });
            
            it("should have a playing state", function() {
                // Playing state is not null or undefined
                expect(player.isPlaying()).to.exist;
            });
            
            it("should not be playing when it starts", function() {
                expect(player.isPlaying()).to.be.false;
            });
            
            
        });
    }
});