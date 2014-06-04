$(document).on('ready', function() {


// LIST OF ALL EXERCISES PAGE BUTTON HANDLERS ------------------------------------------ALL-----


	var exerciseListTemplate = $('#exercise-list-template');
	var exerciseListText = exerciseListTemplate.html();
		// console.log(exerciseListText);
		if (exerciseListText)
			var templateOne = Handlebars.compile(exerciseListText);


// LIST UPPER BODY HANDLER  

	$('#list-upper-btn').on('click', function() {
		if ($('#upper-list').children().length>0) {
			$('#upper-list').empty();
		}
		else {
			for (var i=0; i<exerciseData.upperBody.length; i++) {
				var outputHtmlOne = templateOne(exerciseData.upperBody[i])
				$('#upper-list').append(outputHtmlOne)
			};
		}
	});

// LIST LOWER BODY HANDLER  

	$('#list-lower-btn').on('click', function() {
		if ($('#lower-list').children().length>0) {
				$('#lower-list').empty();
		}
		else {
			for (var i=0; i<exerciseData.lowerBody.length; i++) {
				var outputHtmlOne = templateOne(exerciseData.lowerBody[i])
				$('#lower-list').append(outputHtmlOne)
			};
		}
	});

// LIST CARDIO HANDLER  

	$('#list-cardio-btn').on('click', function() {
		if ($('#cardio-list').children().length>0) {
			$('#cardio-list').empty();
		}
		else {
			for (var i=0; i<exerciseData.cardio.length; i++) {
				var outputHtmlOne = templateOne(exerciseData.cardio[i])
				$('#cardio-list').append(outputHtmlOne)
			};
		}
	});

// LIST CORE HANDLER  

	$('#list-core-btn').on('click', function() {
		if ($('#core-list').children().length>0) {
			$('#core-list').empty();
		}
		else {
			for (var i=0; i<exerciseData.core.length; i++) {
				var outputHtmlOne = templateOne(exerciseData.core[i])
				$('#core-list').append(outputHtmlOne)
			};
		}
	});

// LIST TOTAL BODY HANDLER  

	$('#list-total-btn').on('click', function() {
		if ($('#total-list').children().length>0) {
			$('#total-list').empty();
		}
		else {
			// change 8 back to exerciseData.totalBody.length, add if statement
			for (var i=0; i<8; i++) {
				var outputHtmlOne = templateOne(exerciseData.totalBody[i], exerciseData.core[i], exerciseData.cardio[i])
				$('#total-list').append(outputHtmlOne)
			};
		}
	});


	$(document).on('click', '.description-btn', function() {
		$('.exercise-description').css('display', 'none')
		$(this).closest('.exercise-list-style-attr').next().css('display', 'block')
	})


// CREATE A RANDOM WORKOUT PAGE BUTTON HANDLERS --------------------------------------RANDOM-------


	var randomWorkoutTemplate = $('#random-workout-template');
	var randomWorkoutText = randomWorkoutTemplate.html();
		// console.log(randomWorkoutText);
		if (randomWorkoutText)
			var templateTwo = Handlebars.compile(randomWorkoutText);


// RANDOM UPPER BODY HANDLER

	$('#random-upper-btn').on('click', function() {
		if ($('#upper-random').children().length>0) {
			$('#upper-random').empty();
		}
		else {
			var randomExercises = _.shuffle(exerciseData.upperBody);
			var activeNumber = parseInt($('.active').text())
			for (var i=0; i<activeNumber; i++) {
				var outputHtmlTwo = templateTwo(randomExercises[i])
				$('#upper-random').append(outputHtmlTwo)
				console.log(randomExercises[i])
			};
		}
	});

// RANDOM LOWER BODY HANDLER

	$('#random-lower-btn').on('click', function() {
		if ($('#lower-random').children().length>0) {
			$('#lower-random').empty();
		}
		else {
			var randomExercises = _.shuffle(exerciseData.lowerBody);
			var activeNumber = parseInt($('.active').text())			
			for (var i=0; i<activeNumber; i++) {
				var outputHtmlTwo = templateTwo(randomExercises[i])
				$('#lower-random').append(outputHtmlTwo)
				console.log(randomExercises[i])				
			};
		}
	});

// RANDOM CARDIO HANDLER

	$('#random-cardio-btn').on('click', function() {
		if ($('#cardio-random').children().length>0) {
			$('#cardio-random').empty();
		}
		else {
			var randomExercises = _.shuffle(exerciseData.cardio);
			var activeNumber = parseInt($('.active').text())			
			for (var i=0; i<activeNumber; i++) {
				var outputHtmlTwo = templateTwo(randomExercises[i])
				$('#cardio-random').append(outputHtmlTwo)
				console.log(randomExercises[i])				
			};
		}
	});

// RANDOM CORE HANDLER

	$('#random-core-btn').on('click', function() {
		if ($('#core-random').children().length>0) {
			$('#core-random').empty();
		}
		else {
			var randomExercises = _.shuffle(exerciseData.core);
			var activeNumber = parseInt($('.active').text())			
			for (var i=0; i<activeNumber; i++) {
				var outputHtmlTwo = templateTwo(randomExercises[i])
				$('#core-random').append(outputHtmlTwo)
				console.log(randomExercises[i])				
			};
		}
	});

// RANDOM TOTAL BODY HANDLER
	$('#random-total-btn').on('click', function() {
		if ($('#total-random').children().length>0) {
			$('#total-random').empty();
		}
		else {
			var randomExercises = _.shuffle(exerciseData.totalBody);
			var activeNumber = parseInt($('.active').text())
			for (var i=0; i<activeNumber; i++) {
				var outputHtmlTwo = templateTwo(randomExercises[i])
				$('#total-random').append(outputHtmlTwo)
				console.log(randomExercises[i])							
			};
		}
	});

// MAKE BUTTON CLASS ACTIVE

	$(document).on('click', '.num-btns', function() {
		$('.num-btns').removeClass('active')
		$(this).addClass('active')
	})


// CREATE YOUR OWN WORKOUT PAGE BUTTON HANDLERS --------------------------------------OWN-------


var ownWorkoutTemplate = $('#own-workout-template');
	var ownWorkoutText = ownWorkoutTemplate.html();
		// console.log(ownWorkoutText);
		if (ownWorkoutText)
			var templateThree = Handlebars.compile(ownWorkoutText);

// OWN UPPER BODY HANDLER

	$('#own-upper-btn').on('click', function() {
		if ($('#upper-own').children().length>0) {
			$('#upper-own').empty();
		}
		else {
			for (var i=0; i<exerciseData.upperBody.length; i++) {
				var outputHtmlThree = templateThree(exerciseData.upperBody[i])
				$('#upper-own').append(outputHtmlThree)
			};
		}
	});

// OWN LOWER BODY HANDLER

	$('#own-lower-btn').on('click', function() {
		if ($('#lower-own').children().length>0) {
			$('#lower-own').empty();
		}
		else {
			for (var i=0; i<exerciseData.lowerBody.length; i++) {
				var outputHtmlThree = templateThree(exerciseData.lowerBody[i])
				$('#lower-own').append(outputHtmlThree)
			};
		}
	});

// OWN CARDIO HANDLER

	$('#own-cardio-btn').on('click', function() {
		if ($('#cardio-own').children().length>0) {
			$('#cardio-own').empty();
		}
		else {
			for (var i=0; i<exerciseData.cardio.length; i++) {
				var outputHtmlThree = templateThree(exerciseData.cardio[i])
				$('#cardio-own').append(outputHtmlThree)
			};
		}
	});

// OWN CORE HANDLER

	$('#own-core-btn').on('click', function() {
		if ($('#core-own').children().length>0) {
			$('#core-own').empty();
		}
		else {
			for (var i=0; i<exerciseData.core.length; i++) {
				var outputHtmlThree = templateThree(exerciseData.core[i])
				$('#core-own').append(outputHtmlThree)
			};
		}
	});

// OWN TOTAL BODY HANDLER

	$('#own-total-btn').on('click', function() {
		if ($('#total-own').children().length>0) {
			$('#total-own').empty();
		}
		else {
			// change 8 back to exerciseData.totalBody.length, add if statement
			for (var i=0; i<8; i++) {
				var outputHtmlThree = templateThree(exerciseData.totalBody[i])
				$('#total-own').append(outputHtmlThree)
			};
		}
	});


// OWN WORKOUT ADD BUTTON HANDLER

	var addedWorkoutTemplate = $('#added-workout-template');
	var addedWorkoutText = addedWorkoutTemplate.html();
		// console.log(addedWorkoutText);
		if (addedWorkoutText)
			var templateFour = Handlebars.compile(addedWorkoutText);

	$(document).on('click', '.add-own-btn', function() {
		var exerciseName = $(this).closest('.add-exercise').find('span').text();
		var outputHtmlFour = templateFour({name: exerciseName})
		$('.added-exercises-border').css('display', 'block')
		$('#added-exercises').append(outputHtmlFour)

	});

	$(document).on('click', '.remove-btn', function() {
		$(this).closest('ul').remove();
	})

});

