$(document).ready(function() {
    const dateSlider = document.getElementById("dateSlider");
    const output = document.getElementById("date");
    const dataSpan = document.querySelector('.data'); // Target the span with class "data"
    const logo = document.querySelector('.logo');
    const dataText = document.querySelector('.dataText');
    const aboutBox = document.querySelector('.aboutBox');
    const aboutCard = document.querySelector('.aboutCard'); 
    const aboutClose = document.querySelector('.aboutClose'); 
    const logoType = document.getElementById("logotype"); // logotype span
    const toggleCheckbox = document.getElementById('toggleBk');
    const backgroundImageElement = document.getElementById('backgroundImage');
    const toggleLabel = document.querySelector('.switch .change'); // The text span in the switch

    // Add event listener for the checkbox change
    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            // Hide the background image
            backgroundImageElement.style.display = 'none';
            toggleLabel.setAttribute('data-text', 'Show');
        } else {
            // Show the background image
            backgroundImageElement.style.display = 'block';
            toggleLabel.setAttribute('data-text', 'Hide');
        }
    });
    
    const backgroundImages = [
        { src: "assets/pics/g1.webp", min: 0, max: 0.05 },
        { src: "assets/pics/g2.webp", min: 0.05, max: 0.1 },
        { src: "assets/pics/g3.webp", min: 0.1, max: 0.15 },
        { src: "assets/pics/y2.webp", min: 0.15, max: 0.2 },
        { src: "assets/pics/yo1.webp", min: 0.2, max: 0.25 },
        { src: "assets/pics/o1.webp", min: 0.25, max: 0.30 }, 
        { src: "assets/pics/o2.webp", min: 0.30, max: 0.35 }, 
        { src: "assets/pics/o3.webp", min: 0.35, max: 0.40 }, 
        { src: "assets/pics/or1.webp", min: 0.40, max: 0.45 },
        { src: "assets/pics/or2.webp", min: 0.45, max: 0.50 },
        { src: "assets/pics/r1.webp", min: 0.50, max: 0.55 },
        { src: "assets/pics/r2.webp", min: 0.55, max: 0.60 },
        { src: "assets/pics/r3.webp", min: 0.60, max: 0.65 },
        { src: "assets/pics/r4.webp", min: 0.65, max: 0.70 },
        { src: "assets/pics/b1.webp", min: 0.70, max: 0.75 },
        { src: "assets/pics/b2.webp", min: 0.75, max: 0.80 },
        { src: "assets/pics/b3.webp", min: 0.80, max: 0.84 },
        { src: "assets/pics/b4.webp", min: 0.84, max: 0.88 },
        { src: "assets/pics/w1.webp", min: 0.88, max: 0.93 },
        { src: "assets/pics/w2.webp", min: 0.93, max: 0.97 },
        { src: "assets/pics/w3.webp", min: 0.97, max: 1.0 }
    ];

    aboutBox.addEventListener('click', function() {
        if (aboutCard.style.display === "none" || aboutCard.style.display === "") {
            aboutCard.style.display = "block";  // Show the aboutCard
            aboutClose.textContent = "Close";  // Change text to "Close"
        } else {
            aboutCard.style.display = "none";  // Hide the aboutCard
            aboutClose.textContent = "About";  // Change text back to "About"
        }
    });

    const textSentences = [
        "The trees of College Hill are still lush and green, with no signs of autumn yet",//9.4
        "Sunlight filters through the dense canopy, casting playful shadows on the ground below",//9.4
        "The warm sun highlights the varying shades of green among different tree species",//9.5
        "The deep green leaves continue to thrive, providing a striking contrast against the blue sky",//9.7
        "The lush foliage creates a serene atmosphere, perfect for leisurely strolls through the neighborhood",//9.8
        "The warm summer sun continues to bathe the leaves in vibrant green hues",//9.9
        "6",//9.10
        "Bright green leaves shimmer in the sunlight, reflecting the warmth of late summer days",//9.11
        "8",//9.12
        "CLEAR SKY, DAY +79°F, Night +57°F",//9.13
        "Mostly green leaves, with a few early changers showing hints of yellow",//9.14
        "11",//9.15
        " The landscape remains predominantly green, but whispers of fall are beginning to emerge",//9.16
        "The first signs of fall are evident as scattered trees show early signs of color change",//9.17
        "Leaves on certain elms start to turn a soft shade of yellow, adding warmth to the green backdrop",//9.18
        "The morning light catches the subtle color changes, revealing soft yellows and light oranges",//9.19
        "Bright yellows dominate some areas, creating a cheerful contrast against remaining greens",//9.20
        "17",//9.21
        "18",//9.22
        "As autumn unfolds, the vibrant yellow foliage of birch and aspen trees adds a cheerful splash of color to the landscape",//9.23
        "Elm trees begin to transform, adding golden tones to the College Hill landscape",//9.24
        "Cooler nights accelerating the color transition",//9.25
        "A gentle breeze sends a few yellow leaves fluttering to the ground",//9.26
        "Golden-yellow leaves blanket the ground, inviting children to jump into piles and celebrate the joys of autumn",//9.27
        "Cooler temperatures accelerate the color transformation, with more trees showing autumn hues",//9.28
        "The overall palette shifts towards warmer tones as more trees embrace autumn colors",//9.29
        "26",//9.30
        "The first hints of orange begin to emerge on maple trees along Benefit Street",//10.1
        "28",//10.2
        "29",//10.3
        "A few red maples are beginning to hint at their future brilliance with touches of red",//10.4
        "Orange leaves flutter gently in the crisp fall air, adding a cheerful touch to the landscape of College Hill",//10.5
        "32",//10.6
        "33",//10.7
        "34",//10.8
        "The neighborhood begins to look like a canvas painted with reds, oranges, and yellows",//10.9
        "36",//10.10
        "37",//10.11
        "38",//10.12
        "The warm orange shades of autumn foliage invite passersby to pause and appreciate the fleeting beauty of the season",//10.13
        "Vibrant reds emerging on sugar maples throughout the neighborhood",//10.14
        "Red maples reached 50% color change",//10.15
        "42",//10.16
        "43",//10.17
        "44",//10.18
        "Brilliant reds and oranges dominate the landscape, creating a breathtaking autumn scene",//10.19
        "46",//10.20
        "47",//10.21
        "48",//10.22
        "49",//10.23
        "Sunlight illuminates the rich palette of autumn colors across College Hill",//10.24
        "College Hill at its autumn finest, with a kaleidoscope of reds, oranges, and yellows",//10.25
        "52",//10.26
        "53",//10.27
        "Post-peak conditions begin, with some trees starting to lose leaves",//10.28
        "55",//10.29
        "56",//10.30
        "Halloween is marked by a mix of remaining fall colors and the first hints of winter's approach",//10.31
        "58",//11.1
        "Nighttime temperatures dipping into low 50s, triggering more color change",//11.2
        "60",//11.3
        "61",//11.4
        "62",//11.5
        "63",//11.6
        "Late-season reds intensifying on remaining foliage",//11.7
        "65",//11.8
        "The first hints of leaf drop appear as colors start to mute",//11.9
        "Late-season maples hold onto their rich, deep red colors, providing a final burst of autumn beauty",//11.10
        "Autumn colors begin to transition to deeper, more subdued tones",//11.11
        "Leaf drop accelerating, but pockets of vibrant color persist",//11.12
        "The landscape transforms into a muted palette of browns, bronzes, and deep reds as most trees begin to shed their leaves",//11.13
        "Scattered leaves dance across the sidewalks of Benefit Street, creating a rustling carpet of autumn remnants",//11.14
        "72",//11.15
        "Pockets of color remain on some evergreens, providing a touch of green amidst the browns",//11.16
        "The vibrant reds and oranges of autumn have faded, leaving behind muted tones of gray and brown",//11.17
        "Oaks and some maple varieties retain their deeper, more persistent autumn colors",//11.18
        "76",//11.19
        "The landscape transitions to a more skeletal view as trees continue to lose their leaves",//11.20
        "Wind and occasional rain accelerate the leaf-dropping process across College Hill",//11.21
        "Thanksgiving approaches with trees showing only traces of their former autumn glory",//11.22
        "The landscape starts to shift from peak colors to more brownish and muted hues",//11.23
        "Thanksgiving Day brings a mostly bare landscape with occasional bursts of deep brown and rust colors",//11.24
        "The remaining leaves seem to cling more desperately to branches as winter approaches",//11.25
        "Fewer bright colors remain, with more trees showing signs of approaching winter",//11.26
        "Scattered leaves of deep bronze and russet continue to decorate the urban landscape",//11.27
        "The last remnants of fall color linger on a few stubborn trees, primarily oaks and maples",//11.28
        "Late autumn colors deepen, with remaining leaves in rich browns and crimsons",//11.29
        "Crisp winds start to strip away the last of the colorful foliage, revealing the intricate branch structures",//11.30
        "College Hill prepares for winter, with trees now mostly bare and revealing their elegant, skeletal forms",//12.1
        "89",//12.2
        "Scattered pockets of color remain amidst largely bare trees",//12.3
        "91",//12.4
        "The once colorful landscape is now dominated by bare branches, preparing for winter's arrival",//12.5
        "93",//12.6
        "94",//12.7
        "95",//12.8
        "Final leaves clinging to branches, marking the end of fall foliage season",//12.9
        "97",//12.10
        " The transition to winter is complete, with only traces of autumn’s glory visible in the landscape",//12.11
        // Add more sentences as needed
    ];

     // Utility functions for date and color calculation
     function getDayOfYear(date) {
        const start = new Date(date.getFullYear(), 0, 1);
        start.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);
        return Math.floor((date - start) / (1000 * 60 * 60 * 24)) + 1;
    }

    function getDateFromDay(year, dayOfYear) {
        const start = new Date(year, 0, 1);
        start.setDate(dayOfYear);
        return start;
    }

    function formatDate(date) {
        return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    }

    // Initialize slider and date display
    const today = new Date();
    const dayOfYear = getDayOfYear(today);
    const minDay = 248;
    const maxDay = 346;

    dateSlider.value = (dayOfYear >= minDay && dayOfYear <= maxDay) ? dayOfYear : minDay;
    output.innerHTML = formatDate(getDateFromDay(today.getFullYear(), dateSlider.value));

    // Set initial sentence based on the current day of the year
    const initialSentenceIndex = dayOfYear - minDay;
    const initialSentence = textSentences[initialSentenceIndex] || textSentences[0]; // Default to first sentence if out of range
    dataSpan.innerHTML = initialSentence;


    // Define colors and ranges (in percentages)
    const colorRanges = [
        { color: "#265000", min: 0, max: 0.05 },
        { color: "#457519", min: 0.05, max: 0.10 },
        { color: "#98B301", min: 0.10, max: 0.15 },
        { color: "#F0C01C", min: 0.15, max: 0.17 },
        { color: "#FFC72C", min: 0.17, max: 0.20 },
        { color: "#EDA421", min: 0.20, max: 0.25 },
        { color: "#E98604", min: 0.25, max: 0.30 },
        { color: "#FE7F17", min: 0.30, max: 0.35 },
        { color: "#E66B07", min: 0.35, max: 0.4 },
        { color: "#DF3908", min: 0.4, max: 0.45 },
        { color: "#D82827", min: 0.45, max: 0.5 },
        { color: "#C91E0A", min: 0.50, max: 0.70 },
        { color: "#923113", min: 0.70, max: 0.80 },
        { color: "#6C2907", min: 0.80, max: 0.9 },
        { color: "#FFFFFF", min: 0.9, max: 1 }
    ];

    const squareContainer = document.getElementById('square-container');

    // Function to fill squares on screen and control visibility
    function fillScreenWithSquares() {
        squareContainer.innerHTML = ''; // Clear existing squares
        const rows = Math.ceil((window.innerHeight - 60) / 30); // Subtract 60px for slider
        const columns = Math.ceil(window.innerWidth / 30);

        // Create squares in the grid
        for (let i = 0; i < rows * columns; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            squareContainer.appendChild(square);
        }

        updateSquaresVisibility();  // Call this once after the squares are generated
    }

   // Function to update square colors and randomize visibility
