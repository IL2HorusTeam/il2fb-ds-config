# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType

from .interfaces import INISerializable, DefaultProvider
from .helpers import field_from_ini


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class HUD(Model):
    show_mission_info = BooleanType(
        default=True,
        required=True,
    )
    show_kill_info = BooleanType(
        default=True,
        required=True,
    )
    show_at_bottom = BooleanType(
        default=False,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'show_mission_info': not field_from_ini(
                cls.show_mission_info, ini,
                'game', 'NoMissionInfoHud',
            ),
            'show_kill_info': not field_from_ini(
                cls.show_kill_info, ini,
                'game', 'noKillInfoHud',
            ),
            'show_at_bottom': field_from_ini(
                cls.show_at_bottom, ini,
                'game', 'lowInfoHud',
            ),
        })

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })
