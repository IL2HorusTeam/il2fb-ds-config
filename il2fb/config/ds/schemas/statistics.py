# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType
from schematics.types.compound import ModelType

from .interfaces import INISerializable


@zope.interface.implementer(INISerializable)
class Users(Model):
    show_number = BooleanType(
        default=True,
        required=True,
    )
    show_ping = BooleanType(
        default=True,
        required=True,
    )
    show_name = BooleanType(
        default=True,
        required=True,
    )
    show_belligerent = BooleanType(
        default=True,
        required=True,
    )
    show_aircraft_designation = BooleanType(
        default=True,
        required=True,
    )
    show_aircraft_type = BooleanType(
        default=True,
        required=True,
    )
    show_score = BooleanType(
        default=True,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'show_number': ini.getboolean(
                'NET', 'showPilotNumber',
                fallback=cls.show_number.default,
            ),
            'show_ping': ini.getboolean(
                'NET', 'showPilotPing',
                fallback=cls.show_ping.default,
            ),
            'show_name': ini.getboolean(
                'NET', 'showPilotName',
                fallback=cls.show_name.default,
            ),
            'show_belligerent': ini.getboolean(
                'NET', 'showPilotArmy',
                fallback=cls.show_belligerent.default,
            ),
            'show_aircraft_designation': ini.getboolean(
                'NET', 'showPilotACDesignation',
                fallback=cls.show_aircraft_designation.default,
            ),
            'show_aircraft_type': ini.getboolean(
                'NET', 'showPilotACType',
                fallback=cls.show_aircraft_type.default,
            ),
            'show_score': ini.getboolean(
                'NET', 'showPilotScore',
                fallback=cls.show_score.default,
            ),
        })


@zope.interface.implementer(INISerializable)
class Belligerents(Model):
    show_score = BooleanType(
        default=False,
        required=True,
    )
    accumulate_score = BooleanType(
        default=False,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'show_score': ini.getboolean(
                'NET', 'showTeamScore',
                fallback=cls.show_score.default,
            ),
            'accumulate_score': ini.getboolean(
                'NET', 'cumulativeTeamScore',
                fallback=cls.accumulate_score.default,
            ),
        })


@zope.interface.implementer(INISerializable)
class Statistics(Model):
    is_disabled = BooleanType(
        default=False,
        required=True,
    )
    users = ModelType(
        model_spec=Users,
        required=True,
    )
    belligerents = ModelType(
        model_spec=Belligerents,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'is_disabled': ini.getboolean(
                'NET', 'disableNetStatStatistics',
                fallback=cls.is_disabled.default,
            ),
            'users': Users.from_ini(ini),
            'belligerents': Belligerents.from_ini(ini),
        })
