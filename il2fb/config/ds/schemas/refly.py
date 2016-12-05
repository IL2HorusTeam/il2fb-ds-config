# coding: utf-8

from schematics.models import Model
from schematics.types import BooleanType, IntType, FloatType


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
