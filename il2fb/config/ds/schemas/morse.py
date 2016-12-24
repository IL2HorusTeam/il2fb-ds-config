# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType

from .interfaces import INISerializable


@zope.interface.implementer(INISerializable)
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

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'allow_morse_as_text': ini.getboolean(
                'NET', 'allowMorseAsText',
                fallback=cls.allow_morse_as_text.default,
            ),
            'show_morse_as_text': ini.getboolean(
                'game', 'ShowMorseAsText',
                fallback=cls.show_morse_as_text.default,
            ),
            'block_morse_chat': ini.getboolean(
                'game', 'BlockMorseChat',
                fallback=cls.block_morse_chat.default,
            ),
        })
