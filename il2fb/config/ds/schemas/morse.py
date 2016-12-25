# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import BooleanType

from .interfaces import INISerializable, DefaultProvider
from .helpers import field_from_ini


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
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
            'allow_morse_as_text': field_from_ini(
                cls.allow_morse_as_text, ini,
                'NET', 'allowMorseAsText',
            ),
            'show_morse_as_text': field_from_ini(
                cls.show_morse_as_text, ini,
                'game', 'ShowMorseAsText',
            ),
            'block_morse_chat': field_from_ini(
                cls.block_morse_chat, ini,
                'game', 'BlockMorseChat',
            ),
        })

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })
