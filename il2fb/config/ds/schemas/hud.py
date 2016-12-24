# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType

from .interfaces import INISerializable


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
            'no_mission_info': ini.getboolean(
                'game', 'NoMissionInfoHud',
                fallback=cls.no_mission_info.default,
            ),
            'no_kill_info': ini.getboolean(
                'game', 'noKillInfoHud',
                fallback=cls.no_kill_info.default,
            ),
            'display_at_bottom': ini.getboolean(
                'game', 'lowInfoHud',
                fallback=cls.display_at_bottom.default,
            ),
        })
