# coding: utf-8

from schematics.models import Model
from schematics.types import StringType, IntType
from schematics.types.compound import ModelType


class Proxy(Model):
    host = StringType(
        default="",
        required=True,
    )
    port = IntType(
        default=1080,
        required=True,
    )
    user = StringType(
        default="",
        required=True,
    )
    password = StringType(
        default="",
        required=True,
    )


class Connection(Model):
    host = StringType(
        default="",
        required=True,
    )
    port = IntType(
        min_value=1000,
        max_value=65000,
        default=21000,
        required=True,
    )
    max_clients = IntType(
        min_value=1,
        max_value=128,
        default=8,
        required=True,
    )
    throughput = IntType(
        min_value=300,
        max_value=1000000,
        default=5000,
        required=True,
    )
    proxy = ModelType(
        model_spec=Proxy,
        required=True,
    )
