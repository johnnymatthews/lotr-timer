// Set all the objects.
const slider = document.querySelector('.slider');
const number_output = document.querySelector('.output');
const movie_poster_placeholder = document.querySelector('#poster');
const first_title = document.querySelector('#first_title');

// String variables.
const got_to = ""

// Initilize the slider number.
number_output.innerHTML = slider.value;
slider.oninput = function () {
    number_output.innerHTML = this.value;
}

// Gets called when the user clicks on the main button.
function main() {
    document.querySelector('#results_section').innerHTML = '<h3>You go up to...</h3><h1 id="first_title">The Two Towers!</h1><h4>Specifically, <i><span name="scene">Foundation\'s of Stone</span></i>. That\'s the one where <span name="scene_description">very little happens</span>.<span name="multiple_intro"> This was after watching the entire trilogy</span></h4><h2><span name="multiple">3</span> times over!</h2><br><a onclick="resetPage()" class="go-button">Go again?</a>';
    returnMovieDetails();
}

function returnMovieDetails() {
    if (slider.value < 30) {
        first_title.innerHTML = 'Fellowship of the Ring';
    } else if (slider.value > 90) {
        first_title.innerHTML = 'Two Towers';
    } else {
        first_title.innerHTML = 'Return of the King';
    }

    switch (true) {
        case (user_input < 417):
            output_scene = ("Prologue: One Ring to Rule Them All...");
            break;
        default:
            console.log('Default hit');
    }
}

function showMoviePoster(movie) {
    console.log(movie);
    movie_poster_placeholder.src = "images/" + movie;
    movie_poster_placeholder.scrollIntoView();
}

// Returns the page to it's original state, as in what the user sees when they first open up the page.
function resetPage() {
    window.location.reload();
    // document.querySelector('#results_section').innerHTML = `<h1 id="first_title" class="mb-1">Lord of the Rings <br> <i>Timer</i></h1><p>Set the time, press the button, and find out where you get up to in the greatest movie trilogy of all time.</p><h2>I\'ve got <span class="output">${slider.max / 2}</span> hours to burn</h2><br><input type="range" class="slider" min=1 max=168><br><a onclick="main()" class="go-button">To Isengard!</a>`
}

console.log(slider);