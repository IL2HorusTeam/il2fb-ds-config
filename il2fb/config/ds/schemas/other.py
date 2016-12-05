# coding: utf-8

from schematics.models import Model
from schematics.types import BooleanType, IntType


class Other(Model):
    difficulty = IntType(
        min_value=0,
        default=193791,
        required=True,
    )
    display_custom_skins = BooleanType(
        default=True,
        required=True,
    )
    allow_custom_sounds = BooleanType(
        default=True,
        required=True,
    )
    filter_user_names = BooleanType(
        default=False,
        required=True,
    )
    small_way_point_labels = BooleanType(
        default=True,
        required=True,
    )
    skip_paratrooper_views = BooleanType(
        default=False,
        required=True,
    )
    new_clouds = BooleanType(
        default=True,
        required=True,
    )
