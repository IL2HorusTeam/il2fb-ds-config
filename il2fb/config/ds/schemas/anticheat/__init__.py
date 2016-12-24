# coding: utf-8

import zope.interface

from schematics.models import Model
from schematics.types import IntType
from schematics.types.compound import ModelType

from ..interfaces import INISerializable
from .lags import Lags
from .speedhack import Speedhack


@zope.interface.implementer(INISerializable)
class Anticheat(Model):
    version_check_level = IntType(
        min_value=0,
        max_value=2,
        default=0,
        required=True,
    )
    lags = ModelType(
        model_spec=Lags,
        required=True,
    )
    speedhack = ModelType(
        model_spec=Speedhack,
        required=True,
    )

    @classmethod
    def from_ini(cls, ini):
        return cls({
            'version_check_level': ini.getint(
                'NET', 'checkRuntime',
                fallback=cls.version_check_level.default,
            ),
            'lags': Lags.from_ini(ini),
            'speedhack': Speedhack.from_ini(ini),
        })
