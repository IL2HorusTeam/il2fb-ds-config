# coding: utf-8

from schematics.models import Model
from schematics.types import BooleanType


class HUD(Model):
    no_mission_info = BooleanType(
        default=False,
        required=True,
    )
    no_kill_info = BooleanType(
        default=False,
        required=True,
    )
    display_at_bottom = BooleanType(
        default=False,
        required=True,
    )
