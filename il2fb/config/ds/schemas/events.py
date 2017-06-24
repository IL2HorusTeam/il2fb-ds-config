# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType, IntType, BooleanType
from schematics.types.compound import ModelType

from .interfaces import INISerializable, DefaultProvider
from .helpers import field_from_ini


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Logging(Model):
    file_name = StringType(
        default="eventlog.lst",
        min_length=1,
        required=True,
    )
    keep_file = BooleanType(
        default=True,
        required=True,
    )
    log_buildings = BooleanType(
        default=False,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'file_name': field_from_ini(
                cls.file_name, ini,
                'game', 'eventlog',
            ),
            'keep_file': field_from_ini(
                cls.keep_file, ini,
                'game', 'eventlogkeep',
            ),
            'log_buildings': field_from_ini(
                cls.log_buildings, ini,
                'game', 'eventlogHouse',
            ),
        })

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Events(Model):
    chat_level = IntType(
        min_value=0,
        max_value=3,
        default=3,
        required=True,
    )
    logging = ModelType(
        model_spec=Logging,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'chat_level': field_from_ini(
                cls.chat_level, ini,
                'chat', 'autoLogDetail',
            ),
            'logging': Logging.from_ini(ini),
        })

    @classmethod
    def default(cls):
        return cls({
            'chat_level': cls.chat_level.default,
            'logging': Logging.default(),
        })
