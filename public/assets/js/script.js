$(document).ready(function () {

    console.log('this is linked');

    $('.btn-workout').on('click', function(event) {
        var id = $(this).data('id');
        var queue = $(this).data('queue');
        queue = !queue;
        var queueStatus = { queued: queue };
        console.log('BUTTON CLICKED');
        $.ajax('/api/workouts/' + id, {
            type: 'PUT',
            data: queueStatus
        }).then(function() {
            console.log('In Current Workout?: ' + queue);
            location.reload();
        })
    })
    
})