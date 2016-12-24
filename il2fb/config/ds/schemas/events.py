# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType, IntType, BooleanType
from schematics.types.compound import ModelType

from .interfaces import INISerializable


@zope.interface.implementer(INISerializable)
class Logging(Model):
    file_name = StringType(
        default="eventlog.lst",
        min_length=1,
        required=True,
    )
    keep = BooleanType(
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
            'file_name': ini.get(
                'game', 'eventlog',
                fallback=cls.file_name.default,
            ),
            'keep': ini.getboolean(
                'game', 'eventlogkeep',
                fallback=cls.keep.default,
            ),
            'log_buildings': ini.getboolean(
                'game', 'eventlogHouse',
                fallback=cls.log_buildings.default,
            ),
        })


@zope.interface.implementer(INISerializable)
class Events(Model):
    chat_level = IntType(
        min_value=0,
        max_value=3,
        default=0,
        required=True,
    )
    logging = ModelType(
        model_spec=Logging,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'chat_level': ini.getint(
                'chat', 'autoLogDetail',
                fallback=cls.chat_level.default,
            ),
            'logging': Logging.from_ini(ini),
        })
