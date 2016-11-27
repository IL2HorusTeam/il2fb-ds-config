IL-2 FB DS Config
=================

|pypi_package| |pypi_downloads| |python_versions| |license|

|unix_build| |windows_build| |coverage_status|

|code_issues| |codeclimate| |codacy| |quality| |health| |requirements|

Python library for working with settings of IL-2 FB Dedicated Server
(``confs.ini``).


**Table of contents**

.. contents::
    :local:
    :depth: 2
    :backlinks: none


Server config parameters
------------------------

This part of documentation describes server parameters. They are groupped by
sections like in server's ``confs.ini`` file.


``NET`` section
~~~~~~~~~~~~~~~

This section defined mostly server's network parameters.

serverName
   Name of server, which will be displayed in a list of servers in LAN.

   :Type: ``string``
   :Default: ``(empty value)``
   :Example: ``serverName=Test server``

serverDescription
   Description of server, which will be displayed in a list of servers in LAN.

   :Type: ``string``
   :Default: ``(empty value)``
   :Example: ``serverDescription=Server for testing new features``

serverChannels
   Max number of users.

   :Type: ``integer``
   :Min: ``1``
   :Max: ``128``
   :Default: ``8``
   :Example: ``serverChannels=64``

speed
   Server's throughput in bytes/sec *(need more details)*.

   .. table:: Common values

      ====== ===========
      Value  Comment
      ====== ===========
      3000   Modem 28800
      5000   Modem 56000
      25000  DSL cable
      ====== ===========

   :Type: ``integer``
   :Min: ``300``
   :Max: ``1000000``
   :Default: ``5000``
   :Example: ``speed=25000``

localHost
   Address of network interface to listen for all incoming connections on.

   :Type: ``string``
   :Default: ``(empty value, listen on all interfaces)``
   :Example: ``localHost=192.168.0.10``

localPort
   UDP port number for client to connect to. Users enter this value when
   connecting to server.

   :Type: ``integer``
   :Min: ``1000``
   :Max: ``65000``
   :Default: ``21000``
   :Example: ``serverChannels=21000``

socksHost
   Proxy host *(need more details)*.

   :Type: ``string``
   :Default: ``(empty value)``
   :Example: ``(no example)``

socksPort
   Proxy port *(need more details)*.

   :Type: ``integer``
   :Default: ``1080``
   :Example: ``(no example)``

socksUser
   Proxy user name *(need more details)*.

   :Type: ``string``
   :Default: ``(empty value)``
   :Example: ``(no example)``

socksPwd
   Password for proxy user *(need more details)*.

   :Type: ``string``
   :Default: ``(empty value)``
   :Example: ``(no example)``

checkRuntime
   Strictness of game version checks *(need more details)*.

   .. table:: Allowed values

      ====== =======================================================================
      Value  Comment
      ====== =======================================================================
      0      No checks
      1      Checks enabled
      2      Strict checks enabled (may not work under ``wine`` on Linux and Mac OS)
      ====== =======================================================================

   :Type: ``integer``
   :Min: ``0``
   :Max: ``2``
   :Default: ``0``
   :Example: ``checkRuntime=2``

checkServerTimeSpeed
   Protection from speedhack at server side *(need more details)*.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``checkServerTimeSpeed=1``

checkClientTimeSpeed
   Protection from speedhack at client side *(need more details)*.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``checkClientTimeSpeed=0``

checkTimeSpeedDifferense
   Allowed difference between clocks of server and client *(need more details)*.

   :Type: ``float``
   :Default: ``0.2``
   :Example: ``checkTimeSpeedDifferense=0.2``

checkTimeSpeedInterval
   Interval of checks of clock differencies *(need more details)*.

   :Type: ``integer``
   :Min: ``1``
   :Max: ``1000``
   :Default: ``17``
   :Example: ``checkTimeSpeedInterval=17``

difficulty
   Difficulty settings.
   `Use difficulty editor <http://il2horusteam.github.io/il2fb-difficulty/>`_
   to understand values.

   :Type: ``integer``
   :Default: ``193791``
   :Example: ``difficulty=8796093022207``

