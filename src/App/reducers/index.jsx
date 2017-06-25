import { combineReducers } from 'redux';

import {
  DEFAULTS_REQUEST, DEFAULTS_SUCCESS, DEFAULTS_FAILURE,

  PARSE_FILE_REQUEST, PARSE_FILE_SUCCESS, PARSE_FILE_FAILURE,

  SELECT_TAB,

  SET_SERVER_NAME, SET_SERVER_DESCRIPTION,

  SET_VERSION_CHECK_LEVEL,
  SET_SPEEDHACK_CHECK_SERVER_TIME_SPEED, SET_SPEEDHACK_CHECK_CLIENT_TIME_SPEED,
  SET_SPEEDHACK_MAX_TIME_DIFFERENCE, SET_SPEEDHACK_MAX_TIME_DIFFERENCE_PERIOD,
  SET_LAGS_MAX_TIME_NEAR, SET_LAGS_MAX_TIME_FAR, SET_LAGS_WARNINGS_DELAY,
  SET_LAGS_WARNINGS_LIMIT, TOGGLE_LAGS_WARNINGS_LIMIT,

  SET_CONNECTION_PROXY_HOST, SET_CONNECTION_PROXY_PORT, SET_CONNECTION_PROXY_USER,
  SET_CONNECTION_PROXY_PASSWORD,
  SET_CONNECTION_HOST, SET_CONNECTION_PORT, SET_CONNECTION_MAX_CLIENTS,
  SET_CONNECTION_BANDWIDTH,

  TOGGLE_CONSOLE_CONNECTION_PORT, SET_CONSOLE_CONNECTION_PORT,
  ADD_CONSOLE_CONNECTION_ALLOWED_HOST_START,
  ADD_CONSOLE_CONNECTION_ALLOWED_HOST, DELETE_CONSOLE_CONNECTION_ALLOWED_HOST,
  SET_CONSOLE_LOGGING_ENABLE,
  SET_CONSOLE_LOGGING_KEEP_FILE, SET_CONSOLE_LOGGING_LOG_TIME,
  SET_CONSOLE_LOGGING_FILE_NAME,
  SET_CONSOLE_HISTORY_MAX_RECORDS, SET_CONSOLE_HISTORY_MAX_COMMANDS,

  SET_DEVICE_LINK_CONNECTION_HOST,
  TOGGLE_DEVICE_LINK_CONNECTION_PORT, SET_DEVICE_LINK_CONNECTION_PORT,
  ADD_DEVICE_LINK_CONNECTION_ALLOWED_HOST_START,
  ADD_DEVICE_LINK_CONNECTION_ALLOWED_HOST,
  DELETE_DEVICE_LINK_CONNECTION_ALLOWED_HOST,

  SET_EVENTS_CHAT_LEVEL, SET_EVENTS_LOGGING_KEEP_FILE,
  SET_EVENTS_LOGGING_LOG_BUILDINGS, SET_EVENTS_LOGGING_FILE_NAME,

  SET_HUD_SHOW_MISSION_INFO, SET_HUD_SHOW_KILL_INFO, SET_HUD_SHOW_AT_BOTTOM,

  SET_ALLOW_MORSE_AS_TEXT, SET_SHOW_MORSE_AS_TEXT, SET_BLOCK_MORSE_CHAT,

  SET_REFLY_ENABLED, SET_REFLY_DEATH_PENALTY,
  SET_REFLY_DEATH_PENALTY_MULTIPLIER, TOGGLE_REFLY_DEATH_LIMIT,
  SET_REFLY_DEATH_LIMIT,

  SET_STATISTICS_ENABLED,
  SET_STATISTICS_BELLIGERENTS_SHOW_SCORE,
  SET_STATISTICS_BELLIGERENTS_ACCUMULATE_SCORE,
  SET_STATISTICS_USERS_SHOW_BELLIGERENT, SET_STATISTICS_USERS_SHOW_CALLSIGN,
  SET_STATISTICS_USERS_SHOW_TAIL_NUMBER, SET_STATISTICS_USERS_SHOW_PING,
  SET_STATISTICS_USERS_SHOW_AIRCRAFT_DESIGNATION,
  SET_STATISTICS_USERS_SHOW_AIRCRAFT_TYPE,
  SET_STATISTICS_USERS_SHOW_SCORE,

  SET_MISC_DIFFICULTY, SET_MISC_DISPLAY_CUSTOM_SKINS,
  SET_MISC_ALLOW_CUSTOM_SOUNDS, SET_MISC_FILTER_USER_NAMES,
  SET_MISC_DISPLAY_SMALL_WAY_POINT_LABELS, SET_MISC_SKIP_PARATROOPER_VIEWS,
  SET_MISC_USE_NEW_CLOUDS_RENDERING,
} from '../actions';


