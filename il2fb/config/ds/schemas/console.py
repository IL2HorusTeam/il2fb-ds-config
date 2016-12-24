# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import StringType, IntType, BooleanType
from schematics.types.compound import ListType, ModelType

from .interfaces import INISerializable


@zope.interface.implementer(INISerializable)
class Connection(Model):
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
            'port': ini.getint(
                'Console', 'IP',
                fallback=cls.port.default,
            ),
            'allowed_hosts': [
                x.strip()
                for x in
                (
                    ini
                    .get('Console', 'IPS', fallback="")
                    .split()
                )
            ],
        })


@zope.interface.implementer(INISerializable)
class Logging(Model):
    is_enabled = BooleanType(
        default=False,
        required=True,
    )
    file_name = StringType(
        default="log.lst",
        min_length=1,
        required=True,
    )
    keep = BooleanType(
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
            'is_enabled': ini.getboolean(
                'Console', 'LOG',
                fallback=cls.is_enabled.default,
            ),
            'file_name': ini.get(
                'Console', 'LOGFILE',
                fallback=cls.file_name.default,
            ),
            'log_time': ini.getboolean(
                'Console', 'LOGTIME',
                fallback=cls.log_time.default,
            ),
            'keep': ini.getboolean(
                'Console', 'LOGKEEP',
                fallback=cls.keep.default,
            ),
        })


@zope.interface.implementer(INISerializable)
class HistorySize(Model):
    commands = IntType(
        min_value=0,
        max_value=10000,
        default=128,
        required=True,
    )
    records = IntType(
        min_value=0,
        max_value=10000,
        default=128,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'commands': ini.getint(
                'Console', 'HISTORYCMD',
                fallback=cls.commands.default,
            ),
            'records': ini.getint(
                'Console', 'HISTORY',
                fallback=cls.records.default,
            ),
        })


@zope.interface.implementer(INISerializable)
class Console(Model):
    connection = ModelType(
        model_spec=Connection,
        required=True,
    )
    logging = ModelType(
        model_spec=Logging,
        required=True,
    )
    history_size = ModelType(
        model_spec=HistorySize,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'connection': Connection.from_ini(ini),
            'logging': Logging.from_ini(ini),
            'history_size': HistorySize.from_ini(ini),
        })