SkinDownload
   Allow users to see skins, which are not present on server *(need more details)*.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``SkinDownload=1``

allowCustomSounds
   Allow to use custom sounds in ``my_presets`` and ``my_samples`` directories
   *(need more details)*.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``allowCustomSounds=1``

reflyDisabled
   When enabled, ``Refly`` button will be disabled until next mission.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``reflyDisabled=0``

reflyKIADelay
   Initial penalty (delay in seconds) for refly after death.

   :Type: ``integer``
   :Default: ``0``
   :Example: ``reflyKIADelay=60``

reflyKIADelayMultiplier
   Number of seconds, which will be multiplied by number of users's deaths and
   added to initial penalty for refly after death. So, final penalty is
   following:

   ``penalty = reflyKIADelay + reflyKIADelayMultiplier * NUMBER_OF_KIA_IN_MISSION``

   :Type: ``float``
   :Default: ``0.0``
   :Example: ``reflyKIADelayMultiplier=30.0``

maxAllowedKIA
   Limit of deaths per mission.

   :Type: ``integer``
   :Default: ``-1`` (no limit)
   :Example: ``maxAllowedKIA=20``

allowMorseAsText
   When enabled, online clients are allowed to use Morse as text feature
   online.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``allowMorseAsText=1``

filterUserNames
   When enabled, strips invalid characters from names. Valid characters are
   those, which have codes within ranges ``[33;160]`` or ``[1025;1119]`` or
   ``[1168;1257]`` *(need more details)*.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``filterUserNames=0``

disableNetStatStatistics
   When enabled, all online statistics are disabled (not visible).
   Statistics are shown with ``S`` key by default.
   ``USER STAT`` console command will not work either.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``disableNetStatStatistics=0``

showPilotNumber
   When enabled, online stats shows pilot's number.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``showPilotNumber=1``

showPilotPing
   When enabled, online stats shows pilot's ping.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``showPilotPing=1``

showPilotName
   When enabled, online stats shows pilot's name.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``showPilotName=1``

showPilotArmy
   When enabled, online stats shows pilot's army.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``showPilotArmy=1``

showPilotACDesignation
   When enabled, online stats shows pilot's aircraft designation.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``showPilotACDesignation=1``

showPilotACType
   When enabled, online stats shows pilot's aircraft type.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``showPilotACType=1``

showPilotScore
   When enabled, online stats shows pilot's score.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``showPilotScore=1``

showTeamScore
   When enabled, online stats shows team score. This is combined score of all
   pilots in the team. It includes all scores even from pilots that have
   already quit playing the mission.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``showTeamScore=0``

cumulativeTeamScore
   When enabled, the team score is not zeroed between missions.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``cumulativeTeamScore=0``


``Console`` section
~~~~~~~~~~~~~~~~~~~

This part describes options available for server's remote console.

IP
   TCP port number to listen for connnections on.

   :Type: ``integer``
   :Min: ``0``
   :Max: ``65000``
   :Default: ``0`` (disable console)
   :Example: ``IP=20000``

IPS
   List of hostnames, which are allowed to connect to server's console.

   By default only connections from ``NET.localHost`` are allowed.
   If ``NET.localHost`` is not specified, then system's ``localhost`` is used.

   :Type: ``space-separated strings``
   :Default: ``(empty value)``
   :Example: ``127.0.0.1 192.168.0.10``

LOG
   When enabled, console messages will be logged into a file.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``LOG=0``

LOGFILE
   Name of file to log console messages into.

   :Type: ``string``
   :Default: ``log.lst``
   :Example: ``logs/console.log``

LOGTIME
   When enabled, console log messages will be prefixed with time.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``LOGTIME=0``

LOGKEEP
   When enabled, existing console log file will be preserved.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``LOGKEEP=0``

HISTORY
   How much console records to keep in log file.

   :Type: ``integer``
   :Min: ``0``
   :Max: ``10000``
   :Default: ``128``
   :Example: ``HISTORY=1024``