function activeTab(state='about', action) {
  switch (action.type) {
    case SELECT_TAB:
      return action.tabName;
    default:
      return state;
  }
}


function configAbout(state = {
  name: "",
  description: "",
}, action) {
  switch (action.type) {
    case SET_SERVER_NAME:
      return Object.assign({}, state, {
        name: action.value,
      })
    case SET_SERVER_DESCRIPTION:
      return Object.assign({}, state, {
        description: action.value,
      })
    default:
      return state;
  }
}


const DEFAULT_WARNINGS_LIMIT = 3;


function configAnticheat(state = {
  version_check_level: 0,
  "lags": {
    "max_time": {
      "near": 2.0,
      "far": 10.0
    },
    "warnings": {
      "delay": 10.0,
      "limit": DEFAULT_WARNINGS_LIMIT
    }
  },
  "speedhack": {
    "check_server_time_speed": true,
    "check_client_time_speed": false,
    "max_time_difference": 0.2,
    "max_time_difference_period": 17.0
  }
}, action) {
  switch (action.type) {
    case SET_VERSION_CHECK_LEVEL:
      return Object.assign({}, state, {
        version_check_level: action.value,
      })
    case SET_SPEEDHACK_CHECK_SERVER_TIME_SPEED:
      return Object.assign({}, state, {
        speedhack: Object.assign({}, state.speedhack, {
          check_server_time_speed: action.value,
        }),
      })
    case SET_SPEEDHACK_CHECK_CLIENT_TIME_SPEED:
      return Object.assign({}, state, {
        speedhack: Object.assign({}, state.speedhack, {
          check_client_time_speed: action.value,
        }),
      })
    case SET_SPEEDHACK_MAX_TIME_DIFFERENCE:
      return Object.assign({}, state, {
        speedhack: Object.assign({}, state.speedhack, {
          max_time_difference: action.value,
        }),
      })
    case SET_SPEEDHACK_MAX_TIME_DIFFERENCE_PERIOD:
      return Object.assign({}, state, {
        speedhack: Object.assign({}, state.speedhack, {
          max_time_difference_period: action.value,
        }),
      })
    case SET_LAGS_MAX_TIME_NEAR:
      return Object.assign({}, state, {
        lags: Object.assign({}, state.lags, {
          max_time: Object.assign({}, state.lags.max_time, {
            near: action.value,
          }),
        }),
      })
    case SET_LAGS_MAX_TIME_FAR:
      return Object.assign({}, state, {
        lags: Object.assign({}, state.lags, {
          max_time: Object.assign({}, state.lags.max_time, {
            far: action.value,
          }),
        }),
      })
    case SET_LAGS_WARNINGS_DELAY:
      return Object.assign({}, state, {
        lags: Object.assign({}, state.lags, {
          warnings: Object.assign({}, state.lags.warnings, {
            delay: action.value,
          }),
        }),
      })
    case SET_LAGS_WARNINGS_LIMIT:
      return Object.assign({}, state, {
        lags: Object.assign({}, state.lags, {
          warnings: Object.assign({}, state.lags.warnings, {
            limit: action.value,
          }),
        }),
      })
    case TOGGLE_LAGS_WARNINGS_LIMIT:
      return Object.assign({}, state, {
        lags: Object.assign({}, state.lags, {
          warnings: Object.assign({}, state.lags.warnings, {
            limit: action.value ? null : DEFAULT_WARNINGS_LIMIT,
          }),
        }),
      })
    default:
      return state;
  }
}


function configConnection(state = {
  "host": "",
  "port": 21000,
  "max_clients": 8,
  "bandwidth": 5000,
  "proxy": {
    "host": "",
    "port": 1080,
    "user": "",
    "password": ""
  }
}, action) {
  switch (action.type) {
    case SET_CONNECTION_PROXY_HOST:
      return Object.assign({}, state, {
        proxy: Object.assign({}, state.proxy, {
          host: action.value,
        }),
      })
    case SET_CONNECTION_PROXY_PORT:
      return Object.assign({}, state, {
        proxy: Object.assign({}, state.proxy, {
          port: action.value,
        }),
      })
    case SET_CONNECTION_PROXY_USER:
      return Object.assign({}, state, {
        proxy: Object.assign({}, state.proxy, {
          user: action.value,
        }),
      })
    case SET_CONNECTION_PROXY_PASSWORD:
      return Object.assign({}, state, {
        proxy: Object.assign({}, state.proxy, {
          password: action.value,
        }),
      })
    case SET_CONNECTION_HOST:
      return Object.assign({}, state, {
        host: action.value,
      })
    case SET_CONNECTION_PORT:
      return Object.assign({}, state, {
        port: action.value,
      })
    case SET_CONNECTION_MAX_CLIENTS:
      return Object.assign({}, state, {
        max_clients: action.value,
      })
    case SET_CONNECTION_BANDWIDTH:
      return Object.assign({}, state, {
        bandwidth: action.value,
      })
    default:
      return state;
  }
}