// TIMER / STOPWATCH PAGE BUTTON HANDLERS --------------------------------------TIMER / STOPWATCH-------

var AppStopwatch = (function () {
    var counter = 1,
        $stopwatch = {
            el: document.getElementById('stopwatch'),
            container: document.getElementById('time-container'),
            startControl: document.getElementById('start'),
            stopControl: document.getElementById('stop'),
            resetControl: document.getElementById('reset')
        };

    var runClock;

    function displayTime() {
        $stopwatch.container.innerHTML = moment().second(counter++).format('ss');
    }

    // function displayTime() {
    //     $stopwatch.container.innerHTML = moment().hour(0).minute(0).second(counter++).format('HH : mm : ss');
    // }

    function startWatch() {
        runClock = setInterval(displayTime, 1000);
    }

    function stopWatch() {
        clearInterval(runClock);
    }

    function resetWatch() {
        clearInterval(runClock); 
    	counter = 1;
        $stopwatch.container.innerHTML = moment().second(0).format('ss');           
    }

    return {
        startClock: startWatch,
        stopClock: stopWatch,
        resetClock: resetWatch,
        $start: $stopwatch.startControl,
        $stop: $stopwatch.stopControl,
        $reset: $stopwatch.resetControl,
    };
})();

AppStopwatch.$start.addEventListener('click', AppStopwatch.startClock, false);
AppStopwatch.$stop.addEventListener('click', AppStopwatch.stopClock, false);
AppStopwatch.$reset.addEventListener('click', AppStopwatch.resetClock, false);


// USING LETTER.JS TO ROUND THE HOME PAGE LOGO --------------------------------------------------------

	$(document).ready(function() {
    	$(".round-letter").lettering();
  	});






