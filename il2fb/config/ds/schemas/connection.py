# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType, IntType
from schematics.types.compound import ModelType

from .interfaces import INISerializable


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
            'host': ini.get(
                'NET', 'socksHost',
                fallback=cls.host.default,
            ),
            'port': ini.getint(
                'NET', 'socksPort',
                fallback=cls.port.default,
            ),
            'user': ini.get(
                'NET', 'socksUser',
                fallback=cls.user.default,
            ),
            'password': ini.get(
                'NET', 'socksPwd',
                fallback=cls.password.default,
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
            'host': ini.get(
                'NET', 'localHost',
                fallback=cls.host.default,
            ),
            'port': ini.getint(
                'NET', 'localPort',
                fallback=cls.port.default,
            ),
            'max_clients': ini.getint(
                'NET', 'serverChannels',
                fallback=cls.max_clients.default,
            ),
            'throughput': ini.getint(
                'NET', 'speed',
                fallback=cls.throughput.default,
            ),
            'proxy': Proxy.from_ini(ini),
        })
