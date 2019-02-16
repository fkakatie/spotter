$(document).ready(function () {

    $('.btn-workout').on('click', function(event) {
        var id = $(this).data('id');
        var queue = $(this).data('queue');
        queue = !queue;
        var queueStatus = { queued: queue };
        $.ajax('/api/workouts/' + id, {
            type: 'PUT',
            data: queueStatus
        }).then(function() {
            location.reload();
        })
    })

    $('#addExercise').on('submit', function(event){
        event.preventDefault();
        var exercise = $('#exerciseName').val().trim();
        var newExercise = { workout: exercise };
        $.ajax('/api/workouts', {
            type: 'POST',
            data: newExercise
        }).then(function() {
            location.reload();
        })
    })
    
})