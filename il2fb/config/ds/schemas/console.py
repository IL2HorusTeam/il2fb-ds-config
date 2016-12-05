# coding: utf-8

from schematics.models import Model
from schematics.types import StringType, IntType, BooleanType
from schematics.types.compound import ListType, ModelType


class Connection(Model):
    port = IntType(
        min_value=0,
        max_value=65000,
        default=0,
        required=True,
    )
    allowed_hosts = ListType(
        field=StringType,
        min_size=0,
        required=True,
        min_length=1,
    )


class Logging(Model):
    is_enabled = BooleanType(
        default=False,
        required=True,
    )
    file_name = StringType(
        default="log.lst",
        min_length=1,
        required=True,
    )
    keep = BooleanType(
        default=True,
        required=True,
    )
    log_time = BooleanType(
        default=False,
        required=True,
    )


class HistorySize(Model):
    commands = IntType(
        min_value=0,
        max_value=10000,
        default=128,
        required=True,
    )
    records = IntType(
        min_value=0,
        max_value=10000,
        default=128,
        required=True,
    )


class Console(Model):
    connection = ModelType(
        model_spec=Connection,
        required=True,
    )
    logging = ModelType(
        model_spec=Logging,
        required=True,
    )
    history_size = ModelType(
        model_spec=HistorySize,
        required=True,
    )
