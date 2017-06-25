# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType, IntType
from schematics.types.compound import ListType, ModelType

from .constants import FORBID_DEVICE_LINK_CONNECTIONS_FLAG
from .interfaces import INISerializable, DefaultProvider
from .helpers import field_from_ini, field_to_ini


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
        default=None,
        required=False,
    )
    allowed_hosts = ListType(
        field=StringType,
        min_size=0,
        required=True,
        min_length=1,
    )

    @classmethod
    def from_ini(cls, ini):
        port = field_from_ini(
            cls.port, ini,
            'DeviceLink', 'port',
        )
        port = (
            None
            if port == FORBID_DEVICE_LINK_CONNECTIONS_FLAG
            else port
        )

        return cls({
            'host': field_from_ini(
                cls.host, ini,
                'DeviceLink', 'host',
            ),
            'port': port,
            'allowed_hosts': (
                field_from_ini(
                    cls.allowed_hosts, ini,
                    'DeviceLink', 'IPS', default="",
                )
                .split()
            ),
        })

    def to_ini(self, ini):
        port = (
            FORBID_DEVICE_LINK_CONNECTIONS_FLAG
            if self.port is None
            else self.port
        )
        allowed_hosts = ' '.join(self.allowed_hosts)

        field_to_ini(port, ini, 'DeviceLink', 'port')
        field_to_ini(self.host, ini, 'DeviceLink', 'host')
        field_to_ini(allowed_hosts, ini, 'DeviceLink', 'IPS')

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

    def to_ini(self, ini):
        for field_name in self.iter():
            self[field_name].to_ini(ini)

    @classmethod
    def default(cls):
        return cls({
            'connection': Connection.default(),
        })