const DEFAULT_CONSOLE_CONNECTION_PORT = 20000;


function configConsole(state = {
  "connection": {
    "port": null,
    "allowed_hosts": []
  },
  "logging": {
    "enabled": false,
    "file_name": "log.lst",
    "keep_file": true,
    "log_time": false
  },
  "history": {
    "max_commands": 128,
    "max_records": 128
  }
}, action) {
  switch (action.type) {
    case TOGGLE_CONSOLE_CONNECTION_PORT:
      return Object.assign({}, state, {
        connection: Object.assign({}, state.connection, {
          port: action.value ? DEFAULT_CONSOLE_CONNECTION_PORT : null,
        }),
      })
    case SET_CONSOLE_CONNECTION_PORT:
      return Object.assign({}, state, {
        connection: Object.assign({}, state.connection, {
          port: action.value,
        }),
      })
    case ADD_CONSOLE_CONNECTION_ALLOWED_HOST:
      return (
        (
          action.value &&
          (state.connection.allowed_hosts.indexOf(action.value) === -1)
        )
        ? Object.assign({}, state, {
            connection: Object.assign({}, state.connection, {
              allowed_hosts: [...state.connection.allowed_hosts, action.value],
            }),
          })
        : state
      );
    case DELETE_CONSOLE_CONNECTION_ALLOWED_HOST:
      return Object.assign({}, state, {
        connection: Object.assign({}, state.connection, {
          allowed_hosts: state.connection.allowed_hosts.filter((value) => {
            return value !== action.value;
          }),
        }),
      })
    case SET_CONSOLE_LOGGING_ENABLE:
      return Object.assign({}, state, {
        logging: Object.assign({}, state.logging, {
          enabled: action.value,
        }),
      })
    case SET_CONSOLE_LOGGING_KEEP_FILE:
      return Object.assign({}, state, {
        logging: Object.assign({}, state.logging, {
          keep_file: action.value,
        }),
      })
    case SET_CONSOLE_LOGGING_LOG_TIME:
      return Object.assign({}, state, {
        logging: Object.assign({}, state.logging, {
          log_time: action.value,
        }),
      })
    case SET_CONSOLE_LOGGING_FILE_NAME:
      return Object.assign({}, state, {
        logging: Object.assign({}, state.logging, {
          file_name: action.value,
        }),
      })
    case SET_CONSOLE_HISTORY_MAX_RECORDS:
      return Object.assign({}, state, {
        history: Object.assign({}, state.history, {
          max_records: action.value,
        }),
      })
    case SET_CONSOLE_HISTORY_MAX_COMMANDS:
      return Object.assign({}, state, {
        history: Object.assign({}, state.history, {
          max_commands: action.value,
        }),
      })
    default:
      return state;
  }
}


const DEFAULT_DEVICE_LINK_CONNECTION_PORT = 10000;


function configDeviceLink(state = {
  "connection": {
    "host": "",
    "port": null,
    "allowed_hosts": []
  },
}, action) {
  switch (action.type) {
    case TOGGLE_DEVICE_LINK_CONNECTION_PORT:
      return Object.assign({}, state, {
        connection: Object.assign({}, state.connection, {
          port: action.value ? DEFAULT_DEVICE_LINK_CONNECTION_PORT : null,
        }),
      })
    case SET_DEVICE_LINK_CONNECTION_PORT:
      return Object.assign({}, state, {
        connection: Object.assign({}, state.connection, {
          port: action.value,
        }),
      })
    case ADD_DEVICE_LINK_CONNECTION_ALLOWED_HOST:
      return (
        (
          action.value &&
          (state.connection.allowed_hosts.indexOf(action.value) === -1)
        )
        ? Object.assign({}, state, {
            connection: Object.assign({}, state.connection, {
              allowed_hosts: [...state.connection.allowed_hosts, action.value],
            }),
          })
        : state
      );
    case DELETE_DEVICE_LINK_CONNECTION_ALLOWED_HOST:
      return Object.assign({}, state, {
        connection: Object.assign({}, state.connection, {
          allowed_hosts: state.connection.allowed_hosts.filter((value) => {
            return value !== action.value;
          }),
        }),
      })
    case SET_DEVICE_LINK_CONNECTION_HOST:
      return Object.assign({}, state, {
        connection: Object.assign({}, state.connection, {
          host: action.value,
        }),
      })
    default:
      return state;
  }
}


