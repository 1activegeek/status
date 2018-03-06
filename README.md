
# System Status Page

This is a simple status page to show an overview of your sites. The goal here was to create a simple, free, remote monitoring capabilty. The plan was to create something easily modified for use to show current open issues, setup notices of maintenance windows, and obviously show the current UP status of sites. This work is not originally done by me, but I like to think I've improved on and fixed previous works by others.

This is based off [status](https://github.com/flybaseio/status) by [@flybaseio](https://github.com/flybaseio) which is originally based on [statuspage](https://github.com/jayfk/statuspage) by [@jayfk](https://github.com/jayfk). Please feel free to fork, modify, and help improve! 

Large thanks to [@vertig0ne](https://github.com/veritg0ne) for the help with adapting this. More credit due to him for manipulation of the code so far. 

## Features

* [x] Fetch service status dynamically from REST API using UptimeRobot
* [x] Fetch incident messages from GitHub Issues
* [x] Dynamically display issues as either Incidents or Maintenance
* [x] Top level notification bar to indicate overall status
* [x] Only displays up to last 14 days of incidents

## Work-In-Progress
* [x] Report no maintenance scheduled if none exist
* [x] Reduce API calls to GH by combining incident/maintenance request
* [ ] Enable use of StatusCake (option for SC or UR)
* [ ] Modify Github API usage to authenticated to reduce possible API limiting (currently GH only allows 60/hr)
* [ ] Tooltip popups on individual monitors to provide more "details"
* [ ] Don't display maintenance windows after they've passed if they aren't closed
* [ ] Render list in alphabetical order, or some order options
* [ ] Validate usability on GitLab - possible load balance through DNS to GL and GH
* [ ] Button to report an issue if everything ok but having a problem
* [ ] Subscription button to request getting notifications of status updates (driven by something else)



#### How to use Github Issues

This is one of the main alterations from the original project. I've done away with the idea of using different labels to define things like an outage, operational, degraded, etc. The way they were set to work just didn't really make sense to me anyway to duplicate work that was done automatically from the status checks.

The core functionality of creating incidents and maintenance notifications, is managed by the creation of issues on Github for the repo that will serve up the page. The basic idea here is that the page is setup to run javascript on every render. This js will query GitHub for the list of issues. Based on certain labels, they will be listed in the corresponding sections. Times will be updated appropriately as well to allow folks to see/know when the latest update to issues was posted as well.

If you wish to update the incident with new information, adjust the details, etc - you will need to EDIT your original issue title/comment. These are the only details provided in the API calls, and thus are required to show the pertinent information. There are currently 3 label mechanisms employed here. Please remember that one of the first 2 labels MUST be added to the issue, or you won't see it on your page at all.

- `incident` - This is used to create an incident in the bottom timeline. This is the main goal here to communicate information around outages.
- `maintenance` - This is used to create a maintenance notification. The idea is that you can easily create a notice to let users know when there is going to be downtime.
- `system:<name>` - This is used along with the incident label, to indicate a specific system that the incident corresponds to. While not necessary, sometimes it's a quick/easy way to correlate issues to a specific service. Simply substitute `<name>` with an appropriate name to match the service experiencing problems. Multiple of these tags can be used for each incident as well.

#### StatusCake CSS

At the bottom of the page, there is currently a section that shows a portion of a statuscake public reporting page. This is used to show historical uptime information served directly from them. The following CSS will need to be entered into the Custom CSS Field on the Public Reporting Page edit screen.

<details>

  <summary>Expand for Code</summary>

```css
    .Box {
      border-radius: 0;
      border-color: white;
      border: 1px solid #dddddd;
  }

  .Box:first-child {
      display: none !important;
  }

  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
      float: none;
  width:100%;
  }

  header, #content-header {
  display:none;
  }

  .container {
      width: 100%;
  margin:0px !important;
  padding:0px !important;
  }

  .col-md-3 {
  display:none;
  }

  * {
  overflow: hidden;
  }
  .table-striped > tbody > tr {
      background-color: #36393e !important;
  color:white;
  }
  .table-striped > tbody > tr:nth-of-type(2n+1) {
      background-color: #424448 !important;
  color:white;
  }

  .table-full thead {
      background: #424448;
      color: white;
  }

  .AlignCentre {
      text-align: center;
  }

  .Title {
  display:none;
  }
```
</details>  

[MIT Licensed](https://raw.githubusercontent.com/flybaseio/status/gh-pages/LICENSE)
