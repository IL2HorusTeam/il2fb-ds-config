# coding: utf-8

from schematics.models import Model
from schematics.types import StringType, IntType
from schematics.types.compound import ListType, ModelType


class Connection(Model):
    host = StringType(
        default="",
        required=True,
    )
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


class DeviceLink(Model):
    connection = ModelType(
        model_spec=Connection,
        required=True,
    )