function configEvents(state = {
  "chat_level": 3,
  "logging": {
    "file_name": "eventlog.lst",
    "keep_file": true,
    "log_buildings": false
  }
}, action) {
  switch (action.type) {
    case SET_EVENTS_CHAT_LEVEL:
      return Object.assign({}, state, {
        chat_level: action.value,
      })
    case SET_EVENTS_LOGGING_KEEP_FILE:
      return Object.assign({}, state, {
        logging: Object.assign({}, state.logging, {
          keep_file: action.value,
        }),
      })
    case SET_EVENTS_LOGGING_LOG_BUILDINGS:
      return Object.assign({}, state, {
        logging: Object.assign({}, state.logging, {
          log_buildings: action.value,
        }),
      })
    case SET_EVENTS_LOGGING_FILE_NAME:
      return Object.assign({}, state, {
        logging: Object.assign({}, state.logging, {
          file_name: action.value,
        }),
      })
    default:
      return state;
  }
}


function configHUD(state = {
  "show_mission_info": true,
  "show_kill_info": true,
  "show_at_bottom": false,
}, action) {
  switch (action.type) {
    case SET_HUD_SHOW_MISSION_INFO:
      return Object.assign({}, state, {
        show_mission_info: action.value,
      })
    case SET_HUD_SHOW_KILL_INFO:
      return Object.assign({}, state, {
        show_kill_info: action.value,
      })
    case SET_HUD_SHOW_AT_BOTTOM:
      return Object.assign({}, state, {
        show_at_bottom: action.value,
      })
    default:
      return state;
  }
}


function configMorse(state = {
  "allow_morse_as_text": true,
  "show_morse_as_text": false,
  "block_morse_chat": false,
}, action) {
  switch (action.type) {
    case SET_ALLOW_MORSE_AS_TEXT:
      return Object.assign({}, state, {
        allow_morse_as_text: action.value,
      })
    case SET_SHOW_MORSE_AS_TEXT:
      return Object.assign({}, state, {
        show_morse_as_text: action.value,
      })
    case SET_BLOCK_MORSE_CHAT:
      return Object.assign({}, state, {
        block_morse_chat: action.value,
      })
    default:
      return state;
  }
}


const DEFAULT_REFLY_DEATH_LIMIT = 1;


function configRefly(state = {
  "enabled": true,
  "death_penalty": 0,
  "death_penalty_multiplier": 0.0,
  "death_limit": null
}, action) {
  switch (action.type) {
    case SET_REFLY_ENABLED:
      return Object.assign({}, state, {
        enabled: action.value,
      })
    case SET_REFLY_DEATH_PENALTY:
      return Object.assign({}, state, {
        death_penalty: action.value,
      })
    case SET_REFLY_DEATH_PENALTY_MULTIPLIER:
      return Object.assign({}, state, {
        death_penalty_multiplier: action.value,
      })
    case SET_REFLY_DEATH_LIMIT:
      return Object.assign({}, state, {
        death_limit: action.value,
      })
    case TOGGLE_REFLY_DEATH_LIMIT:
      return Object.assign({}, state, {
        death_limit: action.value ? null : DEFAULT_REFLY_DEATH_LIMIT,
      })
    default:
      return state;
  }
}


