var snapchat = require('../snapchat'),
    client = new snapchat.Client(),
    fs = require('fs');

client.login('USERNAME', 'PASSWORD').then(function(data) {
    // Handle any problems, such as wrong password
    if (typeof data.snaps === 'undefined') {
        console.log(data);
        return;
    }
    //console.log(data.added_friends_timestamp);

    // Loop through the latest snaps
    data.snaps.forEach(function(snap) {
        // Make sure the snap item is unopened and sent to you (not sent by you)
        if (typeof snap.sn !== 'undefined' && typeof snap.t !== 'undefined' && snap.st == 1) {
            console.log('Saving snap from ' + snap.sn + '...');
	
	    client.updateSnap(snap.id).then(function(cb) {
		console.log(cb);
	   });
        }
    });
});
