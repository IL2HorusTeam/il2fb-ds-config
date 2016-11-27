# coding: utf-8


OPTIONS_MAPPING = {
    'NET.serverName': 'about.name',
    'NET.serverDescription': 'about.description',

    'NET.serverChannels': 'connection.max_clients',
    'NET.speed': 'qos.throughput',

    'NET.localHost': 'connection.host',
    'NET.localPort': 'connection.port',

    'NET.socksHost': 'connection.proxy.host',
    'NET.socksPort': 'connection.proxy.port',
    'NET.socksUser': 'connection.proxy.user',
    'NET.socksPwd': 'connection.proxy.password',

    'NET.checkRuntime': 'other.compatibility_level',
    'NET.checkServerTimeSpeed': 'qos.time_speed.check_server',
    'NET.checkClientTimeSpeed': 'qos.time_speed.check_client',
    'NET.checkTimeSpeedDifferense': 'qos.time_speed.allowed_differense',
    'NET.checkTimeSpeedInterval': 'qos.time_speed.check_interval',

    'NET.difficulty': 'other.difficulty',
    'NET.SkinDownload': 'other.display_custom_skins',
    'NET.allowCustomSounds': 'other.allow_custom_sounds',
    'NET.reflyDisabled': 'refly.is_disabled',
    'NET.reflyKIADelay': 'refly.kia_delay',
    'NET.reflyKIADelayMultiplier': 'refly.kia_delay_multiplier',
    'NET.maxAllowedKIA': 'refly.max_kia',
    'NET.allowMorseAsText': 'morse.allow_morse_as_text',
    'NET.filterUserNames': 'other.filter_user_names',

    'NET.disableNetStatStatistics': 'statistics.is_disabled',
    'NET.showPilotNumber': 'statistics.users.show_number',
    'NET.showPilotPing': 'statistics.users.show_ping',
    'NET.showPilotName': 'statistics.users.show_name',
    'NET.showPilotArmy': 'statistics.users.show_army',
    'NET.showPilotACDesignation': 'statistics.users.show_aircraft_designation',
    'NET.showPilotACType': 'statistics.users.show_aircraft_type',
    'NET.showPilotScore': 'statistics.users.show_score',
    'NET.showTeamScore': 'statistics.belligerents.show_score',
    'NET.cumulativeTeamScore': 'statistics.belligerents.accumulate_score',

    'Console.IP': 'console.connection.port',
    'Console.IPS': 'console.connection.allowed_hosts',
    'Console.LOG': 'console.logging.is_enabled',
    'Console.LOGFILE': 'console.logging.file',
    'Console.LOGTIME': 'console.logging.log_time',
    'Console.LOGKEEP': 'console.logging.keep',
    'Console.HISTORY': 'console.history_size.records',
    'Console.HISTORYCMD': 'console.history_size.commands',

    'DeviceLink.host': 'device_link.connection.host',
    'DeviceLink.port': 'device_link.connection.port',
    'DeviceLink.IPS': 'device_link.connection.allowed_hosts',

    'game.eventlog': 'events.logging.file',
    'game.eventlogkeep': 'events.logging.keep',
    'game.eventlogHouse': 'events.logging.log_buildings',

    'game.NoMissionInfoHud': 'hud.no_mission_info',
    'game.noKillInfoHud': 'hud.no_kill_info',
    'game.lowInfoHud': 'hud.display_at_bottom',
    'game.ShowMorseAsText': 'morse.show_morse_as_text',
    'game.BlockMorseChat': 'morse.block_morse_chat',
    'game.SmallMapWPLabels': 'other.small_way_point_labels',
    'game.SkipParatrooperViews': 'other.skip_paratrooper_views',
    'game.TypeClouds': 'other.new_clouds',

    'chat.autoLogDetail': 'events.chat_level',

    'MaxLag.nearMaxLagTime': 'qos.lags.max_time.near',
    'MaxLag.farMaxLagTime': 'qos.lags.max_time.far',
    'MaxLag.cheaterWarningDelay': 'qos.lags.warnings.delay',
    'MaxLag.cheaterWarningNum': 'qos.lags.warnings.max_number',
}
