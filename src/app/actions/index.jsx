import request from "superagent";
import urljoin from "url-join";

import { message, } from 'antd';
import FileSaver from 'file-saver';


export const DEFAULTS_REQUEST = 'DEFAULTS_REQUEST';
export const DEFAULTS_SUCCESS = 'DEFAULTS_SUCCESS';
export const DEFAULTS_FAILURE = 'DEFAULTS_FAILURE';


function requestDefaults() {
  return {
    type: DEFAULTS_REQUEST,
  };
}


function receiveDefaults(data) {
  return {
    type: DEFAULTS_SUCCESS,
    data: data,
  };
}


function failDefaults(errorInfo) {
  return {
    type: DEFAULTS_FAILURE,
    errorInfo: errorInfo,
  };
}


export function getDefaults() {
  return function (dispatch) {
    dispatch(requestDefaults())

    request
    .get(urljoin(process.env.API_BASE_URL, 'default'))
    .end((error, response) => {
      if (!response) {
        dispatch(failDefaults({
          detail: error.message
        }));
      } else if (!response.body) {
        dispatch(failDefaults({
          detail: response.statusText
        }));
      } else if (!response.ok) {
        dispatch(failDefaults(response.body));
      } else {
        dispatch(receiveDefaults(response.body.data));
      }
    });
  }
}


export const PARSE_FILE_REQUEST = 'PARSE_FILE_REQUEST';
export const PARSE_FILE_SUCCESS = 'PARSE_FILE_SUCCESS';
export const PARSE_FILE_FAILURE = 'PARSE_FILE_FAILURE';


function requestParseFile(file) {
  return {
    type: PARSE_FILE_REQUEST,
    file: file,
  };
}


function receiveParseFile(data) {
  return {
    type: PARSE_FILE_SUCCESS,
    data: data,
  };
}


function failParseFile(errorInfo) {
  return {
    type: PARSE_FILE_FAILURE,
    errorInfo: errorInfo,
  };
}


export function importConfig(file) {
  return function (dispatch) {
    dispatch(requestParseFile(file));

    request
    .post(urljoin(process.env.API_BASE_URL, 'file', 'parse'))
    .attach("file", file)
    .end((error, response) => {
      if (!response) {
        let detail = error.message;
        message.error(`Failed to import file: ${detail}`, 5);
        dispatch(failParseFile({ detail: detail }));
      } else if (!response.body) {
        let detail = response.statusText;
        message.error(`Failed to import file: ${detail}`, 5);
        dispatch(failParseFile({ detail: detail }));
      } else if (!response.ok) {
        message.error(response.body.detail, 5);
        dispatch(failParseFile(response.body));
      } else {
        message.success('Configuration file was successfully imported');
        dispatch(receiveParseFile(response.body.data));
      }
    });
  }
}


export const COMPOSE_FILE_REQUEST = 'COMPOSE_FILE_REQUEST';
export const COMPOSE_FILE_SUCCESS = 'COMPOSE_FILE_SUCCESS';
export const COMPOSE_FILE_FAILURE = 'COMPOSE_FILE_FAILURE';


function requestComposeFile(data) {
  return {
    type: COMPOSE_FILE_REQUEST,
    data: data,
  };
}


function receiveComposeFile(data) {
  return {
    type: COMPOSE_FILE_SUCCESS,
    data: data,
  };
}


function failComposeFile(errorInfo) {
  return {
    type: COMPOSE_FILE_FAILURE,
    errorInfo: errorInfo,
  };
}


export function exportConfig(data) {
  return function (dispatch) {
    dispatch(requestComposeFile(data));

    request
    .post(urljoin(process.env.API_BASE_URL, 'file', 'compose'))
    .send(data)
    .end((error, response) => {
      if (!response) {
        let detail = error.message;
        message.error(`Failed to export file: ${detail}`, 5);
        dispatch(failComposeFile({ detail: detail }));
      } else if (!response.body) {
        let detail = response.statusText;
        message.error(`Failed to export file: ${detail}`, 5);
        dispatch(failComposeFile({ detail: detail }));
      } else if (!response.ok) {
        message.error(response.body.detail, 5);
        dispatch(failComposeFile(response.body));
      } else {
        message.success('Configuration file was successfully exported');

        let data = response.body.data
          , blob = new Blob([data], {type: "text/plain"});

        FileSaver.saveAs(blob, "confs.ini");

        dispatch(receiveComposeFile(data));
      }
    });
  }
}


