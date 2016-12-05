# coding: utf-8

from schematics.models import Model
from schematics.types import BooleanType


class Morse(Model):
    allow_morse_as_text = BooleanType(
        default=True,
        required=True,
    )
    show_morse_as_text = BooleanType(
        default=False,
        required=True,
    )
    block_morse_chat = BooleanType(
        default=False,
        required=True,
    )
