# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import IntType, FloatType, BooleanType

from ..interfaces import INISerializable


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
            'check_server_time_speed': ini.getboolean(
                'NET', 'checkServerTimeSpeed',
                fallback=cls.check_server_time_speed.default,
            ),
            'check_client_time_speed': ini.getboolean(
                'NET', 'checkClientTimeSpeed',
                fallback=cls.check_client_time_speed.default,
            ),
            'max_time_difference': ini.getfloat(
                'NET', 'checkTimeSpeedDifferense',
                fallback=cls.max_time_difference.default,
            ),
            'max_time_difference_period': ini.getfloat(
                'NET', 'checkTimeSpeedInterval',
                fallback=cls.max_time_difference_period.default,
            ),
        })
