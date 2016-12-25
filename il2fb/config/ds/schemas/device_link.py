# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType, IntType
from schematics.types.compound import ListType, ModelType

from .interfaces import INISerializable, DefaultProvider
from .helpers import field_from_ini


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Connection(Model):
    host = StringType(
        default="",
        required=True,
    )
    port = IntType(
        min_value=0,
        max_value=65000,
        default=0,
        required=True,
    )
    allowed_hosts = ListType(
        field=StringType,
        min_size=0,
        required=True,
        min_length=1,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'host': field_from_ini(
                cls.host, ini,
                'DeviceLink', 'host',
            ),
            'port': field_from_ini(
                cls.port, ini,
                'DeviceLink', 'port',
            ),
            'allowed_hosts': (
                field_from_ini(
                    cls.allowed_hosts, ini,
                    'DeviceLink', 'IPS', default="",
                )
                .split()
            ),
        })

    @classmethod
    def default(cls):
        return cls({
            'host': cls.host.default,
            'port': cls.port.default,
            'allowed_hosts': [],
        })


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class DeviceLink(Model):
    connection = ModelType(
        model_spec=Connection,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'connection': Connection.from_ini(ini),
        })

    @classmethod
    def default(cls):
        return cls({
            'connection': Connection.default(),
        })
