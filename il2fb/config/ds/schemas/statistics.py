# coding: utf-8

from schematics.models import Model
from schematics.types import BooleanType
from schematics.types.compound import ModelType


class Users(Model):
    show_number = BooleanType(
        default=True,
        required=True,
    )
    show_ping = BooleanType(
        default=True,
        required=True,
    )
    show_name = BooleanType(
        default=True,
        required=True,
    )
    show_belligerent = BooleanType(
        default=True,
        required=True,
    )
    show_aircraft_designation = BooleanType(
        default=True,
        required=True,
    )
    show_aircraft_type = BooleanType(
        default=True,
        required=True,
    )
    show_score = BooleanType(
        default=True,
        required=True,
    )


class Belligerents(Model):
    show_score = BooleanType(
        default=False,
        required=True,
    )
    accumulate_score = BooleanType(
        default=False,
        required=True,
    )


class Statistics(Model):
    is_disabled = BooleanType(
        default=False,
        required=True,
    )
    users = ModelType(
        model_spec=Users,
        required=True,
    )
    belligerents = ModelType(
        model_spec=Belligerents,
        required=True,
    )
