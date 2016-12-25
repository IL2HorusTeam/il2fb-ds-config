# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType, IntType, FloatType

from .interfaces import INISerializable, DefaultProvider
from .helpers import field_from_ini


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
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
            'is_disabled': field_from_ini(
                cls.is_disabled, ini,
                'NET', 'reflyDisabled',
            ),
            'kia_delay': field_from_ini(
                cls.kia_delay, ini,
                'NET', 'reflyKIADelay',
            ),
            'kia_delay_multiplier': field_from_ini(
                cls.kia_delay_multiplier, ini,
                'NET', 'reflyKIADelayMultiplier',
            ),
            'max_kia': field_from_ini(
                cls.max_kia, ini,
                'NET', 'maxAllowedKIA',
            ),
        })

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })
