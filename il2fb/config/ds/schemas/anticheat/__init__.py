# coding: utf-8

from schematics.models import Model
from schematics.types import IntType
from schematics.types.compound import ModelType

from .lags import Lags
from .speedhack import Speedhack


class Anticheat(Model):
    version_check_level = IntType(
        min_value=0,
        max_value=2,
        default=0,
        required=True,
    )
    lags = ModelType(
        model_spec=Lags,
        required=True,
    )
    speedhack = ModelType(
        model_spec=Speedhack,
        required=True,
    )
