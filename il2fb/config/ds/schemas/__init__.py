# coding: utf-8

from schematics.models import Model
from schematics.types.compound import ModelType

from .about import About
from .anticheat import Anticheat
from .connection import Connection
from .console import Console
from .device_link import DeviceLink
from .events import Events
from .hud import HUD
from .morse import Morse
from .other import Other
from .refly import Refly
from .statistics import Statistics


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
    other = ModelType(
        model_spec=Other,
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