HISTORYCMD
   How much console commands to keep in console's history.

   :Type: ``integer``
   :Min: ``0``
   :Max: ``10000``
   :Default: ``128``
   :Example: ``HISTORYCMD=1024``


``DeviceLink`` section
~~~~~~~~~~~~~~~~~~~~~~

This part describes options available for server's Device Link interface.

host
   Hostnames to listen for incoming requests on.

   :Type: ``string``
   :Default: ``(empty value)`` (listen on system's ``localhost``)
   :Example: ``192.168.0.10``

port
   UDP port number to listen for incoming requests on.

   :Type: ``integer``
   :Min: ``0``
   :Max: ``65000``
   :Default: ``0`` (disable Device Link)
   :Example: ``IP=10000``

IPS
   List of hostnames, which are allowed to connect to server's Device Link.

   :Type: ``space-separated strings``
   :Default: ``(empty value)``
   :Example: ``127.0.0.1 192.168.0.10``


``game`` section
~~~~~~~~~~~~~~~~

This part describes options for different game conditions.

eventlog
   Name of file to log events into. This file is created only when a mission
   starts.

   :Type: ``string``
   :Default: ``eventlog.lst``
   :Example: ``logs/events.log``

eventlogkeep
   When enabled, events from previous mission be preserved.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``eventlogkeep=1``

eventlogHouse
   Log events about destroyed buildings and trees.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``eventlogHouse=0``

NoMissionInfoHud
   When enabled, mission related messages like ``Mission completed`` are not
   shown at the center of the screen.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``NoMissionInfoHud=0``

noKillInfoHud
   When enabled, kill related messages like ``Enemy/friendly xxx destroyed``
   are not shown at the right side of the screen.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``noKillInfoHud=0``

lowInfoHud
   Display HUD messages at the bottom of the screen, instead of center of the
   screen.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``lowInfoHud=0``

ShowMorseAsText
   When enabled, all Morse code beeps are also shown as text on screen.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``ShowMorseAsText=0``

BlockMorseChat
   This switch is related to undocumented "easter egg" feature in 4.10 patch.
   By typing a chat message online so that the message starts with ``Morse:``
   will cause the message to be sent as Morse code beeps instead of text. This
   switch can be used to disable this feature in case some players decide to
   start chatting in Morse and you don't want to hear the annoying beeping
   noises.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``BlockMorseChat=0``

SmallMapWPLabels
   When enabled, the map shows waypoint labels with small font instead of
   large.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``SmallMapWPLabels=1``

SkipParatrooperViews
   When enabled, external camera views skip bailed out paratroopers.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``0``
   :Example: ``SkipParatrooperViews=0``

TypeClouds
   Use new clouds render from versions 4.x.

   :Type: ``boolean`` (0 — false, 1 — true)
   :Default: ``1``
   :Example: ``TypeClouds=1``


``chat`` section
~~~~~~~~~~~~~~~~

Options for game chat.

autoLogDetail
   Amount of events users will see chat message.

   .. table:: Allowed values

      ====== ===================================================================
      Value  Comment
      ====== ===================================================================
      0      Minimum of events (e.g., user joined, user left, user is cheating).
      1      More events, including kills, craches, captures and so on.
      2      More events, including destruction of ground units.
      3      All events, including different kinds of damages.
      ====== ===================================================================

   :Type: ``integer``
   :Min: ``0``
   :Max: ``3``
   :Default: ``3``
   :Example: ``autoLogDetail=3``


``MaxLag`` section
~~~~~~~~~~~~~~~~~~

This section is about ``Cheating has been detected!`` messages.

It contains options which allow to limit the amount of lag acceptable by the
host before a player will be autokicked.

Settings to leanient will have no effect, while settings too strict will cause
a lot of autokicking.

nearMaxLagTime
   Defines the max lag time allowed for an aircraft in an endangered position
   before it is considered warping (cheating). This is meant to address players
   who are lagging on purpose.

   :Type: ``float``
   :Min: ``0.1``
   :Max: ``30.0``
   :Default: ``2.0``
   :Example: ``nearMaxLagTime=2``

farMaxLagTime
   Defines the maximum delay (in seconds) between packets received from a given
   client. A time greater than this is considered a warp.

   :Type: ``float``
   :Min: value of ``nearMaxLagTime``
   :Max: ``30.0``
   :Default: ``10.0``
   :Example: ``farMaxLagTime=10``

cheaterWarningDelay
   Defines the maximum amount of time the system will refrain from taking
   action against a player acting out of bounds. This can be used to avoid
   issuing multiple warnings for a single glitch.

   :Type: ``float``
   :Min: ``1.0``
   :Max: ``30.0``
   :Default: ``10.0``
   :Example: ``cheaterWarningDelay=10``

cheaterWarningNum
   Defines the max number of warnings issued before a player is autokicked by
   the host. A value of ``-1`` prevents autokicking.

   :Type: ``integer``
   :Default: ``3``
   :Example: ``cheaterWarningNum=3``



.. |unix_build| image:: http://img.shields.io/travis/IL2HorusTeam/il2fb-ds-config.svg?style=flat&branch=master
   :target: https://travis-ci.org/IL2HorusTeam/il2fb-ds-config
   :alt: Build status of the master branch on Linux

.. |windows_build|  image:: https://ci.appveyor.com/api/projects/status/1nub4lcihi3e0968/branch/master?svg=true
   :target: https://ci.appveyor.com/project/oblalex/il2fb-ds-config
   :alt: Build status of the master branch on Windows

.. |coverage_status| image:: https://codecov.io/github/IL2HorusTeam/il2fb-ds-config/coverage.svg?branch=master
   :target: https://codecov.io/github/IL2HorusTeam/il2fb-ds-config?branch=master
   :alt: Test coverage

.. |codeclimate| image:: https://codeclimate.com/github/IL2HorusTeam/il2fb-ds-config/badges/gpa.svg
   :target: https://codeclimate.com/github/IL2HorusTeam/il2fb-ds-config
   :alt: Code Climate

.. |codacy| image:: https://www.codacy.com/project/badge/6691993e3d5241ceb5341ec73c0aff70
   :target: https://www.codacy.com/app/oblalex/il2fb-ds-config
   :alt: Codacy Code Review

.. |quality| image:: https://scrutinizer-ci.com/g/IL2HorusTeam/il2fb-ds-config/badges/quality-score.png?b=master&style=flat
   :target: https://scrutinizer-ci.com/g/IL2HorusTeam/il2fb-ds-config/?branch=master
   :alt: Code quality provided by Scrutinizer

.. |health| image:: https://landscape.io/github/IL2HorusTeam/il2fb-ds-config/master/landscape.svg?style=flat
   :target: https://landscape.io/github/IL2HorusTeam/il2fb-ds-config/master
   :alt: Code Health

.. |code_issues| image:: https://www.quantifiedcode.com/api/v1/project/4261ecf3af654c579839aeb7e99e4ee3/badge.svg
   :target: https://www.quantifiedcode.com/app/project/4261ecf3af654c579839aeb7e99e4ee3
   :alt: Code issues

.. |requirements| image:: https://requires.io/github/IL2HorusTeam/il2fb-ds-config/requirements.svg?branch=master
   :target: https://requires.io/github/IL2HorusTeam/il2fb-ds-config/requirements/?branch=master
   :alt: Requirements Status

.. |pypi_package| image:: http://img.shields.io/pypi/v/il2fb-ds-config.svg?style=flat
   :target: http://badge.fury.io/py/il2fb-ds-config/
   :alt: Version of PyPI package

.. |pypi_downloads| image::  http://img.shields.io/pypi/dm/il2fb-ds-config.svg?style=flat
   :target: https://crate.io/packages/il2fb-ds-config/
   :alt: Number of downloads of PyPI package

.. |python_versions| image:: https://img.shields.io/badge/Python-2.7,3.4,3.5-brightgreen.svg?style=flat
   :alt: Supported versions of Python

.. |license| image:: https://img.shields.io/badge/license-LGPLv3-blue.svg?style=flat
   :target: https://github.com/IL2HorusTeam/il2fb-ds-config/blob/master/LICENSE
   :alt: Package license
