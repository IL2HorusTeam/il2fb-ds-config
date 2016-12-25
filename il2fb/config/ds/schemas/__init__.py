# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types.compound import ModelType

from .about import About
from .anticheat import Anticheat
from .connection import Connection
from .console import Console
from .device_link import DeviceLink
from .events import Events
from .hud import HUD
from .interfaces import INISerializable, DefaultProvider
from .morse import Morse
from .other import Other
from .refly import Refly
from .statistics import Statistics


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class ServerConfig(Model):
    about = ModelType(
        model_spec=About,
        required=True,
    )
    anticheat = ModelType(
        model_spec=Anticheat,
        required=True,
    )
    connection = ModelType(
        model_spec=Connection,
        required=True,
    )
    console = ModelType(
        model_spec=Console,
        required=True,
    )
    device_link = ModelType(
        model_spec=DeviceLink,
        required=True,
    )
    events = ModelType(
        model_spec=Events,
        required=True,
    )
    hud = ModelType(
        model_spec=HUD,
        required=True,
    )
    morse = ModelType(
        model_spec=Morse,
        required=True,
    )
    refly = ModelType(
        model_spec=Refly,
        required=True,
    )
    statistics = ModelType(
        model_spec=Statistics,
        required=True,
    )
    other = ModelType(
        model_spec=Other,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            field_name: model_type.model_class.from_ini(ini)
            for field_name, model_type in cls.fields.items()
        })

    @classmethod
    def default(cls):
        return cls({
            field_name: model_type.model_class.default()
            for field_name, model_type in cls.fields.items()
        })
