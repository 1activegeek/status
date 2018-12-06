
# System Status Page

This is a simple status page to show an overview of your sites. The goal here was to create a simple, free, remote monitoring capabilty. The plan was to create something easily modified for use to show current open issues, setup notices of maintenance windows, and obviously show the current UP status of sites. This work is not originally done by me, but I like to think I've improved on and fixed previous works by others.

This is based off [status](https://github.com/flybaseio/status) by [@flybaseio](https://github.com/flybaseio) which is originally based on [statuspage](https://github.com/jayfk/statuspage) by [@jayfk](https://github.com/jayfk). Please feel free to fork, modify, and help improve! 

Large thanks to [@vertig0ne](https://github.com/vertig0ne) for the help with adapting this. More credit due to him for manipulation of the code so far. 

## Configuration/Usage

Check the [wiki](https://github.com/1activegeek/status/wiki) for details on configuration and usage.

## Features

* [x] Fetch service status dynamically from REST API using UptimeRobot
* [x] Fetch incident messages from GitHub Issues
* [x] Dynamically display issues as either Incidents or Maintenance
* [x] Top level notification bar to indicate overall status
* [x] Only displays up to last 14 days of incidents
* [x] Select from light or dark theme

## Future, aka Work-In-Progress
* [x] ~~Report no maintenance scheduled if none exist~~
* [x] ~~Reduce API calls to GH by combining incident/maintenance request~~
[![Feature Requests](http://feathub.com/1activegeek/status?format=svg)](http://feathub.com/1activegeek/status)

[MIT Licensed](https://raw.githubusercontent.com/flybaseio/status/gh-pages/LICENSE)