export const SELECT_TAB = 'SELECT_TAB';


export function selectTab(tabName) {
  return {
    type: SELECT_TAB,
    tabName: tabName,
  };
}


export const SET_SERVER_NAME = 'SET_SERVER_NAME';
export const SET_SERVER_DESCRIPTION = 'SET_SERVER_DESCRIPTION';


export function setServerName(value) {
  return {
    type: SET_SERVER_NAME,
    value: value,
  };
}


export function setServerDescription(value) {
  return {
    type: SET_SERVER_DESCRIPTION,
    value: value,
  };
}


export const SET_VERSION_CHECK_LEVEL = 'SET_VERSION_CHECK_LEVEL';
export const SET_SPEEDHACK_CHECK_SERVER_TIME_SPEED = 'SET_SPEEDHACK_CHECK_SERVER_TIME_SPEED';
export const SET_SPEEDHACK_CHECK_CLIENT_TIME_SPEED = 'SET_SPEEDHACK_CHECK_CLIENT_TIME_SPEED';
export const SET_SPEEDHACK_MAX_TIME_DIFFERENCE = 'SET_SPEEDHACK_MAX_TIME_DIFFERENCE';
export const SET_SPEEDHACK_MAX_TIME_DIFFERENCE_PERIOD = 'SET_SPEEDHACK_MAX_TIME_DIFFERENCE_PERIOD';
export const SET_LAGS_MAX_TIME_NEAR = 'SET_LAGS_MAX_TIME_NEAR';
export const SET_LAGS_MAX_TIME_FAR = 'SET_LAGS_MAX_TIME_FAR';
export const SET_LAGS_WARNINGS_DELAY = 'SET_LAGS_WARNINGS_DELAY';
export const SET_LAGS_WARNINGS_LIMIT = 'SET_LAGS_WARNINGS_LIMIT';
export const TOGGLE_LAGS_WARNINGS_LIMIT = 'TOGGLE_LAGS_WARNINGS_LIMIT';


export function setVersionCheckLevel(value) {
  return {
    type: SET_VERSION_CHECK_LEVEL,
    value: value,
  };
}


export function setSpeedhackCheckServerTimeSpeed(value) {
  return {
    type: SET_SPEEDHACK_CHECK_SERVER_TIME_SPEED,
    value: value,
  };
}


export function setSpeedhackCheckClientTimeSpeed(value) {
  return {
    type: SET_SPEEDHACK_CHECK_CLIENT_TIME_SPEED,
    value: value,
  };
}


export function setSpeedhackMaxTimeDifference(value) {
  return {
    type: SET_SPEEDHACK_MAX_TIME_DIFFERENCE,
    value: value,
  };
}


export function setSpeedhackMaxTimeDifferencePeriod(value) {
  return {
    type: SET_SPEEDHACK_MAX_TIME_DIFFERENCE_PERIOD,
    value: value,
  };
}


export function setLagsMaxTimeNear(value) {
  return {
    type: SET_LAGS_MAX_TIME_NEAR,
    value: value,
  };
}


export function setLagsMaxTimeFar(value) {
  return {
    type: SET_LAGS_MAX_TIME_FAR,
    value: value,
  };
}


export function setLagsWarningsDelay(value) {
  return {
    type: SET_LAGS_WARNINGS_DELAY,
    value: value,
  };
}


export function setLagsWarningsLimit(value) {
  return {
    type: SET_LAGS_WARNINGS_LIMIT,
    value: value,
  };
}

export function toggleLagsWarningsLimit(value) {
  return {
    type: TOGGLE_LAGS_WARNINGS_LIMIT,
    value: value,
  };
}


