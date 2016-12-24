# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType, IntType, FloatType

from .interfaces import INISerializable


@zope.interface.implementer(INISerializable)
class Refly(Model):
    is_disabled = BooleanType(
        default=False,
        required=True,
    )
    kia_delay = IntType(
        min_value=0,
        default=0,
        required=True,
    )
    kia_delay_multiplier = FloatType(
        min_value=0.0,
        default=0.0,
        required=True,
    )
    max_kia = IntType(
        min_value=-1,
        default=-1,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'is_disabled': ini.getboolean(
                'NET', 'reflyDisabled',
                fallback=cls.is_disabled.default,
            ),
            'kia_delay': ini.getint(
                'NET', 'reflyKIADelay',
                fallback=cls.kia_delay.default,
            ),
            'kia_delay_multiplier': ini.getfloat(
                'NET', 'reflyKIADelayMultiplier',
                fallback=cls.kia_delay_multiplier.default,
            ),
            'max_kia': ini.getint(
                'NET', 'maxAllowedKIA',
                fallback=cls.max_kia.default,
            ),
        })
