// Handle state change for 'HOW IT WORKS'

function handleWorksState() {
    $('.state').removeClass('active');
    $(this).addClass('active');

    if (this.id == 'how-state-a') {
        //$('.how-state-bg').removeClass('shift-bg');
        $('#how-content-a').addClass('active');
        $('#how-content-b').removeClass('active');
    } else if (this.id == 'how-state-b') {
        //$('.how-state-bg').addClass('shift-bg');
        $('#how-content-b').addClass('active');
        $('#how-content-a').removeClass('active');
    }
}

$('.state').on('click', handleWorksState);


// Mute toggle for videos
$('#day-mute').click(function () {
    $('#day-mute').toggleClass('unmute');
    $('.day-overlay').toggleClass('hide');
    $('.card-day-in-life .text-container p').toggleClass('unmute');
    $('#day-restart').toggleClass('hide');
    $('#day-in-life-video').prop('muted', !$('#day-in-life-video').prop('muted'));
})

$('#tech-mute').click(function () {
    $('#tech-mute').toggleClass('unmute');
    $('.tech-overlay').toggleClass('hide');
    $('.card-tech-video .text-container p').toggleClass('unmute');
    $('#tech-restart').toggleClass('hide');
    $('#tech-video').prop('muted', !$('#tech-video').prop('muted'));
})

$('#day-restart').click(function() {
    $('#day-in-life-video')[0].pause();
    $('#day-in-life-video')[0].currentTime = 0;
    $('#day-in-life-video')[0].play();
})

$('#tech-restart').click(function() {
    $('#tech-video')[0].pause();
    $('#tech-video')[0].currentTime = 0;
    $('#tech-video')[0].play();
})

// Position Legal text

function positionLegal() {
    let rightPos = Math.floor($('.section-data-center .text-container')[0].getBoundingClientRect().right - Math.floor($('.section-data-center .text-container')[0].getBoundingClientRect().left)) - 120 + 'px';
    $('#ds-legal').css('left', rightPos);

    let theoPos = Math.floor(($('.section-story .image-container')[0].getBoundingClientRect().right)) + 230 + 'px';

    $('#story-legal').css({'left': theoPos});
}


// Hide wave if window is too small

$(() => {
    if ($(window).width() <= 768) {
        //$('.shape-wrap').addClass('hide');
    }
});



