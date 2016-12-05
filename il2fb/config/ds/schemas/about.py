# coding: utf-8

from schematics.models import Model
from schematics.types import StringType


class About(Model):
    name = StringType(
        default="",
        required=True,
    )
    description = StringType(
        default="",
        required=True,
    )
