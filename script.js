$(document).ready(function () {

// Configuration based settings go here
	function setStyleSheet(url){
		 var stylesheet = document.getElementById("stylesheet");
		 stylesheet.setAttribute('href', url);
	}

	if (config.theme == 'light') {
		setStyleSheet('style-light.css');
	}

// UptimeRobot based queries below

	// const monitors = config.uptimerobot.api_keys;
	// for (let i in monitors) {
	// 	var api_key = monitors[i];
	// 	$.post('https://api.uptimerobot.com/v2/getMonitors', {
	// 		"api_key": api_key,
	// 		"format": "json",
	// 		"logs": config.uptimerobot.logs,
	// 		"response_times": config.uptimerobot.response_times,
	// 		"all_time_uptime_ratio": config.uptimerobot.all_time_uptime_ratio,
	// 		"custom_uptime_ratios": config.uptimerobot.custom_uptime_ratios,
	// 		"response_times_average": config.uptimerobot.response_times_average
	// 	}, UptimeRobot, 'json');
	// }
	//
	// function _uptimeRobotSetStatus(check) {
	// 		check.class = check.status === 2 ? 'label-success' : 'label-danger';
	// 		check.text = check.status === 2 ? 'operational' : 'outage';
	// 		if (check.status !== 2 && !check.lasterrortime) {
	// 			check.lasterrortime = Date.now();
	// 		}
	// 		if (check.status === 2 && Date.now() - (check.lasterrortime * 1000) <= 86400000) {
	// 			check.class = 'label-danger';
	// 			check.text = 'outage';
	// 		}
	// 		if (check.status === 2 && Math.round(check.average_response_time) >= config.uptimerobot.response_times_warning) {
	// 			check.class = 'label-warning';
	// 			check.text = 'degraded';
	// 		}
	// 		return check;
	// }
	//
	// function _uptimeRobotSetData(monitor) {
	// 	const clean_name = monitor.friendly_name.replace(/[^0-9a-zA-Z ]/g, '').replace(/ /g, '');
	// 	const uptime_ratio = monitor.custom_uptime_ratio.split('-');
	// 	const uptimeForever = monitor.all_time_uptime_ratio;
	//
	// 		$('#services').append('<div class="list-group-item">' +
	// 		'<span class="badge ' + monitor.class + '">' + monitor.text + '</span>' +
	// 		'<a href="#" class="list-group-item-heading" onclick="\$\(\'\#' + monitor.clean_name + '\').toggleClass(\'collapse\');">' + monitor.friendly_name + '</a>' +
	// 		'<div id="' + monitor.clean_name + '" class="graph collapse">' +
	// 		'<canvas id="' + monitor.clean_name + '_cvs" width="400" height="150"></canvas>' +
	// 			'</div>' +
	// 			'</div>');
	// }
	//
	// function _uptimeRobotSetGraph(monitor) {
	// 		$('#statistics tbody').append('<tr>' +
	// 		'<td>' + monitor.friendly_name + '</td>' +
	// 		'<td>' + monitor.uptime_ratio[0] + '%</td>' +
	// 		'<td>' + monitor.uptime_ratio[1] + '%</td>' +
	// 		'<td>' + monitor.uptime_ratio[2] + '%</td>' +
	// 		'<td>' + monitor.uptime_ratio[3] + '%</td>' +
	// 		'</tr>');
	//
	// 	const gph_data = {
	// 		type: 'line',
	// 		data: {
	// 			labels: [],
	// 			datasets: [{
	// 				label: 'Response Time (ms)',
	// 			backgroundColor: "rgba(255,255,255,0.5)",
	// 				data: [],
	// 			}]
	// 		},
	// 		options: {
	// 			legend: {
	// 				labels: {
	// 					fontColor: '#ddd'
	// 				}
	// 			},
	// 			scales: {
	// 				yAxes: [{
	// 					ticks: {
	// 						fontColor: '#ddd'
	// 					}
	// 				}],
	// 				xAxes: [{
	// 					display: false,
	// 					ticks: {
	// 						display: false,
	// 						scaleFontSize: 0
	// 					}
	// 				}]
	// 			}
	// 		}
	// 	};
	//
	// 	if (config.theme == 'light') {
	// 		gph_data.options.scales.yAxes[0].ticks.fontColor = '';
	// 		gph_data.options.legend.labels.fontColor = '';
	// 		gph_data.data.datasets[0].backgroundColor = 'rgba(0,0,0,0.5)';
	// 	}
	//
	// 	monitor.response_times.forEach(function (datapoint) {
	// 			gph_data.data.labels.push(formatDate(new Date(datapoint.datetime * 1000), 'D d M Y H:i:s (T)'));
	// 			gph_data.data.datasets[0].data.push(datapoint.value);
	// 		});
	//
	// 		gph_data.data.labels = gph_data.data.labels.reverse();
	// 		gph_data.data.datasets[0].data = gph_data.data.datasets[0].data.reverse();
	//
	// 	const gph_ctx = $('#' + monitor.clean_name + '_cvs');
	// 	const gph = new Chart(gph_ctx, gph_data);
	// }
	//
	// function UptimeRobot(data) {
	// 	data.monitors = data.monitors.map(_uptimeRobotSetStatus);
	//
	// 	var status = data.monitors.reduce(function (status, check) {
	// 		return check.status !== 2 ? 'danger' : 'operational';
	// 	}, 'operational');
	//
	// 	if (!$('#panel').data('incident')) {
	// 		$('#panel').attr('class', (status === 'operational' ? 'panel-success' : 'panel-warning') );
	// 		$('#paneltitle').html(status === 'operational' ? 'All systems are operational.' : 'One or more systems inoperative');
	// 	}
	//
	// 	data.monitors.forEach(function (item) {
	// 		item.clean_name = item.friendly_name.replace(/[^0-9a-zA-Z ]/g, '').replace(/ /g, '');
	// 		item.uptime_ratio = item.custom_uptime_ratio.split('-');
	// 		item.uptime_ratio.push(item.all_time_uptime_ratio);
	// 		_uptimeRobotSetData(item);
	// 		_uptimeRobotSetGraph(item);
	// 	});
	// };

// Functions for Healthchecks.io go below
	const hcio_monitors = config.hcio.checks;
	for (let i in hcio_monitors) {
		var badge = hcio_monitors[i].url;
		console.log('Test ' + badge);
		$.get(badge, function (response){
			hcio_monitors[i].status = response.status;
			console.log(hcio_monitors[i].name);
		}, 'json');
	}

	function _hcioSetStatus(check) {
			check.class = check.status === "up" ? 'label-success' : 'label-danger';
			check.text = check.status === "up" ? 'operational' : 'outage';
			return check;
	}

	function _hcioSetData(hcio_monitors) {
		const clean_name = hcio_monitors[i][0];

			$('#services').append('<div class="list-group-item">' +
			'<span class="badge ' + hcio_monitor.class + '">' + hcio_monitor.text + '</span>' +
// I believe this can be removed safely
			// '<a href="#" class="list-group-item-heading" onclick="\$\(\'\#' + hcio_monitor.clean_name + '\').toggleClass(\'collapse\');">' + hcio_monitor.friendly_name + '</a>' +
			// '<div id="' + hcio_monitor.clean_name + '" class="graph collapse">' +
			'<canvas id="' + hcio_monitor.clean_name + '_cvs" width="400" height="150"></canvas>' +
				'</div>' +
				'</div>');
	}

	function HCio(data) {
		hcio_monitors.status = data.status;
		// console.log(badge);
		data.hcio_monitors = data.map(_hcioSetStatus);

		var status = data.hcio_monitors.reduce(function (status, check) {
			return check.status !== "up" ? 'danger' : 'operational';
		}, 'operational');
		// console.log(data.hcio_monitors);
		if (!$('#panel').data('incident')) {
			$('#panel').attr('class', (status === 'operational' ? 'panel-success' : 'panel-warning') );
			$('#paneltitle').html(status === 'operational' ? 'All systems are operational.' : 'One or more systems inoperative');
		}

		data.hcio_monitors.forEach(function (item) {
			item.clean_name = item[i][0];
			_hcioSetData(item);
		});
	};

// Functions for setting incidents/maintenance go below

	var get_today = new Date();
	get_today.setDate(get_today.getDate() - config.incident_days);
	var scope_date = get_today.toISOString();

	$.getJSON('https://api.github.com/repos/' + config.github.org + '/' + config.github.repo + '/issues?state=all&since=' + scope_date).done(GitHubEntry);

	var maintainIssues = [];
	var incidentIssues = [];

	function GitHubEntry(issues) {
		issues.forEach(function (issue) {
			if (issue.labels.length > 0) {
				issue.labels.forEach(function (label) {
					if (label.name == 'maintenance' && issue.state == 'open') maintainIssues.push(issue);
					else incidentIssues.push(issue);
				});
			}
		});
		_gitHubIncidents(incidentIssues);
		_gitHubMaintenance();
	}

	function _gitHubMaintenance() {
		if (maintainIssues.length > 0) {
			maintainIssues.forEach(function (issue) {
				$('#maintenance').append('<div class="list-group-item">' +
					'<h2 class="list-group-item-heading">' + issue.title + '</h2>' +
					'<p class="list-group-item-text">' + issue.body + '</p>' +
					'</div>');
			});
		}
		else {
			$('#maintenance').append('<div class="list-group-item">' +
				'<h4 class="list-group-item-heading"></h4>' +
				'<p class="list-group-item-text">There is currently no planned maintenance</p>' +
				'</div>');
		}
	}

	function _gitHubIncidents(issues) {
		issues.forEach(function (issue) {
				var status = issue.labels.reduce(function (status, label) {
					if (/^status:/.test(label.name)) {
						return label.name.replace('status:', '');
					} else {
						return status;
					}
				}, 'operational');

				var systems = issue.labels.filter(function (label) {
					return /^system:/.test(label.name);
				}).map(function (label) {
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
			html += '<span class="date">' + formatDate(new Date(issue.created_at), 'D d M Y H:i:s (T)') + '</span>\n';

				if (issue.state === 'closed') {
					html += '<span class="badge label-success pull-right">closed</span>';
				} else {
					html += '<span class="badge ' + (status !== 'operational' ? 'label-danger' : 'label-warning') + ' pull-right">open</span>\n';
				}

				for (var i = 0; i < systems.length; i++) {
					html += '<span class="badge system pull-right">' + systems[i] + '</span>';
				}

				html += '<h2>' + issue.title + '</h2>\n';
				html += '<hr>\n';
				html += '<p>' + issue.body + '</p>\n';

				if (issue.state === 'open' && issue.created_at !== issue.updated_at) {
					html += '<p><em>Last update ' + formatDate(new Date(issue.updated_at), 'D d M Y H:i:s (T)') + '</p>'
				}

				if (issue.state === 'closed') {
					html += '<p><em>Updated ' + formatDate(new Date(issue.closed_at), 'D d M Y H:i:s (T)') + '<br/>';
					html += 'The system is back in normal operation.</p>';
				}
				html += '</div>';
				html += '</div>';
				html += '</article>';
				$('#incidents').append(html);
		});
	};

	function formatDate(x, y) {
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		var fullDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		var suffix = ['st', 'nd', 'rd', 'th'];
		var z = {
			a: (x.getHours() >= 12) ? 'pm' : 'am',
			A: (x.getHours() >= 12) ? 'PM' : 'AM',
			B: Math.floor((((x.getUTCHours() + 1) % 24) + x.getUTCMinutes() / 60 + x.getUTCSeconds() / 3600) * 1000 / 24),
			c: x.toISOString(),
			m: (x.getHours().toString().length == 2) ? x.getMonth() + 1 : '0' + x.getMonth() + 1,
			M: months[x.getMonth()],
			n: x.getMonth() + 1,
			L: parseInt(((x.getFullYear() % 4 == 0) && (x.getFullYear() % 100 != 0)) || (x.getFullYear() % 400 == 0)),
			F: fullMonths[x.getMonth()],
			d: (x.getDate().toString().length == 2) ? x.getDate() : '0' + x.getDate(),
			j: x.getDate(),
			D: days[x.getDay()],
			l: fullDays[x.getDay()],
			N: x.getDay() + 1,
			w: x.getDay(),
			h: (x.getHours().toString().length == 2) ? ((x.getHours() + 11) % 12 + 1) : '0' + ((x.getHours() + 11) % 12 + 1),
			H: (x.getHours().toString().length == 2) ? x.getHours() : '0' + x.getHours(),
			G: x.getHours(),
			g: ((x.getHours() + 11) % 12 + 1),
			O: x.toString().match(/([-\+][0-9]+)\s/)[1],
			i: (x.getMinutes().toString().length == 2) ? x.getMinutes() : '0' + x.getMinutes(),
			s: (x.getSeconds().toString().length == 2) ? x.getSeconds() : '0' + x.getSeconds(),
			T: x.toString().replace(/.*[(](.*)[)].*/, '$1'),
			e: x.toString().replace(/.*[(](.*)[)].*/, '$1'),
			Y: x.getFullYear(),
			y: x.getYear(),
			u: 000000,
			v: 000000,
			z: Math.round((new Date().setHours(23) - new Date(x.getYear() + 1900, 0, 1, 0, 0, 0)) / 1000 / 60 / 60 / 24) - 1,
			U: Math.round(x.getTime() / 1000),
		};
		y = y.replace(/(a+|A+|B+|c+|m+|M+|n+|L+|F+|d+|D+|j+|l+|n+|N+|w+|g+|G+|O+|e+|u+|v+|z+|U+|h+|H+|i+|s+|T+|Y+|y+)/g, function (v) {
			var t = eval('z.' + v.slice(-1));
			return t;
		});

		return y.replace(/(y+)/g, function (v) {
			return x.getFullYear().toString().slice(-v.length)
		});
	};
});
