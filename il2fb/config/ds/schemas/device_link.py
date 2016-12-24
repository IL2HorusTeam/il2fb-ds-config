# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType, IntType
from schematics.types.compound import ListType, ModelType

from .interfaces import INISerializable


@zope.interface.implementer(INISerializable)
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
            'host': ini.get(
                'DeviceLink', 'host',
                fallback=cls.host.default,
            ),
            'port': ini.getint(
                'DeviceLink', 'port',
                fallback=cls.port.default,
            ),
            'allowed_hosts': [
                x.strip()
                for x in
                (
                    ini
                    .get('DeviceLink', 'IPS', fallback="")
                    .split()
                )
            ],
        })


@zope.interface.implementer(INISerializable)
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
