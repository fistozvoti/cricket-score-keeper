const assert = require('assert');

const CricketScoreKeeper = require('../Cricket-Score-Keeper');

describe('cricket score keeper', function () {
    it('should be able to show zero if there is no points scored in 1 over', function () {
        const checkScore = CricketScoreKeeper();
        
        checkScore.addScore('-----');
        assert.equal(checkScore.getScore(), 0);
    });
    it('Should return the total of 0 when its an empty string', () => {
        const checkstring = CricketScoreKeeper();

        checkstring.addScore('');
        assert.equal(checkstring.getScore(), 0);
    });
    it('Should be able to count the totals of 12, 12 and 0 return the total of 13 runs with 3 overs entered', () => {
        const checkScore = CricketScoreKeeper();
        checkScore.settingOvers(5);

        checkScore.addScore('-46-2-');
        checkScore.addScore('-6-6-');
        assert.equal(checkScore.getScore(), 24);
    });
    it('Should be able to count the totals of 12 and 8 and the wickets in 2 overs', () => {
        const checkWickets = CricketScoreKeeper();
        checkWickets.settingOvers(5);

        checkWickets.addScore('w46-2w');
        checkWickets.addScore('-2w6w');
        assert.equal(checkWickets.getScore(), 20);
        assert.equal(checkWickets.checkWickets(),4);
    });
    it('Should be able to stop counting at 10 wickets and not take in the 11th wicket', () => {
        const checkingWickets = CricketScoreKeeper();
        checkingWickets.settingOvers(5);

        checkingWickets.addScore('wwwwww');
        checkingWickets.addScore('wwwww');
        assert.equal(checkingWickets.getScore(), 0);
        assert.equal(checkingWickets.checkWickets(),10);
    });
});