# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType
from schematics.types.compound import ModelType

from .interfaces import INISerializable
from .helpers import field_from_ini


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
            'show_number': field_from_ini(
                cls.show_number, ini,
                'NET', 'showPilotNumber',
            ),
            'show_ping': field_from_ini(
                cls.show_ping, ini,
                'NET', 'showPilotPing',
            ),
            'show_name': field_from_ini(
                cls.show_name, ini,
                'NET', 'showPilotName',
            ),
            'show_belligerent': field_from_ini(
                cls.show_belligerent, ini,
                'NET', 'showPilotArmy',
            ),
            'show_aircraft_designation': field_from_ini(
                cls.show_aircraft_designation, ini,
                'NET', 'showPilotACDesignation',
            ),
            'show_aircraft_type': field_from_ini(
                cls.show_aircraft_type, ini,
                'NET', 'showPilotACType',
            ),
            'show_score': field_from_ini(
                cls.show_score, ini,
                'NET', 'showPilotScore',
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
            'show_score': field_from_ini(
                cls.show_score, ini,
                'NET', 'showTeamScore',
            ),
            'accumulate_score': field_from_ini(
                cls.accumulate_score, ini,
                'NET', 'cumulativeTeamScore',
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
            'is_disabled': field_from_ini(
                cls.is_disabled, ini,
                'NET', 'disableNetStatStatistics',
            ),
            'users': Users.from_ini(ini),
            'belligerents': Belligerents.from_ini(ini),
        })
