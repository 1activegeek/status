$(document).ready(function() {
	var config = {
		uptimerobot: {
			api_keys: [
				'm779828614-2b8e76a1f638f179db6f01be',
				'm779757287-11996787b4a4ddb79cae343b',
				'm779757278-82acbbedc86d26ebbc129945',
				'm779762016-33deea24d6a3e73e524d8ab0',
				'm779870719-a710902a0c001a03244eac5e',
				'm779870718-eada06ba00200d8ced148b37'
			],
			logs: 1
		},
		github: {
			org: '1activegeek',
			repo: 'status'
		}
	};
	var status_text = {
		'operational': 'operational',
		'investigating': 'investigating',
		'major outage': 'outage',
		'degraded performance': 'degraded',
	};

	var monitors = config.uptimerobot.api_keys;
	for( var i in monitors ){
		var api_key = monitors[i];
		$.post('https://api.uptimerobot.com/v2/getMonitors', {
			"api_key": api_key,
			"format": "json",
			"logs": config.uptimerobot.logs,
		}, function(response) {
			status( response );
		}, 'json');
	}

	function status(data) {
		data.monitors = data.monitors.map(function(check) {
			check.class = check.status === 2 ? 'label-success' : 'label-danger';
			check.text = check.status === 2 ? 'operational' : 'major outage';
			if( check.status !== 2 && !check.lasterrortime ){
				check.lasterrortime = Date.now();
			}
			if (check.status === 2 && Date.now() - (check.lasterrortime * 1000) <= 86400000) {
				check.class = 'label-warning';
				check.text = 'degraded performance';
			}
			return check;
		});

		var status = data.monitors.reduce(function(status, check) {
			return check.status !== 2 ? 'danger' : 'operational';
		}, 'operational');

		if (!$('#panel').data('incident')) {
			$('#panel').attr('class', (status === 'operational' ? 'panel-success' : 'panel-warning') );
			$('#paneltitle').html(status === 'operational' ? 'All systems are operational.' : 'One or more systems inoperative');
		}
		data.monitors.forEach(function(item) {
			var name = item.friendly_name;
			var clas = item.class;
			var text = item.text;

			$('#services').append('<div class="list-group-item">'+
								'<span class="badge '+ clas + '">' + text + '</span>' +
								'<h4 class="list-group-item-heading">' + name + '</h4>' +
								'</div>');
		});
	};

	function datetime(string) {
		var datetime = string.split('T');

		var date = datetime[0];
		var time = datetime[1].replace('Z', '');

		return date + ' ' + time;
	};

	var newdate = new Date();
	newdate.setDate(newdate.getDate() - 14);
	var limiter = newdate.toISOString();

		$.getJSON( 'https://api.github.com/repos/' + config.github.org + '/' + config.github.repo + '/issues?state=all&labels=incident&since=' + limiter ).done(message);

	function message(issues) {
		issues.forEach(function(issue) {
			if( issue.labels.length > 0){ // only display labelled issues
				var status = issue.labels.reduce(function(status, label) {
					if (/^status:/.test(label.name)) {
						return label.name.replace('status:', '');
					} else {
						return status;
					}
				}, 'operational');

				var systems = issue.labels.filter(function(label) {
					return /^system:/.test(label.name);
				}).map(function(label) {
					return label.name.replace('system:', '')
				});

				if (issue.state === 'open') {
					$('#panel').data('incident', 'true');
					$('#panel').attr('class', (status !== 'operational' ? 'panel-danger' : 'panel-warning') );
					$('#paneltitle').html('<a href="#incidents">' + issue.title + '</a>');
				}

				var html = '<article class="timeline-entry">\n';
				html += '<div class="timeline-entry-inner">\n';

				if (issue.state === 'closed') {
					html += '<div class="timeline-icon bg-success"><i class="entypo-feather"></i></div>';
				} else if (issue.state === 'open' && status === 'operational'){
					html += '<div class="timeline-icon bg-warn"><i class="entypo-feather"></i></div>';
				} else {
					html += '<div class="timeline-icon bg-secondary"><i class="entypo-feather"></i></div>';
				}

				html += '<div class="timeline-label">\n';
				html += '<span class="date">' + datetime(issue.created_at) + '</span>\n';

				// status
				if (issue.state === 'closed') {
					html += '<span class="badge label-success pull-right">closed</span>';
				} else {
					html += '<span class="badge ' + (status !== 'operational' ? 'label-danger' : 'label-warning') + ' pull-right">';
					html += "open";
					html += '</span>\n';
				}

				// systems
				for (var i = 0; i < systems.length; i++) {
					html += '<span class="badge system pull-right">' + systems[i] + '</span>';
				}

				html += '<h2>' + issue.title + '</h2>\n';
				html += '<hr>\n';
				html += '<p>' + issue.body + '</p>\n';

				if (issue.state === 'open' && issue.created_at !== issue.updated_at) {
				html += '<p><em>Last update ' + datetime(issue.updated_at) + '<p>'
				}

				if (issue.state === 'closed') {
					html += '<p><em>Updated ' + datetime(issue.closed_at) + '<br/>';
					html += 'The system is back in normal operation.</p>';
				}
				html += '</div>';
				html += '</div>';
				html += '</article>';
				$('#incidents').append(html);
			}
		});
	};

		$.getJSON( 'https://api.github.com/repos/' + config.github.org + '/' + config.github.repo + '/issues?state=all&labels=maintenance' ).done(notification);

function notification(issues) {
	issues.forEach(function(issue) {
		if( issue.labels.length > 0 ){ // only display labelled issues
				$('#maintenance').append('<div class="list-group-item">'+
									'<h2 class="list-group-item-heading">' + issue.title + '</h2>' +
									'<p class="list-group-item-text">' + issue.body + '</p>');
		}
	});
};

});
