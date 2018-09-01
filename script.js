// Global variables.
let results = [];

// Set user input DOM objects.
const slider = document.querySelector('.slider');
const number_output = document.querySelector('.output');

// Set movie result DOM objects.
const results_section = document.querySelector('#results_section');
const movie_poster_placeholder = document.querySelector('#poster');
const multiple_result = document.querySelector('#first_title');
const movie_result = document.querySelector('#first_title');
const scene_result = document.querySelector('#first_title');

// Initilize the slider number.
number_output.innerHTML = slider.value;
slider.oninput = function () {
    number_output.innerHTML = this.value;
}

// Gets called when the user clicks on the main button.
function main() {
    setPlayMultiple();
    setMovieResult();
    setSceneResult();
    setMovieResult();
    paintResults();
}

// Set the amount of time the user can watch the trilogy.
function setPlayMultiple() {
    results.multi = 1;
}

// Set which movie the user get's up to.
function setMovieResult() {
    if (slider.value < 198) {
        results.movie = 'Fellowship of the Ring';
        results.poster = 'fellowship-of-the-ring';
    } else if (slider.value > 384) {
        results.movie = 'Two Towers';
        results.poster = 'two-towers';
    } else {
        results.movie = 'Return of the King';
        results.poster = 'return-of-the-king';
    }
}

// Set which scene in the movie the user get's up to. Also sets the scene description.
function setSceneResult() {
    results.scene = "Prologue: One Ring to Rule Them All...";
    results.scene_desc = "Galadriel talks about what happened before the story.";
    // switch (true) {
    //     case (slider.value < 417):
    //         results.scene = "Prologue: One Ring to Rule Them All...";
    //         console.log('First scene hit.');
    //         break;
    //     default:
    //         results.scene = "The first scene.";
    //         console.log('Default hit');
    // }
}

// Clears the results section, then paints all the results into the tags.
function paintResults() {
    // Clear everything first.
    results_section.innerHTML = '<h3>You go up to...</h3><h1 id="title_tag"></h1><h4>Specifically, <i><span id="scene_tag"></span></i>. That\'s the one where <span id="scene_description_tag">very little happens</span>.<span id="multiple_tag"> This was after watching the entire trilogy</span></h4><h2 name="multiple_value_tag">3 times over!</h2><br><a onclick="resetPage()" class="go-button">Go again?</a>';

    // Set DOM variables.
    const title_tag = document.querySelector('#title_tag');
    const scene_tag = document.querySelector('#scene_tag');
    const scene_description_tag = document.querySelector('#scene_description_tag');
    // const multiple_tag = document.querySelector('#multiple_tag');
    // const multiple_tag_value = document.querySelector('#multiple_tag_value');

    title_tag.innerHTML = results.movie;
    scene_tag.innerHTML = results.scene;
    scene_description_tag.innerHTML = results.scene_desc;
    
}

// Returns the page to it's original state, as in what the user sees when they first open up the page.
function resetPage() {
    window.location.reload();
}


// ====================
// DEPRECATED FUNCTIONS

function showMoviePoster(movie) {
    console.log(movie);
    movie_poster_placeholder.src = `images/${movie}.jpg`;
    movie_poster_placeholder.scrollIntoView();
}