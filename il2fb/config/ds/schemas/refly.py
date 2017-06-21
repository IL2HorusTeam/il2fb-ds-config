# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType, IntType, FloatType

from .interfaces import INISerializable, DefaultProvider
from .helpers import field_from_ini


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Refly(Model):
    enabled = BooleanType(
        default=True,
        required=True,
    )
    death_penalty = IntType(
        min_value=0,
        default=0,
        required=True,
    )
    death_penalty_multiplier = FloatType(
        min_value=0.0,
        default=0.0,
        required=True,
    )
    death_limit = IntType(
        min_value=1,
        default=None,
        required=False,
    )

    @classmethod
    def from_ini(cls, ini):
        death_limit = field_from_ini(
            cls.death_limit, ini,
            'NET', 'maxAllowedKIA',
        )

        return cls({
            'enabled': not field_from_ini(
                cls.enabled, ini,
                'NET', 'reflyDisabled',
            ),
            'death_penalty': field_from_ini(
                cls.death_penalty, ini,
                'NET', 'reflyKIADelay',
            ),
            'death_penalty_multiplier': field_from_ini(
                cls.death_penalty_multiplier, ini,
                'NET', 'reflyKIADelayMultiplier',
            ),
            'death_limit': None if death_limit == -1 else death_limit,
        })

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })
