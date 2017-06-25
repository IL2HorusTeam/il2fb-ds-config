# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType, IntType
from schematics.types.compound import ModelType

from .interfaces import INISerializable, DefaultProvider
from .helpers import field_from_ini, field_to_ini


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Proxy(Model):
    host = StringType(
        default="",
        required=True,
    )
    port = IntType(
        min_value=1000,
        max_value=65000,
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

    def to_ini(self, ini):
        field_to_ini(self.host, ini, 'NET', 'socksHost')
        field_to_ini(self.port, ini, 'NET', 'socksPort')
        field_to_ini(self.user, ini, 'NET', 'socksUser')
        field_to_ini(self.password, ini, 'NET', 'socksPwd')

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
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
    bandwidth = IntType(
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
            'bandwidth': field_from_ini(
                cls.bandwidth, ini,
                'NET', 'speed',
            ),
            'proxy': Proxy.from_ini(ini),
        })

    def to_ini(self, ini):
        field_to_ini(self.host, ini, 'NET', 'localHost')
        field_to_ini(self.port, ini, 'NET', 'localPort')
        field_to_ini(self.max_clients, ini, 'NET', 'serverChannels')
        field_to_ini(self.bandwidth, ini, 'NET', 'speed')
        self.proxy.to_ini(ini)

    @classmethod
    def default(cls):
        return cls({
            'host': cls.host.default,
            'port': cls.port.default,
            'max_clients': cls.max_clients.default,
            'bandwidth': cls.bandwidth.default,
            'proxy': Proxy.default(),
        })