export const SET_CONNECTION_PROXY_HOST = 'SET_CONNECTION_PROXY_HOST';
export const SET_CONNECTION_PROXY_PORT = 'SET_CONNECTION_PROXY_PORT';
export const SET_CONNECTION_PROXY_USER = 'SET_CONNECTION_PROXY_USER';
export const SET_CONNECTION_PROXY_PASSWORD = 'SET_CONNECTION_PROXY_PASSWORD';
export const SET_CONNECTION_HOST = 'SET_CONNECTION_HOST';
export const SET_CONNECTION_PORT = 'SET_CONNECTION_PORT';
export const SET_CONNECTION_MAX_CLIENTS = 'SET_CONNECTION_MAX_CLIENTS';
export const SET_CONNECTION_BANDWIDTH = 'SET_CONNECTION_BANDWIDTH';


export function setConnectionProxyHost(value) {
  return {
    type: SET_CONNECTION_PROXY_HOST,
    value: value,
  };
}


export function setConnectionProxyPort(value) {
  return {
    type: SET_CONNECTION_PROXY_PORT,
    value: value,
  };
}


export function setConnectionProxyUser(value) {
  return {
    type: SET_CONNECTION_PROXY_USER,
    value: value,
  };
}


export function setConnectionProxyPassword(value) {
  return {
    type: SET_CONNECTION_PROXY_PASSWORD,
    value: value,
  };
}


export function setConnectionHost(value) {
  return {
    type: SET_CONNECTION_HOST,
    value: value,
  };
}


export function setConnectionPort(value) {
  return {
    type: SET_CONNECTION_PORT,
    value: value,
  };
}


export function setConnectionMaxClients(value) {
  return {
    type: SET_CONNECTION_MAX_CLIENTS,
    value: value,
  };
}


export function setConnectionBandwidth(value) {
  return {
    type: SET_CONNECTION_BANDWIDTH,
    value: value,
  };
}


export const TOGGLE_CONSOLE_CONNECTION_PORT = 'TOGGLE_CONSOLE_CONNECTION_PORT';
export const SET_CONSOLE_CONNECTION_PORT = 'SET_CONSOLE_CONNECTION_PORT';
export const ADD_CONSOLE_CONNECTION_ALLOWED_HOST_START = 'ADD_CONSOLE_CONNECTION_ALLOWED_HOST_START';
export const ADD_CONSOLE_CONNECTION_ALLOWED_HOST = 'ADD_CONSOLE_CONNECTION_ALLOWED_HOST';
export const DELETE_CONSOLE_CONNECTION_ALLOWED_HOST = 'DELETE_CONSOLE_CONNECTION_ALLOWED_HOST';
export const SET_CONSOLE_LOGGING_ENABLE = 'SET_CONSOLE_LOGGING_ENABLE';
export const SET_CONSOLE_LOGGING_KEEP_FILE = 'SET_CONSOLE_LOGGING_KEEP_FILE';
export const SET_CONSOLE_LOGGING_LOG_TIME = 'SET_CONSOLE_LOGGING_LOG_TIME';
export const SET_CONSOLE_LOGGING_FILE_NAME = 'SET_CONSOLE_LOGGING_FILE_NAME';
export const SET_CONSOLE_HISTORY_MAX_RECORDS = 'SET_CONSOLE_HISTORY_MAX_RECORDS';
export const SET_CONSOLE_HISTORY_MAX_COMMANDS = 'SET_CONSOLE_HISTORY_MAX_COMMANDS';


export function toggleConsoleConnectionPort(value) {
  return {
    type: TOGGLE_CONSOLE_CONNECTION_PORT,
    value: value,
  };
}


export function setConsoleConnectionPort(value) {
  return {
    type: SET_CONSOLE_CONNECTION_PORT,
    value: value,
  };
}


export function addConsoleConnectionAllowedHostStart() {
  return {
    type: ADD_CONSOLE_CONNECTION_ALLOWED_HOST_START,
  };
}


export function addConsoleConnectionAllowedHost(value) {
  return {
    type: ADD_CONSOLE_CONNECTION_ALLOWED_HOST,
    value: value,
  };
}


export function deteleConsoleConnectionAllowedHost(value) {
  return {
    type: DELETE_CONSOLE_CONNECTION_ALLOWED_HOST,
    value: value,
  };
}


