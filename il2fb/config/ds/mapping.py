# coding: utf-8


OPTIONS_MAPPING = {
    'NET.serverName': 'about.name',
    'NET.serverDescription': 'about.description',

    'NET.serverChannels': 'connection.max_clients',
    'NET.speed': 'connection.bandwidth',

    'NET.localHost': 'connection.host',
    'NET.localPort': 'connection.port',

    'NET.socksHost': 'connection.proxy.host',
    'NET.socksPort': 'connection.proxy.port',
    'NET.socksUser': 'connection.proxy.user',
    'NET.socksPwd': 'connection.proxy.password',

    'NET.checkRuntime': 'anticheat.version_check_level',
    'NET.checkServerTimeSpeed': 'anticheat.speedhack.check_server_time_speed',
    'NET.checkClientTimeSpeed': 'anticheat.speedhack.check_client_time_speed',
    'NET.checkTimeSpeedDifferense': 'anticheat.speedhack.max_time_difference',
    'NET.checkTimeSpeedInterval': 'anticheat.speedhack.max_time_difference_period',

    'NET.difficulty': 'misc.difficulty',
    'NET.SkinDownload': 'misc.display_custom_skins',
    'NET.allowCustomSounds': 'misc.allow_custom_sounds',
    'NET.reflyDisabled': 'refly.enabled',
    'NET.reflyKIADelay': 'refly.death_penalty',
    'NET.reflyKIADelayMultiplier': 'refly.death_penalty_multiplier',
    'NET.maxAllowedKIA': 'refly.death_limit',
    'NET.allowMorseAsText': 'morse.allow_morse_as_text',
    'NET.filterUserNames': 'misc.filter_user_names',

    'NET.disableNetStatStatistics': 'statistics.enabled',
    'NET.showPilotNumber': 'statistics.users.show_number',
    'NET.showPilotPing': 'statistics.users.show_ping',
    'NET.showPilotName': 'statistics.users.show_name',
    'NET.showPilotArmy': 'statistics.users.show_belligerent',
    'NET.showPilotACDesignation': 'statistics.users.show_aircraft_designation',
    'NET.showPilotACType': 'statistics.users.show_aircraft_type',
    'NET.showPilotScore': 'statistics.users.show_score',
    'NET.showTeamScore': 'statistics.belligerents.show_score',
    'NET.cumulativeTeamScore': 'statistics.belligerents.accumulate_score',

    'Console.IP': 'console.connection.port',
    'Console.IPS': 'console.connection.allowed_hosts',
    'Console.LOG': 'console.logging.enabled',
    'Console.LOGFILE': 'console.logging.file_name',
    'Console.LOGTIME': 'console.logging.log_time',
    'Console.LOGKEEP': 'console.logging.keep_file',
    'Console.HISTORY': 'console.history.max_records',
    'Console.HISTORYCMD': 'console.history.max_commands',

    'DeviceLink.host': 'device_link.connection.host',
    'DeviceLink.port': 'device_link.connection.port',
    'DeviceLink.IPS': 'device_link.connection.allowed_hosts',

    'game.eventlog': 'events.logging.file_name',
    'game.eventlogkeep': 'events.logging.keep_file',
    'game.eventlogHouse': 'events.logging.log_buildings',

    'game.NoMissionInfoHud': 'hud.no_mission_info',
    'game.noKillInfoHud': 'hud.no_kill_info',
    'game.lowInfoHud': 'hud.display_at_bottom',
    'game.ShowMorseAsText': 'morse.show_morse_as_text',
    'game.BlockMorseChat': 'morse.block_morse_chat',
    'game.SmallMapWPLabels': 'misc.small_way_point_labels',
    'game.SkipParatrooperViews': 'misc.skip_paratrooper_views',
    'game.TypeClouds': 'misc.use_new_clouds_rendering',

    'chat.autoLogDetail': 'events.chat_level',

    'MaxLag.nearMaxLagTime': 'anticheat.lags.max_time.near',
    'MaxLag.farMaxLagTime': 'anticheat.lags.max_time.far',
    'MaxLag.cheaterWarningDelay': 'anticheat.lags.warnings.delay',
    'MaxLag.cheaterWarningNum': 'anticheat.lags.warnings.max_number',
}
