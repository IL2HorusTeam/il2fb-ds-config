# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType
from schematics.types.compound import ModelType

from .interfaces import INISerializable, DefaultProvider
from .helpers import field_from_ini


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Users(Model):
    show_tail_number = BooleanType(
        default=True,
        required=True,
    )
    show_ping = BooleanType(
        default=True,
        required=True,
    )
    show_callsign = BooleanType(
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
            'show_tail_number': field_from_ini(
                cls.show_tail_number, ini,
                'NET', 'showPilotNumber',
            ),
            'show_ping': field_from_ini(
                cls.show_ping, ini,
                'NET', 'showPilotPing',
            ),
            'show_callsign': field_from_ini(
                cls.show_callsign, ini,
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

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
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

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Statistics(Model):
    enabled = BooleanType(
        default=True,
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
            'enabled': not field_from_ini(
                cls.enabled, ini,
                'NET', 'disableNetStatStatistics',
            ),
            'users': Users.from_ini(ini),
            'belligerents': Belligerents.from_ini(ini),
        })

    @classmethod
    def default(cls):
        return cls({
            'enabled': cls.enabled.default,
            'users': Users.default(),
            'belligerents': Belligerents.default(),
        })
