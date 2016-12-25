# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType

from .interfaces import INISerializable
from .helpers import field_from_ini


@zope.interface.implementer(INISerializable)
class HUD(Model):
    no_mission_info = BooleanType(
        default=False,
        required=True,
    )
    no_kill_info = BooleanType(
        default=False,
        required=True,
    )
    display_at_bottom = BooleanType(
        default=False,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'no_mission_info': field_from_ini(
                cls.no_mission_info, ini,
                'game', 'NoMissionInfoHud',
            ),
            'no_kill_info': field_from_ini(
                cls.no_kill_info, ini,
                'game', 'noKillInfoHud',
            ),
            'display_at_bottom': field_from_ini(
                cls.display_at_bottom, ini,
                'game', 'lowInfoHud',
            ),
        })
