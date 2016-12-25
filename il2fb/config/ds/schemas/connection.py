# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType, IntType
from schematics.types.compound import ModelType

from .interfaces import INISerializable
from .helpers import field_from_ini


@zope.interface.implementer(INISerializable)
class Proxy(Model):
    host = StringType(
        default="",
        required=True,
    )
    port = IntType(
        default=1080,
        required=True,
    )
    user = StringType(
        default="",
        required=True,
    )
    password = StringType(
        default="",
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'host': field_from_ini(
                cls.host, ini,
                'NET', 'socksHost',
            ),
            'port': field_from_ini(
                cls.port, ini,
                'NET', 'socksPort',
            ),
            'user': field_from_ini(
                cls.user, ini,
                'NET', 'socksUser',
            ),
            'password': field_from_ini(
                cls.password, ini,
                'NET', 'socksPwd',
            ),
        })


@zope.interface.implementer(INISerializable)
class Connection(Model):
    host = StringType(
        default="",
        required=True,
    )
    port = IntType(
        min_value=1000,
        max_value=65000,
        default=21000,
        required=True,
    )
    max_clients = IntType(
        min_value=1,
        max_value=128,
        default=8,
        required=True,
    )
    throughput = IntType(
        min_value=300,
        max_value=1000000,
        default=5000,
        required=True,
    )
    proxy = ModelType(
        model_spec=Proxy,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'host': field_from_ini(
                cls.host, ini,
                'NET', 'localHost',
            ),
            'port': field_from_ini(
                cls.port, ini,
                'NET', 'localPort',
            ),
            'max_clients': field_from_ini(
                cls.max_clients, ini,
                'NET', 'serverChannels',
            ),
            'throughput': field_from_ini(
                cls.throughput, ini,
                'NET', 'speed',
            ),
            'proxy': Proxy.from_ini(ini),
        })
