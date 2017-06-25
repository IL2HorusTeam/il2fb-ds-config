# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType, IntType, BooleanType
from schematics.types.compound import ListType, ModelType

from .constants import FORBID_CONSOLE_CONNECTIONS_FLAG
from .interfaces import INISerializable, DefaultProvider
from .helpers import field_from_ini, field_to_ini


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Connection(Model):
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
            'Console', 'IP',
        )
        port = (
            None
            if port == FORBID_CONSOLE_CONNECTIONS_FLAG
            else port
        )

        return cls({
            'port': port,
            'allowed_hosts': (
                field_from_ini(
                    cls.allowed_hosts, ini,
                    'Console', 'IPS', default="",
                )
                .split()
            ),
        })

    def to_ini(self, ini):
        port = (
            FORBID_CONSOLE_CONNECTIONS_FLAG
            if self.port is None
            else self.port
        )
        allowed_hosts = ' '.join(self.allowed_hosts)

        field_to_ini(port, ini, 'Console', 'IP')
        field_to_ini(allowed_hosts, ini, 'Console', 'IPS')

    @classmethod
    def default(cls):
        return cls({
            'port': cls.port.default,
            'allowed_hosts': [],
        })


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Logging(Model):
    enabled = BooleanType(
        default=False,
        required=True,
    )
    file_name = StringType(
        default="log.lst",
        min_length=1,
        required=True,
    )
    keep_file = BooleanType(
        default=True,
        required=True,
    )
    log_time = BooleanType(
        default=False,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'enabled': field_from_ini(
                cls.enabled, ini,
                'Console', 'LOG',
            ),
            'file_name': field_from_ini(
                cls.file_name, ini,
                'Console', 'LOGFILE',
            ),
            'log_time': field_from_ini(
                cls.log_time, ini,
                'Console', 'LOGTIME',
            ),
            'keep_file': field_from_ini(
                cls.keep_file, ini,
                'Console', 'LOGKEEP',
            ),
        })

    def to_ini(self, ini):
        field_to_ini(self.enabled, ini, 'Console', 'LOG')
        field_to_ini(self.file_name, ini, 'Console', 'LOGFILE')
        field_to_ini(self.log_time, ini, 'Console', 'LOGTIME')
        field_to_ini(self.keep_file, ini, 'Console', 'LOGKEEP')

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class History(Model):
    max_commands = IntType(
        min_value=0,
        max_value=10000,
        default=128,
        required=True,
    )
    max_records = IntType(
        min_value=0,
        max_value=10000,
        default=128,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'max_commands': field_from_ini(
                cls.max_commands, ini,
                'Console', 'HISTORYCMD',
            ),
            'max_records': field_from_ini(
                cls.max_records, ini,
                'Console', 'HISTORY',
            ),
        })

    def to_ini(self, ini):
        field_to_ini(self.max_commands, ini, 'Console', 'HISTORYCMD')
        field_to_ini(self.max_records, ini, 'Console', 'HISTORY')

    @classmethod
    def default(cls):
        return cls({
            field_name: field.default
            for field_name, field in cls.fields.items()
        })


@zope.interface.implementer(INISerializable)
@zope.interface.implementer(DefaultProvider)
class Console(Model):
    connection = ModelType(
        model_spec=Connection,
        required=True,
    )
    logging = ModelType(
        model_spec=Logging,
        required=True,
    )
    history = ModelType(
        model_spec=History,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'connection': Connection.from_ini(ini),
            'logging': Logging.from_ini(ini),
            'history': History.from_ini(ini),
        })

    def to_ini(self, ini):
        for field_name in self.iter():
            self[field_name].to_ini(ini)

    @classmethod
    def default(cls):
        return cls({
            'connection': Connection.default(),
            'logging': Logging.default(),
            'history': History.default(),
        })