function configStatistics(state = {
  "enabled": true,
  "users": {
    "show_tail_number": true,
    "show_ping": true,
    "show_callsign": true,
    "show_belligerent": true,
    "show_aircraft_designation": true,
    "show_aircraft_type": true,
    "show_score": true
  },
  "belligerents": {
    "show_score": false,
    "accumulate_score": false
  },
}, action) {
  switch (action.type) {
    case SET_STATISTICS_ENABLED:
      return Object.assign({}, state, {
        enabled: action.value,
      })
    case SET_STATISTICS_BELLIGERENTS_SHOW_SCORE:
      return Object.assign({}, state, {
        belligerents: Object.assign({}, state.belligerents, {
          show_score: action.value,
        }),
      })
    case SET_STATISTICS_BELLIGERENTS_ACCUMULATE_SCORE:
      return Object.assign({}, state, {
        belligerents: Object.assign({}, state.belligerents, {
          accumulate_score: action.value,
        }),
      })
    case SET_STATISTICS_USERS_SHOW_BELLIGERENT:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          show_belligerent: action.value,
        }),
      })
    case SET_STATISTICS_USERS_SHOW_CALLSIGN:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          show_callsign: action.value,
        }),
      })
    case SET_STATISTICS_USERS_SHOW_TAIL_NUMBER:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          show_tail_number: action.value,
        }),
      })
    case SET_STATISTICS_USERS_SHOW_AIRCRAFT_DESIGNATION:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          show_aircraft_designation: action.value,
        }),
      })
    case SET_STATISTICS_USERS_SHOW_AIRCRAFT_TYPE:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          show_aircraft_type: action.value,
        }),
      })
    case SET_STATISTICS_USERS_SHOW_PING:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          show_ping: action.value,
        }),
      })
    case SET_STATISTICS_USERS_SHOW_SCORE:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          show_score: action.value,
        }),
      })
    default:
      return state;
  }
}


function configMisc(state = {
  "difficulty": 193791,
  "display_custom_skins": true,
  "allow_custom_sounds": true,
  "filter_user_names": false,
  "display_small_way_point_labels": true,
  "skip_paratrooper_views": false,
  "use_new_clouds_rendering": true,
}, action) {
  switch (action.type) {
    case SET_MISC_DIFFICULTY:
      return Object.assign({}, state, {
        difficulty: action.value,
      })
    case SET_MISC_DISPLAY_CUSTOM_SKINS:
      return Object.assign({}, state, {
        display_custom_skins: action.value,
      })
    case SET_MISC_ALLOW_CUSTOM_SOUNDS:
      return Object.assign({}, state, {
        allow_custom_sounds: action.value,
      })
    case SET_MISC_FILTER_USER_NAMES:
      return Object.assign({}, state, {
        filter_user_names: action.value,
      })
    case SET_MISC_DISPLAY_SMALL_WAY_POINT_LABELS:
      return Object.assign({}, state, {
        display_small_way_point_labels: action.value,
      })
    case SET_MISC_SKIP_PARATROOPER_VIEWS:
      return Object.assign({}, state, {
        skip_paratrooper_views: action.value,
      })
    case SET_MISC_USE_NEW_CLOUDS_RENDERING:
      return Object.assign({}, state, {
        use_new_clouds_rendering: action.value,
      })
    default:
      return state;
  }
}


const configReducer = combineReducers({
  about: configAbout,
  anticheat: configAnticheat,
  connection: configConnection,
  console: configConsole,
  device_link: configDeviceLink,
  events: configEvents,
  hud: configHUD,
  morse: configMorse,
  refly: configRefly,
  statistics: configStatistics,
  misc: configMisc,
})


function config(state = {
  isFetching: false,
  isEditingConsoleConnectionAllowedHosts: false,
  isEditingDeviceLinkConnectionAllowedHosts: false,
  errorInfo: null,
  data: {},
}, action) {
  switch (action.type) {
    case DEFAULTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case DEFAULTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorInfo: null,
        data: action.data,
      })
    case DEFAULTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        data: {},
        errorInfo: action.errorInfo,
      })

    case PARSE_FILE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case PARSE_FILE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorInfo: null,
        data: action.data,
      })
    case PARSE_FILE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorInfo: action.errorInfo,
      })

    case TOGGLE_CONSOLE_CONNECTION_PORT:
      state = Object.assign({}, state, {
        isEditingConsoleConnectionAllowedHosts: (
          state.isEditingConsoleConnectionAllowedHosts &&
          action.value
        ),
      })
      break;
    case ADD_CONSOLE_CONNECTION_ALLOWED_HOST_START:
      return Object.assign({}, state, {
        isEditingConsoleConnectionAllowedHosts: true,
      })

    case TOGGLE_DEVICE_LINK_CONNECTION_PORT:
      state = Object.assign({}, state, {
        isEditingDeviceLinkConnectionAllowedHosts: (
          state.isEditingDeviceLinkConnectionAllowedHosts &&
          action.value
        ),
      })
      break;
    case ADD_DEVICE_LINK_CONNECTION_ALLOWED_HOST_START:
      return Object.assign({}, state, {
        isEditingDeviceLinkConnectionAllowedHosts: true,
      })
    default:
      break;
  }

  return {
    isFetching: state.isFetching,
    errorInfo: state.errorInfo,
    data: Object.assign({}, state.data, configReducer(state.data, action)),
  };
}


const rootReducer = combineReducers({
  activeTab,
  config,
})

export default rootReducer;
