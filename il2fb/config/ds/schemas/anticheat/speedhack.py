# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import FloatType, BooleanType

from ..interfaces import INISerializable
from ..helpers import field_from_ini


@zope.interface.implementer(INISerializable)
class Speedhack(Model):
    check_server_time_speed = BooleanType(
        default=True,
        required=True,
    )
    check_client_time_speed = BooleanType(
        default=False,
        required=True,
    )
    max_time_difference = FloatType(
        min_value=0.01,
        default=0.2,
        required=True,
    )
    max_time_difference_period = FloatType(
        min_value=1,
        max_value=1000,
        default=17,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'check_server_time_speed': field_from_ini(
                cls.check_server_time_speed, ini,
                'NET', 'checkServerTimeSpeed',
            ),
            'check_client_time_speed': field_from_ini(
                cls.check_client_time_speed, ini,
                'NET', 'checkClientTimeSpeed',
            ),
            'max_time_difference': field_from_ini(
                cls.max_time_difference, ini,
                'NET', 'checkTimeSpeedDifferense',
            ),
            'max_time_difference_period': field_from_ini(
                cls.max_time_difference_period, ini,
                'NET', 'checkTimeSpeedInterval',
            ),
        })
