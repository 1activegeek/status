# System Status Page

This is a simple status page to show an overview of your sites.

We wanted to make a simple status page that queries the uptime robot API to get a status of each page and also display any issues.

Based on the awesome [statuspage](https://github.com/pyupio/statuspage) by @pyupio, but simplified.

## Features

* [x] Fetch service status dynamically from REST API
* [x] Fetch incident messages from GitHub Issues

#### How to use Github Issues

We've set this up to use labels to identify issues:

- `operational` means all systems good.
- `investigating` means under investigation.
- `outage` to identify an outage.
- `degraded` to identify an issue causing degraded performance.

On top of that, you can add labels that start with `system:` and they will show what system the issue is related to. For example `system:blog` would show an issue with our blog.

Labeling an issue with any of these tags will reflect on the status page.

## [MIT Licensed](https://raw.githubusercontent.com/flybaseio/status/gh-pages/LICENSE)
