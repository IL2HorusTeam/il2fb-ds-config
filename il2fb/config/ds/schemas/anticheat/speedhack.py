# coding: utf-8

from schematics.models import Model
from schematics.types import IntType, FloatType, BooleanType


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
    max_time_difference_period = IntType(
        min_value=1,
        max_value=1000,
        default=17,
        required=True,
    )
