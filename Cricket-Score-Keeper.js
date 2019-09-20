module.exports = function CricketScoreKeeper() {

    var totalScore = 0;
    var totalWickets = 0;
    var howManyWickets = 0;

    function addScore(string) {
        var score = 0;
        var strng = string || ''
        let newString = strng.split('');

        if (totalWickets < 10) {
            for (let i = 0; i < newString.length; i++) {
                const element = newString[i];

                if (element === '1') {
                    score += 1;
                }
                if (element === '2') {
                    score += 2;
                }
                if (element === '3') {
                    score += 3;
                }
                if (element === '4') {
                    score += 4;
                }
                if (element === '6') {
                    score += 6;
                }
                else if (element === 'w' && totalWickets < 10) {
                    totalWickets++;
                }
            }
            totalScore += score

        } 
    }

    function settingOvers(number) {
        howManyWickets = number;
    }

    function checkWickets() {
        return totalWickets;
    }

    function getScore() {
        return totalScore;
    }


    return {
        getScore,
        addScore,
        settingOvers,
        checkWickets
    }
}