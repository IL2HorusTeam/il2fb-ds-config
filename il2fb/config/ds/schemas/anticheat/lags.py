# coding: utf-8

import zope.interface

from schematics.exceptions import ValidationError
from schematics.models import Model
from schematics.types import IntType, FloatType
from schematics.types.compound import ModelType

from ..constants import NO_CHEATER_WARNINGS_LIMIT_FLAG
from ..helpers import field_from_ini, field_to_ini
from ..interfaces import INISerializable, DefaultProvider


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class MaxTime(Model):
    near = FloatType(
        min_value=0.1,
        max_value=30.0,
        default=2.0,
        required=True,
    )
    far = FloatType(
        min_value=0.1,
        max_value=30.0,
        default=10.0,
        required=True,
    )

    def validate_far(self, data, value):
        near = data['near']

        if value < near:
            raise ValidationError(
                "'far' value ({far}) cannot be less than 'near' value ({near})."
                .format(far=value, near=near)
            )

        return value

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'near': field_from_ini(
                cls.near, ini,
                'MaxLag', 'nearMaxLagTime',
            ),
            'far': field_from_ini(
                cls.far, ini,
                'MaxLag', 'farMaxLagTime',
            ),
        })

    def to_ini(self, ini):
        field_to_ini(self.near, ini, 'MaxLag', 'nearMaxLagTime')
        field_to_ini(self.far, ini, 'MaxLag', 'farMaxLagTime')

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Warnings(Model):
    delay = FloatType(
        min_value=1.0,
        max_value=30.0,
        default=10.0,
        required=True,
    )
    limit = IntType(
        default=3,
        min_value=1,
        required=False,
    )

    @classmethod
    def from_ini(cls, ini):
        limit = field_from_ini(
            cls.limit, ini,
            'MaxLag', 'cheaterWarningNum',
        )
        limit = (
            None
            if limit == NO_CHEATER_WARNINGS_LIMIT_FLAG
            else limit
        )

        return cls({
            'delay': field_from_ini(
                cls.delay, ini,
                'MaxLag', 'cheaterWarningDelay',
            ),
            'limit': limit,
        })

    def to_ini(self, ini):
        limit = (
            NO_CHEATER_WARNINGS_LIMIT_FLAG
            if self.limit is None
            else self.limit
        )
        field_to_ini(limit, ini, 'MaxLag', 'cheaterWarningNum')
        field_to_ini(self.delay, ini, 'MaxLag', 'cheaterWarningDelay')

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Lags(Model):
    max_time = ModelType(
        model_spec=MaxTime,
        required=True,
    )
    warnings = ModelType(
        model_spec=Warnings,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'max_time': MaxTime.from_ini(ini),
            'warnings': Warnings.from_ini(ini),
        })

    def to_ini(self, ini):
        for field_name in self.iter():
            self[field_name].to_ini(ini)

    @classmethod
    def default(cls):
        return cls({
            'max_time': MaxTime.default(),
            'warnings': Warnings.default(),
        })
