# coding: utf-8

from schematics.models import Model
from schematics.types import StringType, IntType, BooleanType
from schematics.types.compound import ModelType


class Logging(Model):
    file_name = StringType(
        default="eventlog.lst",
        min_length=1,
        required=True,
    )
    keep = BooleanType(
        default=True,
        required=True,
    )
    log_buildings = BooleanType(
        default=False,
        required=True,
    )


class Events(Model):
    chat_level = IntType(
        min_value=0,
        max_value=3,
        default=0,
        required=True,
    )
    logging = ModelType(
        model_spec=Logging,
        required=True,
    )