export function setConsoleLoggingEnable(value) {
  return {
    type: SET_CONSOLE_LOGGING_ENABLE,
    value: value,
  };
}


export function setConsoleLoggingKeepFile(value) {
  return {
    type: SET_CONSOLE_LOGGING_KEEP_FILE,
    value: value,
  };
}


export function setConsoleLoggingLogTime(value) {
  return {
    type: SET_CONSOLE_LOGGING_LOG_TIME,
    value: value,
  };
}


export function setConsoleLoggingFileName(value) {
  return {
    type: SET_CONSOLE_LOGGING_FILE_NAME,
    value: value,
  };
}


export function setConsoleHistoryMaxRecords(value) {
  return {
    type: SET_CONSOLE_HISTORY_MAX_RECORDS,
    value: value,
  };
}


export function setConsoleHistoryMaxCommands(value) {
  return {
    type: SET_CONSOLE_HISTORY_MAX_COMMANDS,
    value: value,
  };
}


export const SET_DEVICE_LINK_CONNECTION_HOST = 'SET_DEVICE_LINK_CONNECTION_HOST';
export const TOGGLE_DEVICE_LINK_CONNECTION_PORT = 'TOGGLE_DEVICE_LINK_CONNECTION_PORT';
export const SET_DEVICE_LINK_CONNECTION_PORT = 'SET_DEVICE_LINK_CONNECTION_PORT';
export const ADD_DEVICE_LINK_CONNECTION_ALLOWED_HOST_START = 'ADD_DEVICE_LINK_CONNECTION_ALLOWED_HOST_START';
export const ADD_DEVICE_LINK_CONNECTION_ALLOWED_HOST = 'ADD_DEVICE_LINK_CONNECTION_ALLOWED_HOST';
export const DELETE_DEVICE_LINK_CONNECTION_ALLOWED_HOST = 'DELETE_DEVICE_LINK_CONNECTION_ALLOWED_HOST';


export function toggleDeviceLinkConnectionPort(value) {
  return {
    type: TOGGLE_DEVICE_LINK_CONNECTION_PORT,
    value: value,
  };
}


export function setDeviceLinkConnectionPort(value) {
  return {
    type: SET_DEVICE_LINK_CONNECTION_PORT,
    value: value,
  };
}


export function addDeviceLinkConnectionAllowedHostStart() {
  return {
    type: ADD_DEVICE_LINK_CONNECTION_ALLOWED_HOST_START,
  };
}


export function addDeviceLinkConnectionAllowedHost(value) {
  return {
    type: ADD_DEVICE_LINK_CONNECTION_ALLOWED_HOST,
    value: value,
  };
}


export function deteleDeviceLinkConnectionAllowedHost(value) {
  return {
    type: DELETE_DEVICE_LINK_CONNECTION_ALLOWED_HOST,
    value: value,
  };
}


export function setDeviceLinkConnectionHost(value) {
  return {
    type: SET_DEVICE_LINK_CONNECTION_HOST,
    value: value,
  };
}


export const SET_EVENTS_CHAT_LEVEL = 'SET_EVENTS_CHAT_LEVEL';
export const SET_EVENTS_LOGGING_KEEP_FILE = 'SET_EVENTS_LOGGING_KEEP_FILE';
export const SET_EVENTS_LOGGING_LOG_BUILDINGS = 'SET_EVENTS_LOGGING_LOG_BUILDINGS';
export const SET_EVENTS_LOGGING_FILE_NAME = 'SET_EVENTS_LOGGING_FILE_NAME';


export function setEventsChatLevel(value) {
  return {
    type: SET_EVENTS_CHAT_LEVEL,
    value: value,
  }
}


export function setEventsLoggingKeepFile(value) {
  return {
    type: SET_EVENTS_LOGGING_KEEP_FILE,
    value: value,
  }
}


export function setEventsLoggingLogBuildings(value) {
  return {
    type: SET_EVENTS_LOGGING_LOG_BUILDINGS,
    value: value,
  }
}


export function setEventsLoggingFileName(value) {
  return {
    type: SET_EVENTS_LOGGING_FILE_NAME,
    value: value,
  }
}


