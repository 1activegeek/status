var config = {
  platform: 'hcio', // Use this to choose which platform for monitoring - 'uptimerobot' or 'hcio'
  uptimerobot: {
    api_keys: [ // Be sure these are read only API keys, pull one for each monitor
      'm779828614-2b8e76a1f638f179db6f01be',
      'm779757287-11996787b4a4ddb79cae343b',
      'm779757278-82acbbedc86d26ebbc129945',
      'm779762016-33deea24d6a3e73e524d8ab0',
      'm779870719-a710902a0c001a03244eac5e',
      'm779870718-eada06ba00200d8ced148b37'
    ],
    logs: 1,
    response_times: 1,
    all_time_uptime_ratio: 1,
    custom_uptime_ratios: "1-7-14-30", // Not yet implemented?
    response_times_average: 30,
    response_times_warning: 1500,
  },
  hcio: {
    checks: [ // Pull these from your settings page - select json view, copy paste
      ['MixFlix','https://healthchecks.io/badge/5396a8fd-1fa1-4942-97f7-7ed1f4/Xjdq8VTf/domain.json'],
      ['Plex','https://healthchecks.io/badge/5396a8fd-1fa1-4942-97f7-7ed1f4/3DcIO04e/plex.json'],
      ['Requests','https://healthchecks.io/badge/5396a8fd-1fa1-4942-97f7-7ed1f4/LImRe2-D/requests.json'],
      ['Search(M)','https://healthchecks.io/badge/5396a8fd-1fa1-4942-97f7-7ed1f4/ASUiO0Jp/search-m.json'],
      ['Search(T)','https://healthchecks.io/badge/5396a8fd-1fa1-4942-97f7-7ed1f4/PgpYn-BN/search-t.json']
    ]
  },
  git_source: 'github', // Use this to choose which location you'd like to post - 'github' or 'gitlab' supported
  github: {
    org: '1activegeek',
    repo: 'status'
  },
  gitlab: {
    org: '1activegeek',
    repo: 'status'
  },
  theme: 'dark', // Use this to set the theme coloring - 'dark' or 'light' suppported
  incident_days: '14' // Use this to indicate after how many days incidents/maintenace will no longer appear on the page
}
// Set your desired text options here for the various statuses
const status_text = {
  'operational': 'operational',
  'investigating': 'investigating',
  'outage': 'outage',
  'degraded': 'degraded',
};
