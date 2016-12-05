# coding: utf-8

from schematics.exceptions import ValidationError
from schematics.models import Model
from schematics.types import IntType, FloatType
from schematics.types.compound import ModelType


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


class Warnings(Model):
    delay = FloatType(
        min_value=1.0,
        max_value=30.0,
        default=10.0,
        required=True,
    )
    max_number = IntType(
        default=3,
        required=True,
    )


class Lags(Model):
    max_time = ModelType(
        model_spec=MaxTime,
        required=True,
    )
    warnings = ModelType(
        model_spec=Warnings,
        required=True,
    )