export const SET_HUD_SHOW_MISSION_INFO = 'SET_HUD_SHOW_MISSION_INFO';
export const SET_HUD_SHOW_KILL_INFO = 'SET_HUD_SHOW_KILL_INFO';
export const SET_HUD_SHOW_AT_BOTTOM = 'SET_HUD_SHOW_AT_BOTTOM';


export function setHUDShowMissionInfo(value) {
  return {
    type: SET_HUD_SHOW_MISSION_INFO,
    value: value,
  }
}


export function setHUDShowKillInfo(value) {
  return {
    type: SET_HUD_SHOW_KILL_INFO,
    value: value,
  }
}


export function setHUDShowAtBottom(value) {
  return {
    type: SET_HUD_SHOW_AT_BOTTOM,
    value: value,
  }
}


export const SET_ALLOW_MORSE_AS_TEXT = 'SET_ALLOW_MORSE_AS_TEXT';
export const SET_SHOW_MORSE_AS_TEXT = 'SET_SHOW_MORSE_AS_TEXT';
export const SET_BLOCK_MORSE_CHAT = 'SET_BLOCK_MORSE_CHAT';


export function setAllowMorseAsText(value) {
  return {
    type: SET_ALLOW_MORSE_AS_TEXT,
    value: value,
  }
}


export function setShowMorseAsText(value) {
  return {
    type: SET_SHOW_MORSE_AS_TEXT,
    value: value,
  }
}


export function setBlockMorseChat(value) {
  return {
    type: SET_BLOCK_MORSE_CHAT,
    value: value,
  }
}


export const SET_REFLY_ENABLED = 'SET_REFLY_ENABLED';
export const SET_REFLY_DEATH_PENALTY = 'SET_REFLY_DEATH_PENALTY';
export const SET_REFLY_DEATH_PENALTY_MULTIPLIER = 'SET_REFLY_DEATH_PENALTY_MULTIPLIER';
export const TOGGLE_REFLY_DEATH_LIMIT = 'TOGGLE_REFLY_DEATH_LIMIT';
export const SET_REFLY_DEATH_LIMIT = 'SET_REFLY_DEATH_LIMIT';


export function setReflyEnabled(value) {
  return {
    type: SET_REFLY_ENABLED,
    value: value,
  }
}


export function setReflyDeathPenalty(value) {
  return {
    type: SET_REFLY_DEATH_PENALTY,
    value: value,
  }
}


export function setReflyDeathPenaltyMultiplier(value) {
  return {
    type: SET_REFLY_DEATH_PENALTY_MULTIPLIER,
    value: value,
  }
}


export function toggleReflyDeathLimit(value) {
  return {
    type: TOGGLE_REFLY_DEATH_LIMIT,
    value: value,
  }
}


export function setReflyDeathLimit(value) {
  return {
    type: SET_REFLY_DEATH_LIMIT,
    value: value,
  }
}


export const SET_STATISTICS_ENABLED = 'SET_STATISTICS_ENABLED';
export const SET_STATISTICS_BELLIGERENTS_SHOW_SCORE = 'SET_STATISTICS_BELLIGERENTS_SHOW_SCORE';
export const SET_STATISTICS_BELLIGERENTS_ACCUMULATE_SCORE = 'SET_STATISTICS_BELLIGERENTS_ACCUMULATE_SCORE';
export const SET_STATISTICS_USERS_SHOW_BELLIGERENT = 'SET_STATISTICS_USERS_SHOW_BELLIGERENT';
export const SET_STATISTICS_USERS_SHOW_CALLSIGN = 'SET_STATISTICS_USERS_SHOW_CALLSIGN';
export const SET_STATISTICS_USERS_SHOW_TAIL_NUMBER = 'SET_STATISTICS_USERS_SHOW_TAIL_NUMBER';
export const SET_STATISTICS_USERS_SHOW_AIRCRAFT_DESIGNATION = 'SET_STATISTICS_USERS_SHOW_AIRCRAFT_DESIGNATION';
export const SET_STATISTICS_USERS_SHOW_AIRCRAFT_TYPE = 'SET_STATISTICS_USERS_SHOW_AIRCRAFT_TYPE';
export const SET_STATISTICS_USERS_SHOW_PING = 'SET_STATISTICS_USERS_SHOW_PING';
export const SET_STATISTICS_USERS_SHOW_SCORE = 'SET_STATISTICS_USERS_SHOW_SCORE';

