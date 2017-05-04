$(document).ready(function () {

    let wordsArray = ['door', 'core', 'tape', 'lose', 'week', 'easy', 'lack', 'line', 'able', 'pour', 'cute', 'post', 'soak', 'tank', 'bite', 'fade', 'rent', 'pool', 'wage', 'hand', 'hide', 'tire', 'pump', 'jest', 'take', 'spin', 'move', 'prey', 'warm', 'cave', 'head', 'dine', 'pass', 'bike', 'shed', 'stab', 'orgy', 'mass', 'goal', 'lily', 'baby', 'pray', 'news', 'dorm', 'pace', 'quit', 'care', 'hate', 'dome', 'rule', 'myth', 'date', 'trip', 'duck', 'road', 'nest', 'sand', 'army', 'rare', 'loan', 'flow', 'bill', 'lead', 'bolt', 'fast', 'tune', 'knit', 'mask', 'roof', 'bird', 'leak', 'lake', 'fair', 'sour', 'hole', 'give', 'item', 'rate', 'gown', 'lamp', 'leaf', 'mark', 'roll', 'list', 'calm', 'pier', 'rape', 'sale', 'chip', 'hook', 'area', 'mind', 'knee', 'rage', 'cafe', 'stem', 'deer', 'rich', 'lift', 'call', 'mile', 'duty', 'disk', 'miss', 'main', 'foot', 'bell', 'hold', 'grow', 'bold', 'soil', 'navy', 'half', 'girl', 'park', 'feed', 'tick', 'open', 'frog', 'meet', 'halt', 'term', 'hard', 'note', 'dose', 'toss', 'bond', 'turn', 'hero', 'hell', 'part', 'snub', 'vain', 'echo', 'talk', 'coat', 'file', 'tile', 'wake', 'wolf', 'zero', 'hair', 'edge', 'golf', 'fuss', 'wall', 'pack', 'hurt', 'thaw', 'gate', 'seal', 'slip', 'tray', 'chin', 'pity', 'cast', 'lane', 'firm', 'fist', 'fail', 'boat', 'pill', 'good', 'belt', 'plan', 'skin', 'text', 'beat', 'home', 'bank', 'scan', 'raid', 'spot', 'fuel', 'gain', 'hill', 'horn', 'coin', 'deal', 'loop', 'high', 'crop', 'fine', 'mole', 'beef', 'sock', 'suit', 'trap', 'seem', 'neck', 'drug', 'burn', 'bake', 'page', 'rice', 'wild', 'axis', 'path', 'beer', 'self', 'wife', 'copy', 'fill', 'node', 'twin', 'safe', 'stop', 'wine', 'well', 'step', 'soar', 'role', 'tone', 'game', 'blow', 'huge', 'hurl', 'taxi', 'swim', 'card', 'star', 'wave', 'stun', 'slap', 'lion', 'eaux', 'glue', 'fish', 'cart', 'band', 'left', 'word', 'coal', 'cash', 'play', 'inch', 'kill', 'soul', 'mean', 'fear', 'clue', 'toll', 'vein', 'kick', 'club', 'east', 'spit', 'tube', 'desk', 'fold', 'aunt', 'mold', 'fork', 'risk', 'beam', 'lamb', 'pest', 'pawn', 'sign', 'case', 'deny', 'form', 'stay', 'live', 'slab', 'bomb', 'swop', 'drag', 'hike', 'body', 'late', 'gene', 'flag', 'want', 'maid', 'feel', 'gasp', 'find', 'arch', 'bind', 'corn', 'lace', 'palm', 'fare', 'poem', 'test', 'lend', 'roar', 'slow', 'idea', 'shot', 'name', 'riot', 'free', 'king', 'book', 'fund', 'drop', 'draw', 'dive', 'salt', 'zone', 'dawn', 'meal', 'herb', 'peel', 'fame', 'tent', 'dish', 'cool', 'fire', 'code', 'lock', 'jump', 'heir', 'bang', 'glow', 'rain', 'coma', 'herd', 'Mars', 'soup', 'time', 'heat', 'pair', 'sigh', 'silk', 'debt', 'seek', 'wing', 'even', 'wear', 'sink', 'deck', 'blue', 'root', 'hang', 'just', 'wrap', 'maze', 'year', 'bare', 'dark', 'fool', 'mist', 'will', 'ride', 'bait', 'flex', 'ruin', 'crew', 'film', 'dead', 'dare', 'chop', 'walk', 'boom', 'dash'];

    //Select all html elements
    let circle1 = document.getElementById('circle1');
    let circle2 = document.getElementById('circle2');
    let circle3 = document.getElementById('circle3');
    let circle4 = document.getElementById('circle4');

    let score = document.getElementById('score');

    let char1 = document.getElementById('char1');
    let char2 = document.getElementById('char2');
    let char3 = document.getElementById('char3');
    let char4 = document.getElementById('char4');

    let btnScore = document.getElementById('btnScore');

    let randomIndex;
    let randomElement;
    let charElement;

    let wordsArr = [];

    let num1;
    let num2;
    let num3;
    let num4;

    let seconds = 15;

    let a = [0, 1, 2, 3];


    //Get a random string from the array
    randomLetters();

    function randomLetters() {
        randomIndex = Math.floor(Math.random() * wordsArray.length);
        randomElement = wordsArray[randomIndex].toUpperCase();
        charElement = randomElement.split('');
    }

    console.log(randomElement);

    //Getting random array of numbers from 0 to 4
    function shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

    a = shuffle(a);


    //Splice the string into seperate characters
    spliceStringIntoLetters();

    function spliceStringIntoLetters() {
        num1 = randomElement.charAt(a[0]).toUpperCase();
        num2 = randomElement.charAt(a[1]).toUpperCase();
        num3 = randomElement.charAt(a[2]).toUpperCase();
        num4 = randomElement.charAt(a[3]).toUpperCase();
    }

    //Add the characters to the circles  
    addLettersToCircle();

    function addLettersToCircle() {
        circle1.innerText = num1;
        circle2.innerText = num2;
        circle3.innerText = num3;
        circle4.innerText = num4;
    }

    // Fadeout effect when clicked on the charachters and add clicked charachters to the top field.
    $("#circle1").click(function () {
        $("#circle1").toggle();
        wordsArr.push(circle1.innerText);
        addClass();
        addChar();
    });

    $("#circle2").click(function () {
        $("#circle2").toggle();
        wordsArr.push(circle2.innerText);
        addClass();
        addChar();
    });

    $("#circle3").click(function () {
        $("#circle3").toggle();
        wordsArr.push(circle3.innerText);
        addClass();
        addChar();
    });

    $("#circle4").click(function () {
        $("#circle4").toggle();
        wordsArr.push(circle4.innerText);
        addClass();
        addChar();
    });


    // Here we are adding the letters to the top field, result field.
    function addChar() {
        if (wordsArr.length == 1) {
            removeShake();
            char1.innerText = wordsArr[0];
        } else if (wordsArr.length == 2) {
            char2.innerText = wordsArr[1];
        } else if (wordsArr.length == 3) {
            char3.innerText = wordsArr[2];
        } else if (wordsArr.length == 4) {
            char4.innerText = wordsArr[3];
            if (!$('#char4').is(':empty')) {

                setTimeout(toogleLetters, 300);
                checkIfEqual(wordsArr, randomElement);
            }
        }
    }


    // Add css class to the words whenever they are added to the top field, result field.
    function addClass() {
        if (wordsArr.length == 1) {
            $('#char1').addClass('letters').hide().fadeIn('fast');
        } else if (wordsArr.length == 2) {
            $('#char2').addClass('letters').hide().fadeIn('fast');
        } else if (wordsArr.length == 3) {
            $('#char3').addClass('letters').hide().fadeIn('fast');
        } else if (wordsArr.length == 4) {
            $('#char4').addClass('letters').hide().fadeIn('fast');
        }
    }

    function showClass() {
        circle1.style.display = 'block';
        circle2.style.display = 'block';
        circle3.style.display = 'block';
        circle4.style.display = 'block';
    }


    // Check if the arrays are same, we will need this for the score.
    //on the last click we need to run this function
    function checkIfEqual(a1, a2) {
        if (a1.length == a2.length && a1.every((v, i) => v === a2[i])) {
            
            wordsArr = [];
            score.innerText++;
            seconds += 5;
            
            randomLetters();
            shuffle(a);
            spliceStringIntoLetters();
            addLettersToCircle();
            showClass();

            console.log(randomElement);

        } else {

            wordsArr = [];
            addShake();
            randomLetters();
            shuffle(a);
            spliceStringIntoLetters();
            addLettersToCircle();
            showClass();

            console.log(randomElement);
        }

    }

    function toogleLetters() {
        if (char4.innerText !== "") {
            $(".wordsCircle > p").css("display", "none");
        }
    }

    //TIMER
    function countdown() {

        function tick() {
            let counter = document.getElementById("timer");
            seconds--;
            counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {

                swal({
                        title: "You lose! It was" + " " + randomElement + " " + "!",
                        text: "Refresh the page to play again:",
                        type: "input",
                        showCancelButton: true,
                        closeOnConfirm: false,
                        animation: "slide-from-top",
                        inputPlaceholder: "Write your name"
                    },
                    function (inputValue) {
                        if (inputValue === false) return false;

                        if (inputValue === "") {
                            swal.showInputError("Write your name!");
                            return false
                        }

                        //Keeping the score
                        name = inputValue;
                        scoreNumber = score.innerText;
                        hiscore.name = name;
                        hiscore.scoreNumber = scoreNumber;
                        jsonFunction();
                        swal("Nice!", "You wrote: " + inputValue, "success");

                    });
            }
        }
        tick();
    }

    //if (drophistory.length > 10) drophistory = drophistory.slice(0, 10); KE ni treba da ogranicime arraya

    //Keeping the score
    let hiscore = {};
    let name;
    let scoreNumber;

    function jsonFunction() {
        let drophistory = JSON.parse(localStorage.getItem("scoreJson")) || [];

        drophistory.push(hiscore);
        localStorage.setItem("scoreJson", JSON.stringify(drophistory));


    }

    let displayScore = document.getElementById('displayScore');
    let getItmes = [];

    //Get the score and name from the local storage
    $('#btnScore').click(function () {
        console.clear();
        getItmes = JSON.parse(localStorage.getItem("scoreJson"));

        //sort the array from higest to lowest score
        function compare(a, b) {
            let comparison = 0;
            if (a.scoreNumber > b.scoreNumber) {
                comparison = -1;
            } else if (a.scoreNumber < b.scoreNumber) {
                comparison = 1;
            }
            return comparison;
        }
        getItmes.sort(compare);
        displayScore.innerText = '';
        let counter = 0;

        for (var i = 0; i < 5; i++) {
            var element = getItmes[i];
            counter++;
            displayScore.innerText += (`${counter}: ${element.name} | Score: ${element.scoreNumber}\n`);
            
            console.log(`Player: ${element.name} | Score: ${element.scoreNumber}`);
        }
        
    });


    countdown();

    //adds shaking animation when the words are inccorect
    function addShake() {
        $('.wordsCircle > p').addClass('woble');
    }
    //removes the shaking animation
    function removeShake() {
        $('.wordsCircle > p').removeClass('woble');
    }


});