function updateSquaresVisibility() {
    const squares = document.querySelectorAll('#square-container .square');
    const totalSquares = squares.length;

    // Calculate the slider position as a percentage (0 to 1)
    const sliderValue = parseInt(dateSlider.value);
    const sliderRange = dateSlider.max - dateSlider.min;

    let visibilityPercent = (sliderValue - dateSlider.min) / sliderRange;  // 0 to 1
    visibilityPercent = Math.max(0.1, Math.min(1, visibilityPercent));  // Ensure within [0.1, 1]

    if (visibilityPercent >= 0.7 && visibilityPercent <= 0.9) {
        // Apply white color to dataSpan, #logotype, and aboutClose
        // if (dataSpan) dataSpan.style.color = '#FFE500';
        if (logoType) logoType.style.color = '#FFE500';
        if (aboutClose) aboutClose.style.color = '#FFE500';
    } else {
        // Reset the color to the default (e.g., black or any other color)
        // if (dataSpan) dataSpan.style.color = '';  // Reset to default color
        if (logoType) logoType.style.color = '';  // Reset to default color
        if (aboutClose) aboutClose.style.color = '';  // Reset to default color
    }

    // Adjust visibility based on slider position
    let cappedVisibilityPercent;
    if (visibilityPercent >= 0.9) {
        // Adjust visibility for full white range
        const whiteRangePercent = (visibilityPercent - 0.9) / 0.1; // Scale between 0 and 1
        cappedVisibilityPercent = 0.30 + 0.25 * whiteRangePercent; // Gradually increase from 30% to 55%
    } else if (visibilityPercent >= 0.4) {
        // Gradually increase visibility from 25% to 30% between 0.4 and 0.9
        const midRangePercent = (visibilityPercent - 0.4) / 0.5; // Scale between 0 and 1
        cappedVisibilityPercent = 0.25 + 0.05 * midRangePercent; // Gradually increase from 25% to 30%
    } else {
        // Cap visibility at 25% until slider reaches 0.4
        cappedVisibilityPercent = Math.min(visibilityPercent, 0.25);
    }

    const visibleSquaresCount = Math.floor(cappedVisibilityPercent * totalSquares);

    // Log the visibility percentage
    console.log(`Square Visibility Percent: ${(cappedVisibilityPercent * 100).toFixed(2)}%`);
    console.log(`Visible Squares: ${visibleSquaresCount} out of ${totalSquares}`);

    // Determine the color range based on the slider position
    const currentRange = colorRanges.find(range => visibilityPercent >= range.min && visibilityPercent <= range.max);

    if (aboutBox && logo && currentRange) {
        console.log(`Updating aboutBox and logo colors to: ${currentRange.color}`);
        aboutBox.style.backgroundColor = currentRange.color;  // Set background color for aboutBox
        logo.style.backgroundColor = currentRange.color;  // Set text color for logo
        // dataText.style.backgroundColor = currentRange.color;
    }

    // Generate a random set of indices for the visible squares
    const randomIndices = new Set();
    while (randomIndices.size < visibleSquaresCount) {
        const randomIndex = Math.floor(Math.random() * totalSquares);
        randomIndices.add(randomIndex); // Ensure no duplicates
    }

    // Adjust randomColorCount based on visibilityPercent
    let randomColorPercent = 0.1; // Default 10%
    if (visibilityPercent >= 0.9) {
        const whiteRangePercent = (visibilityPercent - 0.9) / 0.1; // Scale between 0 and 1
        randomColorPercent = 0.1 - (0.08 * whiteRangePercent); // Decrease from 10% to 2%
    }

    const randomColorCount = Math.floor(visibleSquaresCount * randomColorPercent); // Scaled count of random colors

    console.log(`Random Color Percent: ${(randomColorPercent * 100).toFixed(2)}%`);
    console.log(`Random Color Squares: ${randomColorCount}`);

    const visibleSquares = Array.from(squares).filter((_, index) => randomIndices.has(index));
    const shuffledSquares = visibleSquares.sort(() => Math.random() - 0.5);
    const randomColorSquares = shuffledSquares.slice(0, randomColorCount);


    // Determine color transitions
    let colorTransitionCount = Math.floor(visibleSquaresCount * 0.2); // Default 20%
    if (visibilityPercent >= 0.85 && visibilityPercent < 0.9) {
        const transitionPercentage = (visibilityPercent - 0.85) / 0.05; // Scale between 0 and 1
        colorTransitionCount = Math.floor(visibleSquaresCount * (0.2 + 0.7 * transitionPercentage)); // From 20% to 90%
    } else if (visibilityPercent >= 0.9) {
        colorTransitionCount = Math.floor(visibleSquaresCount * 0.9); // Cap at 90% for full white range
    }

    const transitionColorSquares = shuffledSquares.slice(0, colorTransitionCount);

    // Color the squares
    visibleSquares.forEach((square) => {
        if (randomColorSquares.includes(square)) {
            const randomRange = colorRanges[Math.floor(Math.random() * colorRanges.length)];
            square.style.backgroundColor = randomRange.color;
        } else if (transitionColorSquares.includes(square)) {
            const currentRangeIndex = colorRanges.findIndex(range => range.color === currentRange.color);
            const nextRange = colorRanges[currentRangeIndex + 1] || currentRange;
            square.style.backgroundColor = nextRange.color;
        } else {
            square.style.backgroundColor = currentRange.color;
        }
    });

    // Make the rest of the squares transparent if they're outside the visible range
    squares.forEach((square, index) => {
        if (!randomIndices.has(index)) {
            square.style.backgroundColor = 'transparent';
        }
    });
}
    
    // Function to update the background image
    function updateBackgroundImage() {
        const sliderValue = parseInt(dateSlider.value);
        const sliderRange = dateSlider.max - dateSlider.min;
        const sliderPercent = (sliderValue - dateSlider.min) / sliderRange; // 0 to 1

        const matchingImage = backgroundImages.find(
            image => sliderPercent >= image.min && sliderPercent <= image.max
        );

        if (matchingImage) {
            const backgroundImageElement = document.getElementById('backgroundImage');
            backgroundImageElement.style.backgroundImage = `url(${matchingImage.src})`;
        }
    }

    // Call this function whenever the slider changes
    dateSlider.oninput = function() {
        const selectedDate = getDateFromDay(today.getFullYear(), parseInt(this.value));
        output.innerHTML = formatDate(selectedDate);
        updateSquaresVisibility();  // Adjust visibility based on slider
        updateBackgroundImage();   // Update the background image

        // Ensure the slider value is within the valid range for textSentences
        const sentenceIndex = parseInt(this.value) - minDay; // Adjust based on minDay
        const selectedText = textSentences[sentenceIndex] || textSentences[0]; // Default to first sentence if out of range
        
        // Update the dataSpan with the new sentence
        dataSpan.innerHTML = selectedText + " ";
    };
    

    // Initialize with the correct background image
    updateBackgroundImage();
    

    // Listen for window resize events
    window.addEventListener('resize', fillScreenWithSquares);

    // Initial call to set up squares
    fillScreenWithSquares();

//     // Select the toggle button and background image element
//     const toggleButton = document.getElementById('toggleBackground');
//     const backgroundImageElement = document.getElementById('backgroundImage');
//     // Initial state for visibility
//     let isBackgroundVisible = true;

//     // Add event listener for the toggle button
//     toggleButton.addEventListener('click', () => {
//         if (isBackgroundVisible) {
//             // Hide the background image
//             backgroundImageElement.style.display = 'none';
//             toggleButton.textContent = 'Show';
//         } else {
//             // Show the background image
//             backgroundImageElement.style.display = 'block';
//             toggleButton.textContent = 'Hide';
//         }
//         // Toggle the state
//         isBackgroundVisible = !isBackgroundVisible;
// });

});