export function setStatisticsEnabled(value) {
  return {
    type: SET_STATISTICS_ENABLED,
    value: value,
  }
}


export function setStatisticsBelligerentsShowScore(value) {
  return {
    type: SET_STATISTICS_BELLIGERENTS_SHOW_SCORE,
    value: value,
  }
}


export function setStatisticsBelligerentsAccumulateScore(value) {
  return {
    type: SET_STATISTICS_BELLIGERENTS_ACCUMULATE_SCORE,
    value: value,
  }
}


export function setStatisticsUsersShowBelligerent(value) {
  return {
    type: SET_STATISTICS_USERS_SHOW_BELLIGERENT,
    value: value,
  }
}


export function setStatisticsUsersShowCallsign(value) {
  return {
    type: SET_STATISTICS_USERS_SHOW_CALLSIGN,
    value: value,
  }
}


export function setStatisticsUsersShowTailNumber(value) {
  return {
    type: SET_STATISTICS_USERS_SHOW_TAIL_NUMBER,
    value: value,
  }
}


export function setStatisticsUsersShowAircraftDesignation(value) {
  return {
    type: SET_STATISTICS_USERS_SHOW_AIRCRAFT_DESIGNATION,
    value: value,
  }
}


export function setStatisticsUsersShowAircraftType(value) {
  return {
    type: SET_STATISTICS_USERS_SHOW_AIRCRAFT_TYPE,
    value: value,
  }
}


export function setStatisticsUsersShowPing(value) {
  return {
    type: SET_STATISTICS_USERS_SHOW_PING,
    value: value,
  }
}


export function setStatisticsUsersShowScore(value) {
  return {
    type: SET_STATISTICS_USERS_SHOW_SCORE,
    value: value,
  }
}


export const SET_MISC_DIFFICULTY = 'SET_MISC_DIFFICULTY';
export const SET_MISC_DISPLAY_CUSTOM_SKINS = 'SET_MISC_DISPLAY_CUSTOM_SKINS';
export const SET_MISC_ALLOW_CUSTOM_SOUNDS = 'SET_MISC_ALLOW_CUSTOM_SOUNDS';
export const SET_MISC_FILTER_USER_NAMES = 'SET_MISC_FILTER_USER_NAMES';
export const SET_MISC_DISPLAY_SMALL_WAY_POINT_LABELS = 'SET_MISC_DISPLAY_SMALL_WAY_POINT_LABELS';
export const SET_MISC_SKIP_PARATROOPER_VIEWS = 'SET_MISC_SKIP_PARATROOPER_VIEWS';
export const SET_MISC_USE_NEW_CLOUDS_RENDERING = 'SET_MISC_USE_NEW_CLOUDS_RENDERING';


export function setMiscDifficulty(value) {
  return {
    type: SET_MISC_DIFFICULTY,
    value: value,
  }
}


export function setMiscDisplayCustomSkins(value) {
  return {
    type: SET_MISC_DISPLAY_CUSTOM_SKINS,
    value: value,
  }
}


export function setMiscAllowCustomSounds(value) {
  return {
    type: SET_MISC_ALLOW_CUSTOM_SOUNDS,
    value: value,
  }
}


export function setMiscFilterUserNames(value) {
  return {
    type: SET_MISC_FILTER_USER_NAMES,
    value: value,
  }
}


export function setMiscDisplaySmallWayPointLabels(value) {
  return {
    type: SET_MISC_DISPLAY_SMALL_WAY_POINT_LABELS,
    value: value,
  }
}


export function setMiscSkipParatrooperViews(value) {
  return {
    type: SET_MISC_SKIP_PARATROOPER_VIEWS,
    value: value,
  }
}


export function setMiscUseNewCloudsRendering(value) {
  return {
    type: SET_MISC_USE_NEW_CLOUDS_RENDERING,
    value: value,
  }
}

export const LANGUAGE = 'LANGUAGE';

